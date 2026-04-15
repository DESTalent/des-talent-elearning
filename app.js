/* ================================================
   DES TALENT – E-Learning Huisstijl
   Module E-03: Schakelingen Woningbouw & Utiliteit
   Kleuren: #1A1A1A (zwart), #666666 (grijs), #FFFFFF (wit)
   Typografie digitaal: Impact (titels), Arial (body)
   ================================================ */

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

body {
  font-family: Arial, sans-serif;
  background: #f4f4f4;
  color: #1A1A1A;
  line-height: 1.6;
}

/* ================================================
   LAYOUT
   ================================================ */

.elearn {
  max-width: 900px;
  margin: 32px auto;
  background: #fff;
  box-shadow: 0 2px 20px rgba(0,0,0,0.10);
}

/* ================================================
   HEADER
   ================================================ */

.header {
  background: #1A1A1A;
  color: #fff;
  position: relative;
  overflow: hidden;
}

.header-inner {
  padding: 24px 32px 20px;
  position: relative;
  z-index: 2;
}

.slash-deco {
  position: absolute;
  top: 0; right: 0;
  width: 200px; height: 100%;
  overflow: hidden;
  z-index: 1;
  opacity: 0.8;
}

.slash-deco svg {
  position: absolute;
  top: 0; right: 0;
  height: 100%;
}

/* Logo */
.logo-bar {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
}

.logo-d {
  width: 36px; height: 36px;
  background: #666;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Impact, sans-serif;
  font-size: 22px;
  color: #fff;
  clip-path: polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%);
}

.logo-text {
  font-family: Impact, sans-serif;
  font-size: 16px;
  letter-spacing: 2px;
  color: #fff;
  text-transform: uppercase;
}

.logo-tag {
  display: block;
  font-size: 10px;
  color: #999;
  letter-spacing: 1.5px;
  text-transform: uppercase;
}

.module-title {
  font-family: Impact, sans-serif;
  font-size: 28px;
  letter-spacing: 1px;
  color: #fff;
  text-transform: uppercase;
  line-height: 1.15;
}

/* Meta balk onder header */
.meta-bar {
  background: #2a2a2a;
  padding: 8px 32px;
  display: flex;
  gap: 28px;
  font-size: 12px;
  color: #888;
  letter-spacing: 0.5px;
  flex-wrap: wrap;
}

.meta-bar span {
  color: #fff;
  font-weight: bold;
}

/* ================================================
   ENTITEITSKLEURENBALK
   ================================================ */

.entity-bar {
  height: 6px;
  display: flex;
}

.entity-bar div { flex: 1; }

/* ================================================
   VOORTGANGSBALK
   ================================================ */

.progress-wrap {
  background: #e8e8e8;
  height: 4px;
}

.progress-fill {
  background: #1A1A1A;
  height: 4px;
  transition: width 0.4s ease;
}

/* ================================================
   NAVIGATIE TABS
   ================================================ */

.nav-tabs {
  display: flex;
  border-bottom: 2px solid #1A1A1A;
  background: #fff;
  overflow-x: auto;
}

.nav-tab {
  padding: 13px 22px;
  font-family: Impact, sans-serif;
  font-size: 13px;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
  border: none;
  background: transparent;
  color: #666;
  white-space: nowrap;
  border-bottom: 3px solid transparent;
  margin-bottom: -2px;
  transition: color 0.2s, background 0.2s;
}

.nav-tab.active {
  color: #1A1A1A;
  border-bottom: 3px solid #1A1A1A;
}

.nav-tab:hover:not(.active) {
  color: #333;
  background: #f5f5f5;
}

/* ================================================
   CONTENT AREA
   ================================================ */

.content {
  background: #fff;
  padding: 32px;
  min-height: 500px;
}

.tab-content { display: none; }
.tab-content.active { display: block; }

/* ================================================
   TYPOGRAFIE & BADGES
   ================================================ */

.section-badge {
  display: inline-block;
  clip-path: polygon(10% 0%, 90% 0%, 100% 50%, 90% 100%, 10% 100%, 0% 50%);
  background: #1A1A1A;
  color: #fff;
  padding: 5px 22px 5px 18px;
  font-family: Impact, sans-serif;
  font-size: 12px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  margin-bottom: 16px;
}

.section-title {
  font-family: Impact, sans-serif;
  font-size: 24px;
  color: #1A1A1A;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 6px;
}

.section-sub {
  font-size: 14px;
  color: #666;
  margin-bottom: 22px;
}

/* ================================================
   INFO & WAARSCHUWINGSBLOKKEN
   ================================================ */

.info-block {
  border-left: 3px solid #1A1A1A;
  background: #f5f5f5;
  padding: 14px 18px;
  margin: 18px 0;
  border-radius: 0;
}

.info-block p {
  font-size: 14px;
  color: #333;
  line-height: 1.65;
}

.warn-block {
  border-left: 3px solid #D97706;
  background: #FEF3C7;
  padding: 14px 18px;
  margin: 18px 0;
}

.warn-block p {
  font-size: 14px;
  color: #92400E;
  line-height: 1.65;
}

/* ================================================
   DRAADKLEUREN
   ================================================ */

.draad-row {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin: 16px 0;
}

.draad-chip {
  display: flex;
  align-items: center;
  gap: 10px;
  background: #f5f5f5;
  border: 1px solid #ddd;
  padding: 9px 16px;
  border-radius: 4px;
  font-size: 13px;
}

.draad-dot {
  width: 20px; height: 20px;
  border-radius: 50%;
  flex-shrink: 0;
  border: 1px solid #ccc;
}

/* ================================================
   SCHEMA BOX
   ================================================ */

.schema-box {
  background: #fafafa;
  border: 1px solid #ddd;
  border-radius: 6px;
  padding: 20px;
  margin: 18px 0;
  text-align: center;
}

.schema-title {
  font-family: Impact, sans-serif;
  font-size: 12px;
  color: #666;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 14px;
}

.circuit-svg {
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  display: block;
}

/* ================================================
   STAPPENKAARTEN
   ================================================ */

.steps-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
  margin: 18px 0;
}

.step-card {
  display: flex;
  gap: 14px;
  align-items: flex-start;
  background: #fafafa;
  border: 1px solid #e0e0e0;
  padding: 14px 16px;
}

.step-num {
  clip-path: polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%);
  background: #1A1A1A;
  color: #fff;
  width: 34px; height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Impact, sans-serif;
  font-size: 15px;
  flex-shrink: 0;
}

.step-content { flex: 1; }

.step-title {
  font-family: Impact, sans-serif;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: #1A1A1A;
  margin-bottom: 4px;
}

.step-text {
  font-size: 13px;
  color: #444;
  line-height: 1.65;
}

.step-text ul {
  padding-left: 16px;
  margin-top: 4px;
}

.step-text li { margin-bottom: 3px; }

/* ================================================
   TWEE KOLOMMEN
   ================================================ */

.two-col {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin: 16px 0;
}

@media (max-width: 600px) {
  .two-col { grid-template-columns: 1fr; }
}

.col-card {
  background: #fafafa;
  border: 1px solid #e0e0e0;
  padding: 16px;
}

.col-card-title {
  font-family: Impact, sans-serif;
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #1A1A1A;
  margin-bottom: 10px;
}

.col-card ul { padding-left: 18px; }
.col-card li {
  font-size: 13px;
  color: #444;
  line-height: 1.8;
}

/* ================================================
   SCHAKELING NAVIGATIE (subpanelen in theorie)
   ================================================ */

.schakeling-nav {
  display: flex;
  gap: 8px;
  margin-bottom: 22px;
  flex-wrap: wrap;
}

.sch-btn {
  padding: 8px 18px;
  font-family: Impact, sans-serif;
  font-size: 12px;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
  border: 1.5px solid #ccc;
  background: transparent;
  color: #666;
  transition: all 0.15s;
}

.sch-btn.active {
  background: #1A1A1A;
  color: #fff;
  border-color: #1A1A1A;
}

.sch-btn:hover:not(.active) {
  border-color: #1A1A1A;
  color: #1A1A1A;
}

.sch-panel { display: none; }
.sch-panel.active { display: block; }

/* ================================================
   KENNISTOETS
   ================================================ */

.quiz-wrap { margin: 20px 0; }

.quiz-q {
  font-size: 15px;
  color: #1A1A1A;
  margin-bottom: 14px;
  line-height: 1.6;
}

.quiz-q strong {
  display: block;
  font-family: Impact, sans-serif;
  font-size: 12px;
  color: #666;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-weight: normal;
  margin-bottom: 6px;
}

.quiz-counter {
  font-family: Impact, sans-serif;
  font-size: 12px;
  color: #999;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 18px;
}

.quiz-opts {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 14px;
}

.quiz-opt {
  padding: 11px 16px;
  border: 1.5px solid #ccc;
  cursor: pointer;
  font-size: 14px;
  color: #333;
  background: #fff;
  text-align: left;
  transition: all 0.15s;
  border-radius: 3px;
  font-family: Arial, sans-serif;
}

.quiz-opt:hover:not(:disabled) {
  border-color: #1A1A1A;
  background: #f5f5f5;
}

.quiz-opt:disabled { cursor: default; }

.quiz-opt.correct { background: #d1fae5; border-color: #059669; color: #065f46; }
.quiz-opt.wrong   { background: #fee2e2; border-color: #dc2626; color: #7f1d1d; }

.quiz-feedback {
  font-size: 13px;
  padding: 12px 16px;
  border-radius: 3px;
  display: none;
  margin-bottom: 12px;
  line-height: 1.6;
}

.quiz-feedback.show { display: block; }
.quiz-feedback.ok  { background: #d1fae5; color: #065f46; border-left: 3px solid #059669; }
.quiz-feedback.nok { background: #fee2e2; color: #7f1d1d; border-left: 3px solid #dc2626; }

.quiz-next-btn {
  background: #1A1A1A;
  color: #fff;
  border: none;
  padding: 11px 22px;
  font-family: Impact, sans-serif;
  font-size: 13px;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
  display: none;
}

.quiz-next-btn.show { display: inline-block; }
.quiz-next-btn:hover { background: #333; }

/* Resultaat */
.score-bar {
  background: #1A1A1A;
  color: #fff;
  padding: 18px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 20px;
}

.score-label {
  font-family: Impact, sans-serif;
  font-size: 12px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: #999;
}

.score-val {
  font-family: Impact, sans-serif;
  font-size: 32px;
  color: #fff;
}

.score-msg {
  font-family: Impact, sans-serif;
  font-size: 13px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #ccc;
}

/* ================================================
   PRAKTIJKOPDRACHTEN
   ================================================ */

.praktijk-card {
  background: #1A1A1A;
  color: #fff;
  padding: 20px 24px;
  margin-bottom: 16px;
}

.praktijk-card h3 {
  font-family: Impact, sans-serif;
  font-size: 18px;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 8px;
}

.praktijk-card p {
  font-size: 13px;
  color: #ccc;
  line-height: 1.65;
}

/* Checklist */
.checklist-item {
  display: flex;
  gap: 12px;
  align-items: flex-start;
  padding: 11px 0;
  border-bottom: 1px solid #f0f0f0;
  cursor: pointer;
  transition: background 0.1s;
}

.checklist-item:hover { background: #fafafa; }

.check-box {
  width: 20px; height: 20px;
  border: 2px solid #666;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.15s;
  margin-top: 2px;
}

.check-box.done {
  background: #1A1A1A;
  border-color: #1A1A1A;
}

.check-box.done::after {
  content: '';
  width: 10px; height: 6px;
  border-left: 2px solid #fff;
  border-bottom: 2px solid #fff;
  transform: rotate(-45deg);
  display: block;
  margin-top: -2px;
}

.check-label {
  font-size: 14px;
  color: #333;
  line-height: 1.5;
}

.check-label.done {
  color: #999;
  text-decoration: line-through;
}

/* ================================================
   AFSLUITING
   ================================================ */

.reflectie {
  background: #f5f5f5;
  padding: 20px 24px;
  margin: 20px 0;
}

.reflectie-title {
  font-family: Impact, sans-serif;
  font-size: 14px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #1A1A1A;
  margin-bottom: 12px;
}

.reflectie ol {
  padding-left: 20px;
}

.reflectie li {
  font-size: 14px;
  color: #444;
  line-height: 2;
}

.diploma-bar {
  background: #1A1A1A;
  color: #fff;
  padding: 20px 24px;
  margin-top: 20px;
}

.diploma-label {
  font-family: Impact, sans-serif;
  font-size: 12px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #666;
  margin-bottom: 4px;
}

.diploma-title {
  font-family: Impact, sans-serif;
  font-size: 20px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.diploma-sub {
  font-size: 12px;
  color: #666;
  margin-top: 6px;
}

/* ================================================
   KNOPPEN
   ================================================ */

.btn-primary {
  background: #1A1A1A;
  color: #fff;
  border: none;
  padding: 12px 24px;
  font-family: Impact, sans-serif;
  font-size: 13px;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
  margin-top: 16px;
  transition: background 0.2s;
}

.btn-primary:hover { background: #333; }

.btn-outline {
  background: transparent;
  color: #1A1A1A;
  border: 1.5px solid #1A1A1A;
  padding: 11px 22px;
  font-family: Impact, sans-serif;
  font-size: 13px;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
  margin-top: 16px;
  transition: background 0.2s;
}

.btn-outline:hover { background: #f5f5f5; }

/* ================================================
   DIVIDER
   ================================================ */

hr.des {
  border: none;
  border-top: 1px solid #e0e0e0;
  margin: 22px 0;
}

/* ================================================
   RESPONSIVE
   ================================================ */

@media (max-width: 640px) {
  .content { padding: 20px 16px; }
  .header-inner { padding: 18px 16px 14px; }
  .meta-bar { padding: 7px 16px; gap: 14px; }
  .module-title { font-size: 22px; }
  .nav-tab { padding: 10px 14px; font-size: 11px; }
  .elearn { margin: 0; }
}
