/* =====================================================================
   FOAD COD1 — Routeur API serverless Vercel (nom de fichier standard)
   Toutes les requêtes /api/* sont réécrites (vercel.json) vers
   /api/router?path=<sous-chemin>, ce qui évite tout souci de route
   catch-all dynamique. GIP Aviation / BA 125 Istres.
   ===================================================================== */
const crypto = require('crypto');

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'gip-istres-2026';
const KV_URL = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL || '';
const KV_TOKEN = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN || '';
const DB_KEY = 'foad:db';

let MEM = null;

async function kvGet(key) {
  const r = await fetch(`${KV_URL}/get/${encodeURIComponent(key)}`, { headers: { Authorization: `Bearer ${KV_TOKEN}` } });
  if (!r.ok) throw new Error('KV get ' + r.status);
  const j = await r.json();
  return j.result;
}
async function kvSet(key, val) {
  const r = await fetch(`${KV_URL}/set/${encodeURIComponent(key)}`, {
    method: 'POST', headers: { Authorization: `Bearer ${KV_TOKEN}`, 'Content-Type': 'text/plain' }, body: val
  });
  if (!r.ok) throw new Error('KV set ' + r.status);
}
async function loadDB() {
  if (KV_URL && KV_TOKEN) { const s = await kvGet(DB_KEY); return s ? JSON.parse(s) : { stagiaires: [] }; }
  if (!MEM) MEM = { stagiaires: [] };
  return MEM;
}
async function saveDB(db) {
  if (KV_URL && KV_TOKEN) { await kvSet(DB_KEY, JSON.stringify(db)); return; }
  MEM = db;
}

const uid = () => crypto.randomBytes(9).toString('hex');
const now = () => new Date().toISOString();
function adminToken() { return crypto.createHash('sha256').update('foad-admin::' + ADMIN_PASSWORD).digest('hex'); }
function isAdmin(req) {
  let t = req.headers['x-admin-token'];
  if (!t) { try { t = new URL(req.url, 'http://x').searchParams.get('token'); } catch (e) {} }
  return t && t === adminToken();
}
async function readBody(req) {
  if (req.body && typeof req.body === 'object') return req.body;
  if (typeof req.body === 'string') { try { return JSON.parse(req.body || '{}'); } catch (e) { return {}; } }
  return await new Promise((resolve) => {
    let d = ''; req.on('data', c => d += c);
    req.on('end', () => { try { resolve(JSON.parse(d || '{}')); } catch (e) { resolve({}); } });
    req.on('error', () => resolve({}));
  });
}
function send(res, code, obj) {
  res.statusCode = code;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.end(JSON.stringify(obj));
}
function publicView(s) {
  return {
    id: s.id, nom: s.nom, prenom: s.prenom, matricule: s.matricule,
    unite: s.unite, email: s.email, progress: s.progress, final: s.final,
    createdAt: s.createdAt, lastSeen: s.lastSeen
  };
}
function getParts(req) {
  let raw = req.query ? req.query.path : undefined;
  let parts;
  if (Array.isArray(raw)) parts = raw;
  else if (typeof raw === 'string' && raw.length) parts = raw.split('/').filter(Boolean);
  else {
    const p = (new URL(req.url, 'http://x').pathname).replace(/^\/api\/?/, '').replace(/^router\/?/, '');
    parts = p ? p.split('/').filter(Boolean) : [];
  }
  return parts;
}

module.exports = async (req, res) => {
  try {
    const parts = getParts(req);
    const route = parts.join('/');
    const method = req.method;

    if (route === 'register' && method === 'POST') {
      const b = await readBody(req);
      if (!b.nom || !b.prenom || !b.matricule) return send(res, 400, { error: 'Nom, prénom et matricule sont obligatoires.' });
      const db = await loadDB();
      const matLow = String(b.matricule).trim().toLowerCase();
      const ex = db.stagiaires.find(s => s.matricule.toLowerCase() === matLow);
      if (ex) return send(res, 409, { error: 'Un stagiaire avec ce matricule existe déjà. Utilisez « Reprendre ».', id: ex.id });
      const s = {
        id: uid(), nom: String(b.nom).trim(), prenom: String(b.prenom).trim(),
        matricule: String(b.matricule).trim(), unite: b.unite ? String(b.unite).trim() : '',
        email: b.email ? String(b.email).trim() : '',
        createdAt: now(), lastSeen: now(), progress: { seen: {}, quiz: {} }, final: null
      };
      db.stagiaires.push(s); await saveDB(db);
      return send(res, 200, { stagiaire: publicView(s) });
    }

    if (route === 'login' && method === 'POST') {
      const b = await readBody(req);
      if (!b.matricule) return send(res, 400, { error: 'Matricule requis.' });
      const db = await loadDB();
      const s = db.stagiaires.find(x => x.matricule.toLowerCase() === String(b.matricule).trim().toLowerCase());
      if (!s) return send(res, 404, { error: 'Aucun stagiaire trouvé avec ce matricule.' });
      s.lastSeen = now(); await saveDB(db);
      return send(res, 200, { stagiaire: publicView(s) });
    }

    if (route === 'progress' && method === 'POST') {
      const b = await readBody(req);
      const db = await loadDB();
      const s = db.stagiaires.find(x => x.id === b.id);
      if (!s) return send(res, 404, { error: 'Stagiaire introuvable.' });
      if (b.moduleId) s.progress.seen[b.moduleId] = true;
      s.lastSeen = now(); await saveDB(db);
      return send(res, 200, { ok: true, stagiaire: publicView(s) });
    }

    if (route === 'quiz' && method === 'POST') {
      const b = await readBody(req);
      const db = await loadDB();
      const s = db.stagiaires.find(x => x.id === b.id);
      if (!s) return send(res, 404, { error: 'Stagiaire introuvable.' });
      const prev = s.progress.quiz[b.moduleId];
      const attempts = (prev ? prev.attempts : 0) + 1;
      const record = { passed: !!b.passed, pct: b.pct, good: b.good, total: b.total, attempts, answers: b.answers || [], date: now() };
      if (!prev || b.pct >= prev.pct) s.progress.quiz[b.moduleId] = record;
      else { prev.attempts = attempts; prev.lastDate = now(); }
      if (b.moduleId === 'final') s.final = s.progress.quiz['final'];
      s.lastSeen = now(); await saveDB(db);
      return send(res, 200, { ok: true, stagiaire: publicView(s) });
    }

    if (route === 'admin/login' && method === 'POST') {
      const b = await readBody(req);
      if (b.password !== ADMIN_PASSWORD) return send(res, 401, { error: 'Mot de passe incorrect.' });
      return send(res, 200, { token: adminToken() });
    }

    if (route === 'admin/stagiaires' && method === 'GET') {
      if (!isAdmin(req)) return send(res, 401, { error: 'Accès administrateur requis.' });
      const db = await loadDB();
      return send(res, 200, { stagiaires: db.stagiaires.map(publicView), generatedAt: now() });
    }

    if (parts[0] === 'admin' && parts[1] === 'stagiaire' && parts[2] && method === 'GET') {
      if (!isAdmin(req)) return send(res, 401, { error: 'Accès administrateur requis.' });
      const db = await loadDB();
      const s = db.stagiaires.find(x => x.id === parts[2]);
      if (!s) return send(res, 404, { error: 'Introuvable.' });
      return send(res, 200, { stagiaire: publicView(s) });
    }

    if (parts[0] === 'admin' && parts[1] === 'reset' && parts[2] && method === 'POST') {
      if (!isAdmin(req)) return send(res, 401, { error: 'Accès administrateur requis.' });
      const db = await loadDB();
      const s = db.stagiaires.find(x => x.id === parts[2]);
      if (!s) return send(res, 404, { error: 'Introuvable.' });
      s.progress = { seen: {}, quiz: {} }; s.final = null; await saveDB(db);
      return send(res, 200, { ok: true });
    }

    if (parts[0] === 'admin' && parts[1] === 'delete' && parts[2] && method === 'POST') {
      if (!isAdmin(req)) return send(res, 401, { error: 'Accès administrateur requis.' });
      const db = await loadDB();
      const idx = db.stagiaires.findIndex(x => x.id === parts[2]);
      if (idx === -1) return send(res, 404, { error: 'Introuvable.' });
      const removed = db.stagiaires.splice(idx, 1)[0];
      await saveDB(db);
      return send(res, 200, { ok: true, removed: removed ? removed.matricule : null });
    }

    if (route === 'admin/export.csv' && method === 'GET') {
      if (!isAdmin(req)) return send(res, 401, { error: 'Accès administrateur requis.' });
      const db = await loadDB();
      const moduleIds = ['m1', 'm2', 'm3', 'm4', 'm5', 'final'];
      const head = ['Nom', 'Prénom', 'Matricule', 'Unité', 'Email', 'Inscription', 'Dernière activité',
        ...moduleIds.map(m => m.toUpperCase() + ' %'), 'Modules validés', 'Statut global'];
      const rows = db.stagiaires.map(s => {
        const cells = [s.nom, s.prenom, s.matricule, s.unite, s.email, s.createdAt, s.lastSeen];
        let v = 0;
        moduleIds.forEach(m => { const q = s.progress.quiz[m]; cells.push(q ? q.pct : ''); if (q && q.passed) v++; });
        cells.push(v + '/' + moduleIds.length);
        cells.push(v === moduleIds.length ? 'TERMINÉ' : 'En cours');
        return cells;
      });
      const csv = [head, ...rows].map(r => r.map(c => '"' + String(c == null ? '' : c).replace(/"/g, '""') + '"').join(';')).join('\r\n');
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/csv; charset=utf-8');
      res.setHeader('Content-Disposition', 'attachment; filename="suivi_stagiaires_FOAD_COD1.csv"');
      return res.end('﻿' + csv);
    }

    return send(res, 404, { error: 'Route inconnue : ' + route });
  } catch (e) {
    return send(res, 500, { error: 'Erreur serveur : ' + (e && e.message ? e.message : 'inconnue') });
  }
};
