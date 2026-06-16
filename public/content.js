/* =====================================================================
   CONTENU PÉDAGOGIQUE — FOAD COD1 Conducteur d'engin-pompe
   GIP Aviation / Base aérienne 125 Istres — FPT SIDES Renault Midlum
   Source : notice technique SIDES + supports de cours GIP.
   ===================================================================== */

const COURSE = {
  titre: "FOAD COD1 — Conducteur d'engin-pompe",
  sousTitre: "GIP Aviation · Base aérienne 125 Istres · FPT SIDES Renault Midlum",
  modules: []
};

/* ---------- ACCUEIL ---------- */
COURSE.modules.push({ id: "accueil", menu: "Accueil & objectifs", num: "⌂", quiz: null, html: `
  <div class="hero">
    <span class="tag">FOAD e-learning · à réaliser AVANT le présentiel</span>
    <h2>Formation de conducteur d'engin-pompe</h2>
    <p>Parcours de vérification des acquis sur le Fourgon Pompe Tonne (FPT) SIDES monté sur châssis Renault Midlum, en service au sein de la société GIP sur la base aérienne 125 d'Istres. Ce module à distance prépare la journée de formation pratique en présentiel sur l'engin.</p>
  </div>
  <div class="card">
    <h3 style="margin-top:0">Comment se déroule le COD1 ?</h3>
    <p>Le programme se compose de <b>deux temps complémentaires</b> :</p>
    <ol class="steps">
      <li><b>Cette FOAD de vérification des acquis</b> (à distance, en autonomie) : réviser et consolider l'ensemble des connaissances théoriques nécessaires à la conduite et à la mise en œuvre de l'engin-pompe.</li>
      <li><b>Une journée en présentiel</b> sur l'engin : brainstorming de retour de FOAD, mise en œuvre de la pompe, alimentation, production de mousse, scénarios complets du site, puis QCM de fin de formation et questionnaire de satisfaction.</li>
    </ol>
    <p>L'enjeu de la partie à distance est simple : <b>arriver le jour de la pratique avec les fondamentaux solidement acquis</b>, pour consacrer le présentiel à la manœuvre réelle plutôt qu'à la théorie.</p>
  </div>
  <div class="card">
    <h3 style="margin-top:0">Objectifs pédagogiques du parcours</h3>
    <div class="objgrid">
      <div class="o"><b>1 · Conduite & sécurité</b><br><span>Connaître l'engin, le poste de conduite et les règles de sécurité liées à la conduite.</span></div>
      <div class="o"><b>2 · Pertes de charge</b><br><span>Maîtriser les lois et les méthodes de calcul hydraulique.</span></div>
      <div class="o"><b>3 · La pompe</b><br><span>Mettre en pompe, gérer la pression et reconnaître les éléments.</span></div>
      <div class="o"><b>4 · Mise en aspiration</b><br><span>Mode opératoire et système d'amorçage SIDES.</span></div>
      <div class="o"><b>5 · Pannes & entretien</b><br><span>Identifier les pannes et apporter une solution opérationnelle.</span></div>
      <div class="o"><b>★ QCM final</b><br><span>Vérification globale des acquis avant le présentiel.</span></div>
    </div>
  </div>
  <div class="callout info">Chaque module se termine par un <b>QCM d'autoévaluation</b> (seuil de réussite : <b>80 %</b>). Votre progression et vos scores sont enregistrés sur le serveur et consultables par le formateur. Vous pouvez quitter et reprendre à tout moment avec votre matricule.</div>
  <div class="card">
    <h3 style="margin-top:0">L'engin en bref — FPT SIDES sur Renault Midlum</h3>
    <p>Le Fourgon Pompe Tonne est une auto-pompe conçue pour mener à bien, en première intervention, les opérations d'extinction courantes (jusqu'à 3 lances de 65/18 à 300 m) ainsi que des opérations de sauvetage élémentaires.</p>
    <div class="grid2">
      <div class="kpi"><b>2000 l/min</b><span>Débit nominal de la pompe (15 bars à 3 m)</span></div>
      <div class="kpi"><b>3100 l</b><span>Capacité de la citerne à eau</span></div>
      <div class="kpi"><b>≤ 8 m</b><span>Hauteur verticale d'aspiration maximale</span></div>
      <div class="kpi"><b>8 bars</b><span>Pression d'air (freins & prise de mouvement)</span></div>
      <div class="kpi"><b>≤ 2000 t/min</b><span>Régime moteur maxi à l'amorçage</span></div>
      <div class="kpi"><b>13 à 15 t</b><span>Masse totale en charge (PTAC)</span></div>
    </div>
  </div>
  <div class="callout tip">Conseil de méthode : lisez chaque module dans l'ordre, prenez des notes sur les <b>valeurs-clés</b> (pressions, hauteurs, temps, régimes) et ne validez le QCM qu'après avoir vraiment compris — le présentiel s'appuiera dessus.</div>
`});

/* ====================================================================== */
/* MODULE 1 — CONDUITE ET SÉCURITÉ                                        */
/* ====================================================================== */
COURSE.modules.push({ id: "m1", menu: "1 · Conduite & sécurité", num: "1", html: `
  <div class="crumb">Module 1 · Durée estimée 20 min</div>
  <h2 class="title"><span class="ic">🚒</span> Conduite et sécurité</h2>
  <p class="lead">Connaître l'engin et son poste de conduite, maîtriser le démarrage, la mise à l'arrêt et les règles de sécurité du roulage.</p>

  <h3>1.1 — Connaître son véhicule</h3>
  <p>Conduire un engin-pompe ne s'improvise pas. Avant de prendre le volant, le conducteur doit <b>connaître les caractéristiques de l'engin</b>, <b>maîtriser ses capacités</b> (gabarit, masse, freinage, rayon de braquage) et <b>savoir où se trouvent et à quoi servent</b> les différentes commandes et voyants. C'est la condition pour mener la mission à bien tout en préservant la sécurité du personnel transporté.</p>
  <div class="card">
    <h4 style="margin-top:0">Le châssis et le moteur</h4>
    <table class="t">
      <tr><th>Élément</th><th>Caractéristique</th></tr>
      <tr><td>Châssis</td><td>Renault Midlum 270 SP — type 4×2 — empattement ≈ 3,73 m</td></tr>
      <tr><td>Moteur</td><td>MIDR 06-20-45 / dCi 6 · 188 kW (255 ch) · carburant gazole</td></tr>
      <tr><td>Capacité réservoir carburant</td><td>150 litres</td></tr>
      <tr><td>Norme antipollution</td><td>EURO 2 · norme de bruit 80 dB (CEE)</td></tr>
      <tr><td>Essieux / roues</td><td>2 essieux · 2 roues avant, 4 roues arrière · pneus 275/80 R 22,5</td></tr>
      <tr><td>Masse totale en charge (PTAC)</td><td>13 000 à 15 000 kg</td></tr>
      <tr><td>Masse à vide</td><td>≈ 7 280 kg</td></tr>
      <tr><td>Dimensions (L × l × H)</td><td>7,50 m × 2,50 m × 3,20 m</td></tr>
    </table>
  </div>
  <div class="card">
    <h4 style="margin-top:0">Le freinage</h4>
    <p>L'engin dispose de <b>freins à disque</b>, d'un dispositif <b>ABS</b> et d'un <b>ralentisseur sur échappement</b>. Le système de freinage est <b>pneumatique</b> : il a besoin d'une réserve d'air sous pression pour fonctionner (voir 1.3). Le ralentisseur sert à <b>maîtriser la vitesse en descente</b> sans surchauffer les freins de service : c'est un outil de sécurité, à utiliser selon les bonnes pratiques.</p>
  </div>
  <div class="card">
    <h4 style="margin-top:0">La cabine</h4>
    <p>Cabine basculable <b>8 places</b>, tout acier, à <b>4 portes</b>. L'habitacle est conçu pour recevoir <b>4 appareils respiratoires isolants (ARI)</b>. Le conducteur est responsable du confort et de la sécurité de l'équipage : ceintures, maintien, fermeture des portes.</p>
  </div>

  <h3>1.2 — Démarrage du véhicule</h3>
  <ol class="steps">
    <li>Alimenter électriquement en actionnant le bouton dédié.</li>
    <li>Vérifier que le sélecteur de vitesse est au <b>point mort</b>.</li>
    <li>Tourner la clef jusqu'au <b>contact</b>.</li>
    <li>Attendre que les <b>voyants de contrôle soient éteints</b>, puis tourner la clef pour le démarrage.</li>
    <li><b>Ne pas accélérer</b> : laisser le temps à l'huile de lubrifier l'axe du turbo.</li>
  </ol>
  <div class="callout warn">Le turbo tourne à très haute vitesse et n'est lubrifié que lorsque l'huile moteur circule. Accélérer turbo « à froid » l'use prématurément. <b>On laisse donc le moteur monter doucement en température.</b></div>

  <h3>1.3 — La pression d'air : un prérequis de sécurité</h3>
  <p>Le circuit de freinage et la prise de mouvement sont commandés par air comprimé. La pression doit atteindre <b>8 bars</b> :</p>
  <ul>
    <li>pour que <b>les freins fonctionnent</b> et autorisent le déplacement du véhicule ;</li>
    <li>pour permettre, en cas de <b>mise en pompe sans déplacement</b>, l'<b>enclenchement de la prise de mouvement</b>.</li>
  </ul>
  <div class="callout danger"><b>Piège classique :</b> le voyant « prise de mouvement » peut s'allumer alors que la pression d'air est insuffisante. Dans ce cas, <b>la pompe n'est pas réellement entraînée</b>. Toujours vérifier la pression d'air avant de conclure que la prise de mouvement est effective.</div>

  <h3>1.4 — Mise à l'arrêt</h3>
  <ol class="steps">
    <li>Avant l'arrêt, <b>ne pas accélérer</b> : on évite de solliciter l'axe du turbo qui ne sera plus lubrifié une fois le moteur coupé. Idéalement, laisser tourner au ralenti une à deux minutes pour refroidir.</li>
    <li>Tourner la clef jusqu'à sa <b>position d'origine</b>.</li>
    <li>Couper l'alimentation électrique avec le bouton dédié.</li>
  </ol>
  <div class="callout warn"><b>Ne jamais arrêter brutalement un moteur chaud.</b> Un arrêt brutal après un effort soutenu endommage le turbo et le circuit de refroidissement.</div>

  <h3>1.5 — Le roulage en sécurité</h3>
  <p>Conduire en sécurité, c'est conjuguer la <b>connaissance de l'engin</b>, la <b>prudence</b> et le <b>respect du code de la route</b>. Quelques règles essentielles :</p>
  <ul>
    <li>La <b>fiche technique constructeur</b> renseigne sur la puissance et les caractéristiques du moteur et du châssis : on s'y réfère pour connaître les limites de l'engin.</li>
    <li>Le <b>freinage</b> et le <b>ralentisseur</b> s'utilisent selon les bonnes pratiques (anticipation, ralentisseur en descente).</li>
    <li>Le conducteur doit <b>connaître les boutons de commande</b> (électriques, mécaniques, pneumatiques) ainsi que les <b>voyants de contrôle</b>.</li>
    <li>Une <b>conduite souple</b> et une <b>vitesse adaptée</b> permettent un déplacement en sécurité, d'autant que l'engin transporte 3 100 litres d'eau dont le ballant influence la tenue de route.</li>
    <li>Avant de partir, le conducteur <b>vérifie l'arrimage du matériel et la fermeture des coffres</b>.</li>
  </ul>
  <div class="callout tip"><b>À retenir :</b> la pression d'air de <b>8 bars</b> est la condition commune au déplacement (freins) et à l'enclenchement de la prise de mouvement. C'est le réflexe-sécurité numéro un de ce module.</div>
`,
quiz: { title: "QCM — Module 1 : Conduite et sécurité", pass: 80, questions: [
  { q: "À quelle pression d'air les freins fonctionnent-ils et le déplacement est-il permis&nbsp;?", o: ["3 bars", "6 bars", "8 bars", "15 bars"], c: [2], e: "La pression d'air doit atteindre 8 bars pour les freins et pour l'enclenchement de la prise de mouvement." },
  { q: "Pourquoi ne pas accélérer juste après le démarrage et juste avant l'arrêt&nbsp;?", o: ["Pour économiser du carburant", "Pour laisser l'huile lubrifier l'axe du turbo", "Pour ménager les pneus", "Pour charger les batteries"], c: [1], e: "On évite de solliciter le turbo tant qu'il n'est pas (ou plus) correctement lubrifié." },
  { q: "Le voyant « prise de mouvement » est allumé. Que peut-on en conclure avec certitude&nbsp;?", o: ["La pompe est forcément entraînée", "La pompe peut ne pas être entraînée si la pression d'air est insuffisante", "Le frein de parc est serré", "La citerne est pleine"], c: [1], e: "Le voyant peut être allumé alors que la pression d'air ne suffit pas : la pompe n'est alors pas réellement entraînée." },
  { q: "Quel est l'ordre correct au démarrage&nbsp;?", o: ["Contact → alimentation → point mort → démarrage", "Alimentation → point mort → contact → démarrage (voyants éteints)", "Démarrage → point mort → alimentation", "Point mort → démarrage → alimentation"], c: [1], e: "On alimente, on vérifie le point mort, on met le contact, puis on démarre une fois les voyants éteints." },
  { q: "Quelles vérifications incombent au conducteur avant le roulage&nbsp;? (plusieurs réponses)", o: ["Arrimage du matériel", "Fermeture des coffres", "Connaissance des voyants et commandes", "Recalcul du PTAC du véhicule"], c: [0, 1, 2], e: "Arrimage, coffres, et connaissance des commandes/voyants. Le PTAC est une donnée constructeur." },
  { q: "À quoi sert le ralentisseur sur échappement&nbsp;?", o: ["À accélérer plus vite", "À maîtriser la vitesse en descente sans surchauffer les freins", "À amorcer la pompe", "À gonfler les bouteilles d'air"], c: [1], e: "Le ralentisseur aide à contrôler la vitesse en descente et préserve les freins de service." },
  { q: "Combien de places compte la cabine et pour combien d'ARI est-elle conçue&nbsp;?", o: ["4 places / 2 ARI", "8 places / 4 ARI", "6 places / 6 ARI", "2 places / 0 ARI"], c: [1], e: "Cabine 8 places, conçue pour recevoir 4 appareils respiratoires isolants." }
]}});

/* ====================================================================== */
/* MODULE 2 — PERTES DE CHARGE                                            */
/* ====================================================================== */
COURSE.modules.push({ id: "m2", menu: "2 · Pertes de charge", num: "2", html: `
  <div class="crumb">Module 2 · Durée estimée 30 min</div>
  <h2 class="title"><span class="ic">📐</span> Les pertes de charge et les calculs hydrauliques</h2>
  <p class="lead">Comprendre ce qu'est une perte de charge, connaître ses lois, et savoir calculer la pression de refoulement nécessaire à un établissement.</p>

  <h3>2.1 — Qu'est-ce qu'une perte de charge&nbsp;?</h3>
  <p>Quand l'eau circule dans un tuyau, elle « frotte » contre les parois et perd de l'énergie : c'est la <b>perte de charge</b>, exprimée en bars. Plus cette perte est importante, plus la pompe doit refouler fort pour que la lance dispose de la pression voulue. Le conducteur doit donc savoir l'estimer pour <b>régler correctement la pression de refoulement</b>.</p>

  <h3>2.2 — Les lois des pertes de charge</h3>
  <div class="card">
    <ul>
      <li>Elles dépendent de la <b>nature et de la rugosité</b> du tuyau (toile, semi-rigide…).</li>
      <li>Elles sont <b>directement proportionnelles à la longueur</b> : plus l'établissement est long, plus il y a de pertes.</li>
      <li>Elles sont <b>inversement proportionnelles au diamètre</b> : à débit égal, plus le tuyau est gros, plus les pertes diminuent.</li>
      <li>Elles sont <b>indépendantes de la pression</b> : <b>seul le débit compte</b>.</li>
      <li>À diamètre donné, <b>plus le débit augmente, plus les pertes augmentent</b> (et de façon quadratique, voir la formule).</li>
    </ul>
  </div>

  <h3>2.3 — La formule des pertes de charge</h3>
  <div class="formula">J₂ = J₁ × ( <b>Q₂ / Q₁</b> )²</div>
  <table class="t">
    <tr><th>Symbole</th><th>Signification</th></tr>
    <tr><td>Q₁</td><td>Débit nominal de référence dans un tuyau</td></tr>
    <tr><td>J₁</td><td>Pertes de charge nominales hectométriques (pour 100 m) au débit Q₁</td></tr>
    <tr><td>Q₂</td><td>Nouveau débit réellement écoulé dans le tronçon</td></tr>
    <tr><td>J₂</td><td>Nouvelles pertes de charge hectométriques (pour 100 m) au débit Q₂</td></tr>
  </table>
  <div class="callout warn">Le rapport des débits est <b>élevé au carré</b> : doubler le débit multiplie les pertes par 4. C'est l'élément le plus souvent oublié dans les calculs.</div>
  <h4>Ramener les pertes à la longueur réelle</h4>
  <p>J₂ est calculé <b>pour 100 m</b>. Pour la longueur réelle de l'établissement, on applique une règle de proportionnalité : pour 60 m, on multiplie par 0,6 ; pour 40 m, par 0,4 ; etc.</p>

  <h3>2.4 — Le dénivelé (Z)</h3>
  <p>À la perte due aux frottements s'ajoute (ou se retranche) la perte due à la <b>hauteur</b> : c'est le dénivelé Z, qui vaut <b>1 bar pour 10 mètres</b>.</p>
  <table class="t">
    <tr><th>Situation</th><th>Effet sur Z</th><th>Exemple</th></tr>
    <tr><td>Montée</td><td><b>+ 1 bar / 10 m</b></td><td>Lance établie sur une échelle</td></tr>
    <tr><td>Descente</td><td><b>− 1 bar / 10 m</b></td><td>Établissement dans un parking souterrain</td></tr>
  </table>
  <div class="callout info">Connaître ce repère (1 bar pour 10 m) est aussi essentiel que la formule elle-même.</div>

  <h3>2.5 — Calculer la pression de refoulement</h3>
  <p>La pression que la pompe doit fournir au refoulement (Pr) se compose de trois termes :</p>
  <div class="formula">Pr = Po + Z + Σ J₂</div>
  <ul>
    <li><b>Po</b> = pression à l'orifice de la lance, donnée par le fabricant ;</li>
    <li><b>Z</b> = perte (ou gain) due au dénivelé ;</li>
    <li><b>Σ J₂</b> = somme des pertes de charge de chaque tronçon de l'établissement.</li>
  </ul>
  <div class="callout warn">Le calcul des J₂ se fait <b>indépendamment pour chaque diamètre de tuyau</b>, puis on additionne le tout. La perte dans les pièces de jonction (raccords, divisions) est <b>négligeable</b>.</div>

  <h3>2.6 — Exemple complet (cas du FPT)</h3>
  <div class="card">
    <p>Établissement raccordé au FPT :</p>
    <ul>
      <li>1 ligne d'attaque : <b>1 tuyau Ø 70 mm de 40 m</b> ;</li>
      <li>1 division 65 / 2×40 mm ;</li>
      <li><b>2 LDV de 500 l/min à 60 m chacune</b>, dont <b>une établie à 10 m de hauteur</b>.</li>
    </ul>
    <p>On calcule pour la <b>LDV la plus défavorisée</b>, c'est-à-dire celle établie à 10 m de hauteur.</p>
    <p><b>Débits réels (Q₂) :</b></p>
    <ul>
      <li>dans chaque tuyau Ø 45 mm : 500 l/min (une LDV) ;</li>
      <li>dans le tuyau Ø 70 mm : 500 + 500 = <b>1000 l/min</b> (les deux LDV).</li>
    </ul>
    <table class="t">
      <tr><th>Tronçon</th><th>Q₂</th><th>J₂ pour 100 m</th><th>Ramené à la longueur</th></tr>
      <tr><td>Ø 45 mm</td><td>500 l/min</td><td>1,5 × (500/250)² = <b>6 b</b></td><td>6 × 0,6 (60 m) = <b>3,6 b</b></td></tr>
      <tr><td>Ø 70 mm</td><td>1000 l/min</td><td>0,55 × (1000/500)² = <b>2,2 b</b></td><td>2,2 × 0,4 (40 m) = <b>0,88 b</b></td></tr>
    </table>
    <p>Avec Po = 6 b (pression à la lance) et Z = 1 b (10 m de hauteur) :</p>
    <div class="formula" style="font-size:16px">Pr = 6 + 1 + 3,6 + 0,88 = <b>11,48 b</b> → arrondi à <b>12 b</b></div>
    <p>Le conducteur affichera donc <b>environ 12 bars</b> au refoulement pour cet établissement.</p>
  </div>

  <div class="schema">
    <svg viewBox="0 0 640 210" xmlns="http://www.w3.org/2000/svg" font-family="Segoe UI,Arial" font-size="12">
      <rect x="10" y="120" width="70" height="55" rx="6" fill="#c8102e"/>
      <text x="45" y="150" fill="#fff" text-anchor="middle" font-weight="700">FPT</text>
      <text x="45" y="166" fill="#fff" text-anchor="middle" font-size="10">Pr ≈ 12 b</text>
      <line x1="80" y1="142" x2="250" y2="142" stroke="#1f6fb2" stroke-width="11"/>
      <text x="162" y="132" text-anchor="middle" fill="#0e2433">Ø70 · 40 m · 1000 l/min</text>
      <rect x="250" y="126" width="42" height="32" rx="4" fill="#16344a"/>
      <text x="271" y="146" fill="#fff" text-anchor="middle" font-size="10">Division</text>
      <line x1="292" y1="142" x2="470" y2="92" stroke="#1f6fb2" stroke-width="6"/>
      <line x1="292" y1="142" x2="470" y2="178" stroke="#1f6fb2" stroke-width="6"/>
      <text x="382" y="100" text-anchor="middle" fill="#0e2433" transform="rotate(-11 382 100)">Ø45 · 60 m · 500 l/min · +10 m</text>
      <text x="382" y="195" text-anchor="middle" fill="#0e2433">Ø45 · 60 m · 500 l/min</text>
      <circle cx="478" cy="90" r="9" fill="#f2a900"/><text x="500" y="94" fill="#0e2433">LDV ↑</text>
      <circle cx="478" cy="178" r="9" fill="#f2a900"/><text x="500" y="182" fill="#0e2433">LDV</text>
    </svg>
    <div class="cap">Établissement de l'exemple — la LDV en hauteur est la plus défavorisée, on dimensionne la pression sur elle.</div>
  </div>

  <h3>2.7 — Mémo méthode</h3>
  <ol class="steps">
    <li>Identifier la <b>lance la plus défavorisée</b> (la plus loin, la plus haute, ou la plus exigeante).</li>
    <li>Déterminer le <b>débit réel (Q₂)</b> dans chaque diamètre de tuyau.</li>
    <li>Calculer <b>J₂ pour 100 m</b> dans chaque diamètre, puis le <b>ramener à la longueur</b> réelle.</li>
    <li>Ajouter Po (lance) + Z (dénivelé) + la somme des J₂.</li>
    <li><b>Arrondir</b> la pression de refoulement à la valeur utile supérieure.</li>
  </ol>
`,
quiz: { title: "QCM — Module 2 : Pertes de charge", pass: 80, questions: [
  { q: "De quoi les pertes de charge dépendent-elles&nbsp;?", o: ["De la pression dans le tuyau", "Du débit, de la longueur, du diamètre et de la nature du tuyau", "Uniquement de la température de l'eau", "Uniquement de la pompe"], c: [1], e: "Débit, longueur, diamètre, rugosité/nature — et elles sont indépendantes de la pression." },
  { q: "Pour un même débit, augmenter le diamètre du tuyau…", o: ["augmente les pertes", "diminue les pertes", "ne change rien", "annule la pression"], c: [1], e: "Les pertes sont inversement proportionnelles au diamètre." },
  { q: "Si on double le débit dans un tuyau, les pertes de charge sont multipliées par&nbsp;:", o: ["2", "3", "4", "elles ne changent pas"], c: [2], e: "La formule élève le rapport des débits au carré : ×2 sur le débit donne ×4 sur les pertes." },
  { q: "Quelle est la formule des pertes de charge&nbsp;?", o: ["J₂ = J₁ × (Q₂/Q₁)²", "J₂ = J₁ × (Q₁/Q₂)", "Pr = Po − Z", "J₂ = Q₂ × Z²"], c: [0], e: "J₂ = J₁ × (Q₂/Q₁)²." },
  { q: "Une LDV est à 10 m de hauteur. Quel dénivelé Z ajouter&nbsp;?", o: ["−1 bar", "+1 bar", "+10 bars", "0 bar"], c: [1], e: "+1 bar pour 10 m en montée." },
  { q: "Quelle est la formule de la pression de refoulement&nbsp;?", o: ["Pr = Po + Z + ΣJ₂", "Pr = Po − Z − ΣJ₂", "Pr = Q₂ × J₁", "Pr = Po × Z"], c: [0], e: "Pr = Po (lance) + Z (dénivelé) + somme des pertes de charge." },
  { q: "Dans l'exemple, quelle est la pression de refoulement arrondie&nbsp;?", o: ["6 b", "8 b", "12 b", "20 b"], c: [2], e: "11,48 b arrondi à 12 b." },
  { q: "Avec plusieurs diamètres dans l'établissement, comment calcule-t-on&nbsp;?", o: ["On garde le plus gros diamètre seulement", "On calcule chaque diamètre séparément puis on additionne", "On fait une moyenne", "On ignore les petits diamètres"], c: [1], e: "Chaque tronçon se calcule indépendamment, puis on somme les J₂." },
  { q: "La perte de charge dans les pièces de jonction (raccords, divisions) est&nbsp;:", o: ["prépondérante", "négligeable", "égale à Z", "égale à Po"], c: [1], e: "Elle est négligeable dans le calcul." }
]}});

/* ====================================================================== */
/* MODULE 3 — LA POMPE                                                    */
/* ====================================================================== */
COURSE.modules.push({ id: "m3", menu: "3 · La pompe", num: "3", html: `
  <div class="crumb">Module 3 · Durée estimée 30 min</div>
  <h2 class="title"><span class="ic">⚙️</span> Mise en pompe et fonctionnement</h2>
  <p class="lead">Reconnaître les éléments de l'installation hydraulique, mettre la pompe en œuvre, gérer la pression et les débits.</p>

  <h3>3.1 — L'installation hydraulique</h3>
  <p>La pompe est une <b>pompe centrifuge entraînée par le moteur</b> du véhicule via la <b>prise de mouvement</b>. Son débit nominal est de <b>2000 l/min à 15 bars (à 3 m)</b>. Elle est alimentée soit par la <b>citerne</b> (3100 litres), soit par une <b>source extérieure</b> (point d'eau par aspiration, ou bouche/poteau d'incendie sous pression).</p>
  <div class="card">
    <h4 style="margin-top:0">Les éléments à reconnaître sur le tableau de mise en œuvre</h4>
    <table class="t">
      <tr><th>Élément</th><th>Fonction</th></tr>
      <tr><td>Vanne d'alimentation citerne</td><td>Met la pompe en relation avec la réserve d'eau du véhicule.</td></tr>
      <tr><td>Vanne d'alimentation extérieure</td><td>Met la pompe en relation avec un point d'eau / une bouche.</td></tr>
      <tr><td>Vannes de refoulement</td><td>Alimentent les lances et établissements ; vannes à clapet (laminage/réglage du débit).</td></tr>
      <tr><td>Vanne « retour tonne »</td><td>Renvoie de l'eau vers la citerne pour éviter l'échauffement en circuit fermé et compléter la tonne.</td></tr>
      <tr><td>Manomètre de refoulement</td><td>Affiche la pression de sortie de la pompe (valeur positive).</td></tr>
      <tr><td>Mano-vacuomètre</td><td>Affiche la dépression à l'aspiration (valeur négative) ou la pression d'un point d'eau.</td></tr>
      <tr><td>Accélérateur manuel</td><td>Règle le régime moteur, donc la pression, depuis le poste pompe.</td></tr>
      <tr><td>Robinets de purge / vidange</td><td>Vident le circuit (entretien, conditionnement hiver).</td></tr>
      <tr><td>Système d'amorçage</td><td>Amorceur, vanne d'amorçage, bocal — voir module 4.</td></tr>
    </table>
  </div>

  <h3>3.2 — Mise en pompe (boîte manuelle)</h3>
  <ol class="steps">
    <li>Démarrer le moteur s'il était à l'arrêt, et le laisser tourner <b>au ralenti</b>.</li>
    <li>Vérifier que la pression d'air est <b>≥ 8 bars</b> (laisser gonfler les bouteilles d'air si besoin).</li>
    <li>Mettre le <b>frein de parc</b>.</li>
    <li>Appuyer sur la <b>pédale d'embrayage</b> (débrayer).</li>
    <li>Appuyer sur le <b>bouton de prise de mouvement</b> (crabotage). Le voyant orangé « PRISE DE MOUVEMENT » s'allume.</li>
    <li><b>Relâcher</b> la pédale d'embrayage.</li>
    <li>Si l'on descend du véhicule, <b>caler</b> celui-ci.</li>
  </ol>
  <div class="callout danger">Ne jamais craboter la prise de mouvement <b>sans avoir débrayé</b> au préalable : on risque d'endommager la transmission et la prise de mouvement.</div>

  <h3>3.3 — Fonctionnement de la pompe</h3>
  <ol class="steps">
    <li>Choisir l'<b>alimentation</b> :
      <ul><li>pas d'alimentation extérieure → ouvrir la <b>vanne citerne</b> ;</li>
      <li>sur point d'eau / aspiration → ouvrir la <b>vanne extérieure</b> (voir module 4) ;</li>
      <li>sur bouche d'incendie → l'amorçage est inutile (la source est sous pression).</li></ul></li>
    <li>Tirer l'<b>accélérateur manuel</b> pour obtenir <b>3 à 4 bars minimum</b> : cette pression <b>arrête l'amorceur</b> (sur point d'eau, vérifier la pression au mano-vacuomètre).</li>
    <li>Ouvrir la vanne <b>« retour tonne »</b> pour éviter l'échauffement de la pompe en circuit fermé.</li>
    <li>Ouvrir <b>progressivement</b> sur le refoulement.</li>
    <li><b>Accélérer</b> pour atteindre la <b>pression de consigne</b> (celle calculée au module 2).</li>
  </ol>
  <div class="callout danger">Le <b>conducteur est garant</b> de l'alimentation des lances et de la pression nécessaire à leur bon fonctionnement tout au long de l'intervention.</div>

  <h3>3.4 — Gérer la pression et les débits</h3>
  <p>La pression varie quand on ouvre ou ferme des lances : le conducteur surveille en permanence le manomètre de refoulement et ajuste le régime moteur. La <b>vanne à clapet</b> sur le refoulement permet le <b>laminage</b> (réglage du débit) et régule automatiquement son ouverture selon les variations de débit/pression. Elle évite aussi le désamorçage lors d'une baisse de régime. <b>Fermeture sens horaire, ouverture sens anti-horaire.</b></p>
  <div class="callout warn">Avant de <b>fermer sur le refoulement</b>, <b>baisser le régime moteur jusqu'à 3 ou 4 bars</b> : on évite les coups de bélier et le désamorçage.</div>

  <h3>3.5 — Arrêt de la pompe</h3>
  <ol class="steps">
    <li>Vérifier que le régime est <b>au ralenti</b> (accélérateur manuel au repos).</li>
    <li>Appuyer sur la <b>pédale d'embrayage</b>.</li>
    <li>Faire <b>désenclencher</b> le bouton de prise de mouvement.</li>
    <li><b>Relâcher</b> la pédale d'embrayage.</li>
  </ol>

  <h3>3.6 — Fausses manœuvres à éviter</h3>
  <div class="card">
    <ul>
      <li>Ne pas craboter la prise de mouvement sans avoir débrayé.</li>
      <li>Ne pas prolonger un régime moteur au maxi (≈ 2100 t/min).</li>
      <li><b>Ne pas laisser tourner la pompe à sec</b> : le liquide pompé assure sa lubrification et son refroidissement.</li>
      <li>Ne pas laisser tourner la pompe longtemps <b>sans la faire débiter</b> (d'où le retour tonne).</li>
      <li>Ne pas prolonger un amorçage au-delà de <b>60 secondes</b> : au-delà, il y a une anomalie à détecter.</li>
    </ul>
  </div>
  <div class="callout info"><b>Après utilisation :</b> laisser les vannes de refoulement <b>partiellement ouvertes</b> (consigne constructeur).</div>

  <div class="schema">
    <svg viewBox="0 0 620 210" xmlns="http://www.w3.org/2000/svg" font-family="Segoe UI,Arial" font-size="11">
      <rect x="250" y="80" width="120" height="62" rx="10" fill="#16344a"/>
      <text x="310" y="116" fill="#fff" text-anchor="middle" font-weight="700">POMPE</text>
      <rect x="40" y="20" width="130" height="40" rx="8" fill="#1f6fb2"/>
      <text x="105" y="45" fill="#fff" text-anchor="middle">Citerne 3100 l</text>
      <line x1="105" y1="60" x2="280" y2="86" stroke="#1f6fb2" stroke-width="6"/>
      <text x="178" y="68" fill="#0e2433">vanne citerne</text>
      <rect x="40" y="150" width="155" height="40" rx="8" fill="#1e9e5a"/>
      <text x="117" y="175" fill="#fff" text-anchor="middle">Alim. extérieure</text>
      <line x1="195" y1="160" x2="280" y2="132" stroke="#1e9e5a" stroke-width="6"/>
      <line x1="370" y1="96" x2="540" y2="60" stroke="#c8102e" stroke-width="7"/>
      <text x="470" y="68" fill="#0e2433">refoulement → lances</text>
      <line x1="370" y1="126" x2="500" y2="172" stroke="#f2a900" stroke-width="6"/>
      <text x="470" y="192" fill="#0e2433">retour tonne</text>
      <circle cx="310" cy="58" r="15" fill="#f2a900"/><text x="310" y="62" text-anchor="middle" fill="#0e2433" font-size="9">Mano</text>
    </svg>
    <div class="cap">Circuit simplifié : alimentation (citerne ou extérieure) → pompe → refoulement, avec retour tonne pour éviter l'échauffement.</div>
  </div>
`,
quiz: { title: "QCM — Module 3 : Mise en pompe et fonctionnement", pass: 80, questions: [
  { q: "Quand appuie-t-on sur le bouton de prise de mouvement&nbsp;?", o: ["Avant d'embrayer", "Pédale d'embrayage enfoncée (débrayé)", "Après avoir relâché l'embrayage", "Pendant le roulage"], c: [1], e: "On débraye, on craboté la prise de mouvement, puis on relâche l'embrayage." },
  { q: "À quoi sert l'ouverture de la vanne « retour tonne »&nbsp;?", o: ["À remplir les lances", "À éviter l'échauffement de la pompe en circuit fermé (et compléter la tonne)", "À amorcer la pompe", "À couper le moteur"], c: [1], e: "Le retour tonne fait circuler l'eau pour éviter l'échauffement en circuit fermé." },
  { q: "Quelle pression minimale arrête le fonctionnement de l'amorceur&nbsp;?", o: ["1 à 2 bars", "3 à 4 bars", "8 bars", "12 bars"], c: [1], e: "On obtient 3 à 4 bars avec l'accélérateur manuel pour arrêter l'amorceur." },
  { q: "Que faut-il faire AVANT de fermer sur le refoulement&nbsp;?", o: ["Accélérer au maximum", "Baisser le régime jusqu'à 3-4 bars", "Couper la prise de mouvement", "Ouvrir la citerne"], c: [1], e: "On baisse à 3-4 bars pour éviter coups de bélier et désamorçage." },
  { q: "Pourquoi ne faut-il jamais faire tourner la pompe à sec&nbsp;?", o: ["Pour économiser l'eau", "Parce que le liquide pompé assure lubrification et refroidissement", "Pour ne pas user les pneus", "Pour garder la pression d'air"], c: [1], e: "Sans eau, la pompe n'est ni lubrifiée ni refroidie : elle s'endommage." },
  { q: "Sens de fermeture de la vanne à clapet sur le refoulement&nbsp;?", o: ["Sens horaire", "Sens anti-horaire", "Vers le haut", "Aucun sens"], c: [0], e: "Fermeture sens horaire, ouverture sens anti-horaire." },
  { q: "Qui est garant de l'alimentation des lances et de la pression&nbsp;?", o: ["Le chef d'agrès", "Le conducteur", "Le constructeur", "Le mécanicien"], c: [1], e: "Le conducteur en est garant pendant toute l'intervention." },
  { q: "Après utilisation, dans quel état laisse-t-on les vannes de refoulement&nbsp;?", o: ["Complètement fermées", "Partiellement ouvertes", "Démontées", "Complètement ouvertes"], c: [1], e: "Consigne constructeur : les laisser partiellement ouvertes." }
]}});

/* ====================================================================== */
/* MODULE 4 — MISE EN ASPIRATION & AMORÇAGE                               */
/* ====================================================================== */
COURSE.modules.push({ id: "m4", menu: "4 · Mise en aspiration", num: "4", html: `
  <div class="crumb">Module 4 · Durée estimée 35 min</div>
  <h2 class="title"><span class="ic">💧</span> La mise en aspiration & le système d'amorçage</h2>
  <p class="lead">Alimenter la pompe sur un point d'eau, connaître le système d'amorçage SIDES et son mode opératoire.</p>

  <h3>4.1 — Principe</h3>
  <p>Lorsque c'est <b>nécessaire et possible</b>, les lances peuvent être alimentées, via la pompe, par de l'eau provenant d'un <b>point d'eau naturel ou artificiel</b>. Il faut alors « monter » des <b>lignes d'aspiration</b> et respecter un mode opératoire propre à la pompe. Comme la pompe centrifuge ne peut pas « aspirer » seule, on lui associe un <b>système d'amorçage</b> qui crée le vide nécessaire pour faire monter l'eau jusqu'à elle.</p>

  <h3>4.2 — Le système d'amorçage SIDES</h3>
  <div class="card">
    <table class="t">
      <tr><th>Élément</th><th>Rôle</th></tr>
      <tr><td>Amorceur à anneau d'eau (débrayable par vérin)</td><td>Crée la dépression qui fait monter l'eau dans les aspiraux jusqu'à la pompe.</td></tr>
      <tr><td>Vanne d'amorçage automatique</td><td>Relie pompe et amorceur le temps de l'amorçage, puis isole l'amorceur dès que la pompe est en pression (ou en cas d'alimentation sous pression positive).</td></tr>
      <tr><td>Bocal d'amorçage</td><td>Remplit l'amorceur pour fabriquer l'« anneau d'eau » indispensable à son fonctionnement.</td></tr>
      <tr><td>Vérin de l'amorceur</td><td>Met l'amorceur en contact avec la roue d'entraînement (embrayage) ou le débraye.</td></tr>
    </table>
  </div>
  <div class="callout info">Une <b>plaque apposée à l'arrière du véhicule</b> donne généralement les indications de fonctionnement et d'amorçage propres à l'engin.</div>

  <h3>4.3 — Règles de mise en station</h3>
  <ul>
    <li>L'engin est placé sur un <b>plan de station dédié</b> (qui respecte des règles précises) ; s'il est identifié comme tel, l'engin doit être <b>calé</b>.</li>
    <li>Si le plan n'est <b>pas identifié</b>, garer l'engin de préférence <b>parallèlement</b> au canal / point d'eau, <b>calé</b>, pour limiter le risque de chute lors de la manœuvre.</li>
    <li>L'établissement des aspiraux se fait <b>perpendiculairement</b> au point d'eau, pour éviter que les tuyaux ne roulent et ne tombent dans l'eau.</li>
    <li>Chaque établissement ne doit pas dépasser <b>8 mètres de hauteur verticale</b> entre la pompe et le plan d'eau.</li>
    <li>Chaque ligne comprend : <b>aspiraux</b> (DN 100), une <b>crépine</b>, un <b>flotteur</b> et une <b>commande</b> permettant de soulever la crépine en cas d'obstruction.</li>
  </ul>
  <div class="callout danger"><b>La crépine et le filtre sont indispensables</b> à la protection de la pompe. Aspirer sans crépine risque d'obstruer et d'endommager la pompe.</div>

  <h3>4.4 — Mode opératoire de la mise en aspiration</h3>
  <ol class="steps">
    <li>Vérifier que la <b>prise de mouvement est enclenchée</b>.</li>
    <li>Vérifier que la <b>vanne d'aspiration citerne est fermée</b>.</li>
    <li>Vérifier la <b>fermeture</b> des vannes de refoulement, du retour tonne et des purges.</li>
    <li>Vérifier le <b>remplissage du bocal d'amorçage</b> (appuyer sur le « champignon » de la vanne d'amorçage si le régime est au ralenti, sinon remplir avec une bouteille d'eau).</li>
    <li>Ouvrir la <b>vanne d'alimentation extérieure</b>.</li>
    <li>Vérifier que le <b>vérin</b> met l'amorceur en contact avec la roue d'entraînement.</li>
    <li><b>Accélérer</b> jusqu'à la vitesse définie par le constructeur — <b>2000 t/min maximum</b> (régime fonction de la hauteur d'aspiration).</li>
    <li>Respecter le <b>temps d'aspiration</b> : <b>≤ 60 s pour 1 ligne</b>, <b>≤ 90 s pour 2 lignes</b>.</li>
    <li><b>Surveiller et écouter</b> les phénomènes liés à l'opération (vacuomètre, bruit moteur).</li>
  </ol>

  <h3>4.5 — Reconnaître un amorçage réussi</h3>
  <div class="card">
    <ul>
      <li>La (ou les) ligne(s) <b>s'affaisse(nt)</b> sous le poids de l'eau.</li>
      <li>Le <b>mano-vacuomètre</b> indique une <b>valeur négative stable</b>, en relation avec la hauteur entre la pompe et le plan d'eau.</li>
      <li>De l'eau s'échappe par le <b>trop-plein du bocal</b> d'amorçage.</li>
      <li>Le <b>bruit du moteur change</b>.</li>
      <li>Le <b>manomètre de refoulement affiche une valeur positive</b> (l'aiguille se stabilise vers 4 bars).</li>
    </ul>
  </div>
  <div class="callout tip">Une fois amorcé : <b>ouvrir progressivement</b> les vannes de refoulement, gérer la pression, puis faire le <b>complément de la tonne</b> via le retour tonne (attention à la propreté de l'eau).</div>

  <h3>4.6 — La vanne d'amorçage automatique (fonctionnement détaillé)</h3>
  <table class="t">
    <tr><th>Phase</th><th>Comportement</th></tr>
    <tr><td>Au repos</td><td>Le ressort (17) maintient le clapet (11) sur son siège et repousse la membrane (15) vers le haut.</td></tr>
    <tr><td>Amorceur en fonctionnement</td><td>Le vide se crée sous la membrane (15) par le passage (A). De section supérieure au clapet, la membrane ouvre le clapet : le vide s'établit dans toute la tuyauterie d'aspiration → l'amorçage se réalise.</td></tr>
    <tr><td>Amorçage réalisé</td><td>Quand la pression de refoulement atteint <b>3 bars</b>, cette pression de pilotage plaque le clapet (11) sur son siège, repousse la membrane (15) qui perd sa force ; le clapet se referme. La vanne revient en position repos.</td></tr>
    <tr><td>Clapet anti-retour</td><td>Dès l'arrêt de l'amorceur, il se ferme et est maintenu par la pression de la tuyauterie d'aspiration.</td></tr>
  </table>
  <div class="callout danger"><b>Attention :</b> une fuite importante au clapet anti-retour peut rouvrir le clapet de la vanne d'amorçage et provoquer un <b>désamorçage</b> de la pompe (la dépression d'aspiration peut dépasser la force du ressort + le vide de l'amorceur).</div>
  <div class="callout warn"><b>Commande manuelle de secours :</b> en cas de rupture de la membrane, le capuchon (01) reste immobile au lieu de descendre. Il suffit alors d'<b>appuyer sur le capuchon (01)</b> pour ouvrir le clapet (16) ; <b>relâcher dès l'amorçage réalisé</b>.</div>
  <div class="callout info"><b>Source sous pression (poteau / bouche d'incendie) :</b> le clapet (11) se plaque sur son siège et isole l'amorceur de toute mise sous pression inopinée. Après usage, penser à <b>décompresser la chambre basse</b> de la vanne en ouvrant le robinet de vidange correspondant.</div>

  <h3>4.7 — Alimentation sur bouche / poteau d'incendie</h3>
  <p>Quand la source est déjà sous pression, <b>l'amorçage est inutile</b>. Mode opératoire :</p>
  <ol class="steps">
    <li>Établir une ligne d'alimentation (tuyau de toile de 110).</li>
    <li><b>Dégorger</b> la bouche d'incendie.</li>
    <li>Raccorder la ligne : d'un côté sur la bouche, de l'autre sur l'orifice d'alimentation.</li>
    <li>Ouvrir <b>entièrement</b> la bouche d'incendie.</li>
    <li>Mettre la pompe en œuvre et régler le régime pour obtenir la pression voulue au refoulement.</li>
  </ol>
  <div class="callout danger"><b>En aucun cas la pression d'alimentation ne doit dépasser 8 bars.</b></div>
`,
quiz: { title: "QCM — Module 4 : Mise en aspiration", pass: 80, questions: [
  { q: "Quelle est la hauteur verticale d'aspiration maximale&nbsp;?", o: ["4 mètres", "8 mètres", "10 mètres", "15 mètres"], c: [1], e: "8 mètres maximum entre la pompe et le plan d'eau." },
  { q: "Comment établir les aspiraux par rapport au point d'eau&nbsp;?", o: ["Parallèlement", "Perpendiculairement", "En diagonale", "Peu importe"], c: [1], e: "Perpendiculairement, pour éviter que les tuyaux roulent et tombent à l'eau." },
  { q: "Quels éléments composent une ligne d'aspiration&nbsp;? (plusieurs réponses)", o: ["Aspiraux", "Crépine et flotteur", "Commande de relevage de la crépine", "Lance à mousse"], c: [0, 1, 2], e: "Aspiraux + crépine + flotteur + commande de relevage." },
  { q: "Temps d'aspiration à ne pas dépasser pour 2 lignes&nbsp;?", o: ["30 s", "60 s", "90 s", "120 s"], c: [2], e: "≤ 60 s pour 1 ligne, ≤ 90 s pour 2 lignes." },
  { q: "Lesquels sont des signes d'amorçage réussi&nbsp;? (plusieurs réponses)", o: ["Lignes qui s'affaissent", "Vacuomètre négatif stable", "Eau au trop-plein du bocal", "Pression de refoulement nulle"], c: [0, 1, 2], e: "Affaissement, vacuomètre négatif stable, eau au trop-plein, bruit moteur, manomètre positif." },
  { q: "À quelle pression de refoulement la vanne d'amorçage se referme-t-elle&nbsp;?", o: ["1 bar", "3 bars", "8 bars", "12 bars"], c: [1], e: "À 3 bars, la pression de pilotage plaque le clapet et la vanne revient au repos." },
  { q: "Avant la mise en aspiration, dans quel état doivent être vanne citerne, refoulement, retour tonne et purges&nbsp;?", o: ["Toutes ouvertes", "Toutes fermées", "Citerne ouverte, le reste fermé", "Refoulement ouvert"], c: [1], e: "On ferme la vanne citerne, le refoulement, le retour tonne et les purges." },
  { q: "En cas de rupture de la membrane de la vanne d'amorçage, que fait-on&nbsp;?", o: ["On coupe le moteur", "On appuie sur le capuchon (01) pour ouvrir le clapet, puis on relâche dès l'amorçage", "On augmente la pression à 10 bars", "On démonte la pompe"], c: [1], e: "Commande manuelle de secours : appuyer sur le capuchon (01), relâcher dès l'amorçage réalisé." },
  { q: "Sur une alimentation par bouche d'incendie, l'amorçage est…", o: ["obligatoire", "inutile (source déjà sous pression)", "à faire deux fois", "remplacé par le retour tonne"], c: [1], e: "La source étant sous pression, l'amorçage est inutile ; la pression d'alimentation ne doit pas dépasser 8 bars." },
  { q: "Pourquoi la crépine est-elle indispensable&nbsp;?", o: ["Pour augmenter le débit", "Pour protéger la pompe des corps étrangers", "Pour amorcer plus vite", "Pour réduire la hauteur d'aspiration"], c: [1], e: "Crépine et filtre protègent la pompe ; aspirer sans crépine peut l'obstruer et l'endommager." }
]}});

/* ====================================================================== */
/* MODULE 5 — PANNES & ENTRETIEN                                          */
/* ====================================================================== */
COURSE.modules.push({ id: "m5", menu: "5 · Pannes & entretien", num: "5", html: `
  <div class="crumb">Module 5 · Durée estimée 25 min</div>
  <h2 class="title"><span class="ic">🔧</span> Les pannes et l'entretien</h2>
  <p class="lead">Prévenir par l'entretien, puis savoir reconnaître et résoudre les pannes les plus courantes.</p>

  <h3>5.1 — L'entretien, première des préventions</h3>
  <p>L'entretien journalier et les vérifications des niveaux et des organes de sécurité sont essentiels. En plus des consignes définies par le service, le constructeur préconise certaines bonnes pratiques. <b>Cette démarche permet de prévenir, voire d'éviter, de nombreuses pannes.</b></p>

  <h3>5.2 — La visite journalière</h3>
  <p>Souvent définie par des consignes propres à chaque utilisateur, elle consiste notamment à s'assurer :</p>
  <div class="grid2">
    <ul>
      <li>du plein d'<b>huile moteur</b> ;</li>
      <li>du plein du <b>circuit de refroidissement</b> ;</li>
      <li>de l'<b>état de charge des batteries</b> ;</li>
      <li>du bon fonctionnement moteur par une <b>mise en route quotidienne</b>.</li>
    </ul>
    <ul>
      <li>de l'<b>enclenchement sans difficulté</b> de la prise de mouvement ;</li>
      <li>du plein de la <b>citerne à eau</b> ;</li>
      <li>du <b>bon arrimage</b> des accessoires ;</li>
      <li>du <b>plein de la réserve amorceur</b>.</li>
    </ul>
  </div>
  <div class="callout info">Des visites <b>mensuelles</b> (ou plus espacées) sont également nécessaires et peuvent faire l'objet de <b>notes de service internes</b>.</div>

  <h3>5.3 — Bonnes pratiques d'entretien complémentaires</h3>
  <div class="card">
    <ul>
      <li><b>Protection anti-corrosion :</b> les équipements sont protégés par un produit type WAXOYL, à renouveler périodiquement (≈ 1 fois par an en métropole).</li>
      <li><b>Conditionnement hiver :</b> protéger le circuit hydraulique du gel (vidanger les parties exposées, suivre la procédure constructeur).</li>
      <li><b>Vidange / purge :</b> après emploi, vider le circuit selon les consignes ; laisser les vannes de refoulement partiellement ouvertes.</li>
      <li><b>Surveillance en fonctionnement :</b> régime moteur, température d'eau moteur, pression de refoulement, et niveau de carburant.</li>
    </ul>
  </div>

  <h3>5.4 — Tableau des pannes courantes</h3>
  <table class="t">
    <tr><th>Panne</th><th>Cause(s)</th><th>Remède(s)</th></tr>
    <tr><td rowspan="6"><b>Difficulté d'amorçage</b><br><small>(un amorçage normal dure &lt; 1 min)</small></td>
        <td>Hauteur d'aspiration trop grande</td><td>Ne pas dépasser 8 m</td></tr>
    <tr><td>Crépine hors de l'eau</td><td>Replacer correctement la crépine (immersion complète)</td></tr>
    <tr><td>Raccord d'aspiration mal serré</td><td>Resserrer le raccord</td></tr>
    <tr><td>Joint de raccord défectueux</td><td>Changer le joint</td></tr>
    <tr><td>Tuyau d'aspiration coupé ou percé</td><td>Remplacer le tuyau défectueux</td></tr>
    <tr><td>Toile décollée à l'intérieur d'un aspirateur</td><td>Remplacer le tuyau défectueux</td></tr>
    <tr><td><b>La pompe se désamorce</b> à l'ouverture du refoulement</td><td>Ouverture trop rapide de la vanne de refoulement</td><td>Recommencer en ouvrant la vanne plus lentement</td></tr>
    <tr><td rowspan="3"><b>Insuffisance de débit</b></td><td>Obstruction de la crépine</td><td>Démonter et nettoyer</td></tr>
    <tr><td>Décollement d'une toile dans un aspirateur (le vacuomètre « monte » alors de 8 m)</td><td>Remplacer le tuyau défectueux</td></tr>
    <tr><td>Pompe obstruée (fonctionnement sans crépine)</td><td>Déposer la pompe et la nettoyer</td></tr>
  </table>

  <h3>5.5 — Méthode de diagnostic</h3>
  <ol class="steps">
    <li><b>Observer les symptômes</b> : amorçage qui n'aboutit pas, vacuomètre instable, débit faible, désamorçage…</li>
    <li><b>Vérifier l'étanchéité</b> du circuit d'aspiration : raccords, joints, état des tuyaux.</li>
    <li><b>Vérifier la crépine</b> : immersion, propreté, absence d'obstruction.</li>
    <li><b>Contrôler la hauteur d'aspiration</b> (≤ 8 m) et le régime moteur (≤ 2000 t/min).</li>
    <li>Si rien n'y fait : l'anomalie est interne (pompe, amorceur) → faire intervenir la maintenance.</li>
  </ol>
  <div class="callout tip">La <b>rigueur du conducteur</b> dans les vérifications journalières est la première des protections : la plupart des pannes d'amorçage proviennent d'un défaut d'étanchéité ou d'une crépine mal placée — des points entièrement sous son contrôle.</div>
`,
quiz: { title: "QCM — Module 5 : Pannes et entretien", pass: 80, questions: [
  { q: "Un amorçage normal ne doit pas durer plus de…", o: ["30 secondes", "1 minute", "2 minutes", "5 minutes"], c: [1], e: "Au-delà d'une minute, on suspecte une anomalie (étanchéité, hauteur, crépine…)." },
  { q: "La pompe se désamorce quand on ouvre la vanne de refoulement. Remède&nbsp;?", o: ["Accélérer fortement", "Ouvrir la vanne plus lentement", "Fermer la citerne", "Changer la crépine"], c: [1], e: "Une ouverture trop rapide provoque le désamorçage : ouvrir plus lentement." },
  { q: "Quelles vérifications font partie de la visite journalière&nbsp;? (plusieurs réponses)", o: ["Plein d'huile moteur", "Plein de la réserve amorceur", "Enclenchement de la prise de mouvement", "Remplacement systématique de la pompe"], c: [0, 1, 2], e: "Huile, refroidissement, batteries, prise de mouvement, citerne, arrimage, réserve amorceur." },
  { q: "En cas d'insuffisance de débit, quelle cause est plausible&nbsp;?", o: ["Crépine obstruée", "Citerne trop pleine", "Pression d'air à 8 bars", "Frein de parc serré"], c: [0], e: "Crépine obstruée, toile décollée, ou pompe obstruée par un fonctionnement sans crépine." },
  { q: "Une pompe a tourné sans crépine et est obstruée. Remède&nbsp;?", o: ["La rincer à l'eau de la citerne", "La déposer et la nettoyer", "Augmenter le régime moteur", "Changer le joint de raccord"], c: [1], e: "Il faut déposer la pompe et la nettoyer." },
  { q: "À quoi sert l'application périodique de WAXOYL&nbsp;?", o: ["À lubrifier la pompe", "À protéger les équipements contre la corrosion", "À amorcer plus vite", "À nettoyer la citerne"], c: [1], e: "C'est une protection anti-corrosion des équipements, à renouveler périodiquement." },
  { q: "La crépine est hors de l'eau et l'amorçage échoue. Que faire&nbsp;?", o: ["Augmenter à 2500 t/min", "Replacer correctement la crépine (immersion complète)", "Fermer le retour tonne", "Démonter la vanne d'amorçage"], c: [1], e: "Replacer la crépine pour qu'elle soit complètement immergée." }
]}});

/* ---------- QCM FINAL ---------- */
const FINAL = { id: "final", menu: "QCM final", num: "★", title: "QCM final — Vérification des acquis", pass: 80, questions: [
  { q: "Pression d'air requise pour les freins et la prise de mouvement&nbsp;?", o: ["3 b", "6 b", "8 b", "12 b"], c: [2], e: "8 bars." },
  { q: "Formule des pertes de charge&nbsp;?", o: ["J₂ = J₁ × (Q₂/Q₁)²", "Pr = Po + Z", "J₂ = Q₂ × Z", "J₁ = J₂ / Q₁"], c: [0], e: "J₂ = J₁ × (Q₂/Q₁)²." },
  { q: "Dénivelé : combien de bar par 10 m&nbsp;?", o: ["0,5 bar", "1 bar", "2 bars", "10 bars"], c: [1], e: "1 bar pour 10 m (+ en montée, − en descente)." },
  { q: "Formule de la pression de refoulement&nbsp;?", o: ["Pr = Po + Z + ΣJ₂", "Pr = Po − Z", "Pr = Q₂ × J₁", "Pr = Po × Z"], c: [0], e: "Pr = Po + Z + somme des J₂." },
  { q: "À quoi sert le retour tonne pendant le fonctionnement&nbsp;?", o: ["Amorcer", "Éviter l'échauffement en circuit fermé", "Augmenter la pression", "Freiner"], c: [1], e: "Éviter l'échauffement de la pompe en circuit fermé." },
  { q: "Hauteur d'aspiration maximale&nbsp;?", o: ["6 m", "8 m", "10 m", "12 m"], c: [1], e: "8 mètres maximum." },
  { q: "Temps d'aspiration maxi pour 1 ligne&nbsp;?", o: ["30 s", "60 s", "90 s", "120 s"], c: [1], e: "60 s pour 1 ligne (90 s pour 2 lignes)." },
  { q: "Régime moteur maximal à l'amorçage&nbsp;?", o: ["1000 t/min", "1500 t/min", "2000 t/min", "3000 t/min"], c: [2], e: "Maxi 2000 t/min." },
  { q: "Signes d'un amorçage réussi&nbsp;? (plusieurs réponses)", o: ["Lignes qui s'affaissent", "Vacuomètre négatif stable", "Manomètre de refoulement positif", "Pression nulle au refoulement"], c: [0, 1, 2], e: "Affaissement, vacuomètre négatif, eau au trop-plein, bruit moteur, manomètre positif." },
  { q: "Avant de fermer le refoulement, le régime doit être&nbsp;:", o: ["Au maximum", "Baissé à 3-4 bars", "Coupé", "Indifférent"], c: [1], e: "Baisser à 3-4 bars avant fermeture." },
  { q: "Amorçage > 1 minute : quelles causes suspecter&nbsp;? (plusieurs réponses)", o: ["Hauteur d'aspiration trop grande", "Raccord mal serré / joint défectueux", "Crépine hors de l'eau", "Citerne trop pleine"], c: [0, 1, 2], e: "Étanchéité, hauteur, crépine, tuyau percé : autant de causes de difficulté d'amorçage." },
  { q: "Qui est garant de l'alimentation des lances et de la pression&nbsp;?", o: ["Le chef d'agrès", "Le conducteur", "Le constructeur", "Le mécanicien"], c: [1], e: "Le conducteur." },
  { q: "Sens de fermeture de la vanne à clapet&nbsp;?", o: ["Horaire", "Anti-horaire", "Aucun sens", "Vers le bas"], c: [0], e: "Fermeture horaire, ouverture anti-horaire." },
  { q: "Sur bouche d'incendie, la pression d'alimentation ne doit jamais dépasser&nbsp;:", o: ["3 bars", "5 bars", "8 bars", "12 bars"], c: [2], e: "Jamais plus de 8 bars en alimentation sous pression." },
  { q: "Pourquoi ne jamais faire tourner la pompe à sec&nbsp;?", o: ["Pour économiser l'eau", "Le liquide assure lubrification et refroidissement", "Pour ménager les pneus", "Pour garder la pression d'air"], c: [1], e: "Sans eau, la pompe n'est ni lubrifiée ni refroidie." }
]};
