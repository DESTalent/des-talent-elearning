/* ================================================
   DES TALENT – E-03 Schakelingen
   app.js – navigatie, toets, checklists
   ================================================ */

// ── Tabbladnavigatie ──────────────────────────────

const TAB_VOLGORDE = ['intro', 'theorie', 'utiliteit', 'toets', 'praktijk', 'afsluiting'];
const VOORTGANG    = { intro: 16, theorie: 32, utiliteit: 50, toets: 66, praktijk: 83, afsluiting: 100 };

function showTab(id) {
  document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));

  document.getElementById('tab-' + id).classList.add('active');

  const tabKnoppen = document.querySelectorAll('.nav-tab');
  TAB_VOLGORDE.forEach((naam, i) => {
    if (naam === id) tabKnoppen[i].classList.add('active');
  });

  document.getElementById('progBar').style.width = VOORTGANG[id] + '%';

  if (id === 'toets') initQuiz();

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ── Subpanelen theorie ────────────────────────────

const SCH_MAP = { enkelvoud: 0, wissel: 1, kruis: 2, draadkleuren: 3 };

function showSch(id) {
  document.querySelectorAll('.sch-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.sch-btn').forEach(b => b.classList.remove('active'));

  document.getElementById('sch-' + id).classList.add('active');

  const schKnoppen = document.querySelectorAll('.sch-btn');
  if (SCH_MAP[id] !== undefined) schKnoppen[SCH_MAP[id]].classList.add('active');
}

// ── Interactieve checklist ────────────────────────

function toggleCheck(el) {
  const box   = el.querySelector('.check-box');
  const label = el.querySelector('.check-label');
  box.classList.toggle('done');
  label.classList.toggle('done');
}

// ── Kennistoets ───────────────────────────────────

const VRAGEN = [
  {
    v: 'Bij de enkelpolige schakeling: waarom mag je NOOIT de schakelaar in de nuldraad plaatsen?',
    opts: [
      'De schakelaar is dan te duur',
      'Bij een uitgeschakelde lamp staat er dan nog spanning op de lampaansluitingen',
      'De lamp brandt dan niet',
      'De zekering valt dan uit'
    ],
    correct: 1,
    ok:  'Juist! Bij een schakelaar in de nul staat er bij een uitgeschakelde lamp nog steeds spanning op de lampvoeten. Levensgevaarlijk bij het wisselen van een lamp.',
    nok: 'Niet helemaal. Als je in de nul schakelt, staat er bij een uitgeschakelde lamp nog spanning op de lampvoeten — levensgevaarlijk bij lampen wisselen.'
  },
  {
    v: 'Welke draad wordt bij de wisselschakeling verplicht gemarkeerd met tape of een oogje?',
    opts: [
      'De fasedraad (bruin)',
      'De nuldraad (blauw)',
      'De lampdraad (zwart van wissel 2 naar lamp)',
      'De aardedraad (geel/groen)'
    ],
    correct: 2,
    ok:  'Top! De lampdraad moet altijd gemarkeerd worden. Zonder markering ben je straks een uur bezig met puzzelen als de schakeling niet werkt.',
    nok: 'Niet correct. De zwarte lampdraad (die van wissel 2 naar de lamp loopt) moet gemarkeerd worden — essentieel voor later onderhoud.'
  },
  {
    v: 'Bij de kruisschakeling: hoe sluit je de kruisschakelaar correct aan?',
    opts: [
      'Alle vier de draden door elkaar op de contacten',
      'Set 1 (van wissel 1) op bovenkant, set 2 (naar wissel 2) op onderkant — nooit mengen!',
      'Bruin en blauw op de kruisschakelaar',
      'De kruisschakelaar hoeft niet apart aangesloten te worden'
    ],
    correct: 1,
    ok:  'Goed gedaan! De twee paren draden moeten altijd gescheiden blijven. Set 1 boven, set 2 onder. Nooit mengen!',
    nok: 'Niet correct. Set 1 (van wissel 1) gaat op de bovenkant, set 2 (naar wissel 2) op de onderkant. Nooit een draad van set 1 en set 2 op dezelfde kant.'
  },
  {
    v: 'Wat is in de utiliteit verplicht aanwezig bij vluchtwegen en trappenhuizen?',
    opts: [
      'Extra wandcontactdozen',
      'Noodverlichting (gevluchtverlichting)',
      'Kruisschakelaars',
      'Een extra groepenkast'
    ],
    correct: 1,
    ok:  'Correct! Noodverlichting is wettelijk verplicht bij vluchtwegen (NEN 1010 + NEN-EN 1838). Bij stroomuitval gaat de noodverlichting automatisch aan via de ingebouwde accu.',
    nok: 'Niet helemaal. In de utiliteit is noodverlichting (gevluchtverlichting) verplicht bij vluchtwegen en trappenhuizen — dit staat in NEN 1010 en NEN-EN 1838.'
  },
  {
    v: 'In de utiliteit werk je met driefase 400V. Welke kleur heeft fase 3 (L3)?',
    opts: ['Bruin', 'Zwart', 'Grijs', 'Rood'],
    correct: 2,
    ok:  'Helemaal goed! L1=bruin, L2=zwart, L3=grijs. Dit zijn de officiële draadkleuren voor driefase installaties volgens de NEN-norm.',
    nok: 'Niet correct. In driefase installaties geldt: L1=bruin, L2=zwart, L3=grijs. Grijs is dus de kleur van fase 3.'
  }
];

let antwoorden = [];
let vraagIndex = 0;

function initQuiz() {
  vraagIndex = 0;
  antwoorden = [];
  document.getElementById('quizResult').style.display = 'none';
  renderVraag();
}

function renderVraag() {
  const container = document.getElementById('quizContainer');

  if (vraagIndex >= VRAGEN.length) {
    toonResultaat();
    return;
  }

  const q = VRAGEN[vraagIndex];

  container.innerHTML = `
    <div class="quiz-counter">Vraag ${vraagIndex + 1} van ${VRAGEN.length}</div>
    <div class="quiz-wrap">
      <div class="quiz-q">
        <strong>Vraag ${vraagIndex + 1}</strong>
        ${q.v}
      </div>
      <div class="quiz-opts" id="quizOpts">
        ${q.opts.map((opt, i) => `
          <button class="quiz-opt" onclick="beantwoord(${i})">${opt}</button>
        `).join('')}
      </div>
      <div class="quiz-feedback" id="quizFeedback"></div>
      <button class="quiz-next-btn" id="quizNextBtn" onclick="volgendeVraag()">
        ${vraagIndex < VRAGEN.length - 1 ? 'Volgende vraag →' : 'Bekijk resultaat →'}
      </button>
    </div>
  `;
}

function beantwoord(keuze) {
  const q    = VRAGEN[vraagIndex];
  const opts = document.querySelectorAll('.quiz-opt');
  const fb   = document.getElementById('quizFeedback');
  const nxt  = document.getElementById('quizNextBtn');

  opts.forEach(o => { o.disabled = true; });

  if (keuze === q.correct) {
    opts[keuze].classList.add('correct');
    fb.textContent = q.ok;
    fb.className   = 'quiz-feedback show ok';
    antwoorden.push(1);
  } else {
    opts[keuze].classList.add('wrong');
    opts[q.correct].classList.add('correct');
    fb.textContent = q.nok;
    fb.className   = 'quiz-feedback show nok';
    antwoorden.push(0);
  }

  nxt.classList.add('show');
}

function volgendeVraag() {
  vraagIndex++;
  renderVraag();
}

function toonResultaat() {
  document.getElementById('quizContainer').innerHTML = '';

  const score  = antwoorden.reduce((a, b) => a + b, 0);
  const totaal = VRAGEN.length;
  let bericht;

  if (score === totaal)    bericht = 'Perfect — echte #rastechneut!';
  else if (score >= 4)     bericht = 'Uitstekend — bijna perfect!';
  else if (score >= 3)     bericht = 'Goed gedaan — nog even oefenen';
  else                     bericht = 'Herhaal de theorie en probeer opnieuw';

  document.getElementById('scoreVal').textContent = score + '/' + totaal;
  document.getElementById('scoreMsg').textContent = bericht;
  document.getElementById('quizResult').style.display = 'block';
}

function resetQuiz() {
  initQuiz();
}
