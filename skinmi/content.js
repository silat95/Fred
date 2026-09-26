/* ═══════════════════════════════════════════════════════════
   TEMPLATE « SITE IMMERSIF » — content.js
   ► L'UNIQUE FICHIER À RÉÉCRIRE pour produire un nouveau site.
   Renommer en content.js dans le projet cible. La partie
   « injection » en bas de fichier est le moteur de remplissage :
   la copier TELLE QUELLE, ne réécrire que window.SITE_CONTENT.

   Schéma narratif (rôle de conversion de chaque bloc) :
   1. ACCROCHE       — hook : promesse + identité en 3 secondes
   2. POSITIONNEMENT — positioning : ce que je fais, pour qui, où
   3. DÉMARCHE       — manifesto : pourquoi moi (différenciation)
   4. PREUVE         — proof : réalisations (masonry) OU features (bento)
   5. DEVISE         — motto : 3 mots-clés géants + légendes
   6-7. PROCESSUS    — universes : « X en 3 étapes » + visuels posés
   8. PREUVE SOCIALE — testimonial : un client parle
   9. OBJECTIONS     — objections : « Pas de… Juste… »
   10. CONVERSION    — contact : e-mail + réassurance
   ═══════════════════════════════════════════════════════════ */

window.SITE_CONTENT = {

  brand: {
    name: 'skinmi',
    title: 'skinmi — Atelier K-Beauty : diagnostic, soin & brunch',
    description: 'skinmi, l’atelier K-Beauty intimiste : diagnostic de peau, soin du visage, routine personnalisée et brunch partagé. 10 places, 79 €.',
    kicker: 'SKINMI 스킨미 — ATELIER K-BEAUTY',
    copyright: '© 2026 — SKINMI, FRANCE',
    signature: 'VOTRE PEAU, RÉVÉLÉE. — 스킨미',
    socials: [
      { label: 'INSTAGRAM ↗', url: 'https://www.instagram.com/skinmi' },
      { label: 'TIKTOK ↗', url: 'https://www.tiktok.com/@skinmi' }
    ]
  },

  nav: { proof: 'ATELIER', universes: 'DÉROULÉ', cta: 'RÉSERVER' },

  hook: {
    line1: 'Une demi-journée pour vous,',
    line2a: 'votre peau,',
    line2b: 'révélée.',
    image: 'images/hero.jpg',
    imageAlt: 'Atelier skinmi : soin du visage K-Beauty dans une lumière douce',
    floaters: [
      'images/fl-01.jpg',
      'images/fl-02.jpg',
      'images/fl-03.jpg',
      'images/fl-04.jpg',
      'images/fl-05.jpg',
      'images/fl-06.jpg',
      'images/fl-07.jpg',
      'images/fl-08.jpg',
      'images/fl-09.jpg',
      'images/fl-10.jpg'
    ]
  },

  positioning: 'Atelier K-Beauty · 10 places · 79 €',

  manifesto: {
    text: 'Pas un soin de plus, vite fait, en cabine. Un vrai diagnostic de peau, et vous repartez avec [[votre routine]] — après un brunch partagé entre participantes.'
  },

  proof: {
    layout: 'masonry',
    kicker: 'L’ATELIER EN IMAGES',
    title: 'Six heures, huit moments',
    sub: 'Du brunch d’accueil aux échantillons qu’on emporte.',
    meta: 'UNE SESSION — 13 H → 19 H',
    projects: [
      { img: 'images/proj-01.jpg', title: 'Le brunch d’accueil', meta: 'ACCUEIL — 13 H 00' },
      { img: 'images/proj-02.jpg', title: 'Le diagnostic de peau', meta: 'ANALYSE — 13 H 45' },
      { img: 'images/proj-03.jpg', title: 'La double purification', meta: 'RITUEL K-BEAUTY — ÉTAPE 1' },
      { img: 'images/proj-04.jpg', title: 'Le soin du visage', meta: 'INDIVIDUEL — 30 MIN' },
      { img: 'images/proj-05.jpg', title: 'Les sérums ciblés', meta: 'ACTIFS — SELON VOTRE PEAU' },
      { img: 'images/proj-06.jpg', title: 'La pause thé', meta: 'ÉCHANGES — 17 H 15' },
      { img: 'images/proj-07.jpg', title: 'La sélection produits', meta: 'K-BEAUTY — 18 H 00' },
      { img: 'images/proj-08.jpg', title: 'Les cadeaux à emporter', meta: 'ÉCHANTILLONS — 18 H 30' }
    ],
    features: []
  },

  motto: {
    kicker: 'LA MÉTHODE SKINMI EN 3 MOTS',
    words: [
      { word: 'Décoder', hint: 'Votre peau a son langage. On le traduit.' },
      { word: 'Sublimer', hint: 'Trente minutes de soin. Rien que pour vous.' },
      { word: 'Révéler', hint: 'Pas l’effet d’un jour. Une peau qui change.' }
    ]
  },

  universes: {
    introA: 'Une',
    introB: 'journée,',
    introC: '3 temps.',
    cta: 'Réserver ma place →',
    image: 'images/process.jpg',
    items: [
      { name: 'Diagnostiquer', meta: 'TEMPS — 01', desc: 'Accueil et brunch, puis un diagnostic de votre peau : type, besoins, sensibilités.' },
      { name: 'Soigner', meta: 'TEMPS — 02', desc: 'Un soin du visage individuel de 30 minutes, pendant que le groupe partage un thé.' },
      { name: 'Révéler', meta: 'TEMPS — 03', desc: 'Votre routine personnalisée, les produits adaptés à votre profil, et des échantillons pour commencer dès le soir.' }
    ]
  },

  testimonial: {
    kicker: 'SESSION DE LANCEMENT — PEAU DÉSHYDRATÉE',
    figure: '−4',
    unit: 'pdts',
    quote: 'Je pensais avoir la peau sèche, elle était surtout déshydratée. J’ai simplifié ma routine et ma peau n’a jamais été aussi calme.',
    author: 'CAMILLE R. — PARTICIPANTE'
  },

  objections: {
    items: ['Pas de soin à la chaîne.', 'Pas de vente forcée.', 'Pas de jargon.'],
    finale: 'Juste votre peau,',
    pill: 'révélée.'
  },

  contact: {
    kicker: 'ENVIE DE RÉSERVER VOTRE PLACE ?',
    email: 'contact@skinmi.fr',
    reassurance: '10 PLACES PAR SESSION — 79 € TOUT COMPRIS — RÉPONSE SOUS 24 H'
  },

  trail: [
    'images/trail-01.jpg', 'images/trail-02.jpg', 'images/trail-03.jpg', 'images/trail-04.jpg',
    'images/trail-05.jpg', 'images/trail-06.jpg', 'images/trail-07.jpg', 'images/trail-08.jpg',
    'images/trail-09.jpg', 'images/trail-10.jpg', 'images/trail-11.jpg', 'images/trail-12.jpg',
    'images/trail-13.jpg', 'images/trail-14.jpg', 'images/trail-15.jpg', 'images/trail-16.jpg',
    'images/trail-17.jpg', 'images/trail-18.jpg', 'images/trail-19.jpg', 'images/trail-20.jpg'
  ]
};

/* ═══════════════════════════════════════════════════════════
   INJECTION — NE PAS MODIFIER (remplit le DOM avant app.js)
   ═══════════════════════════════════════════════════════════ */
(() => {
  const C = window.SITE_CONTENT;
  const $ = (s) => document.querySelector(s);
  const $$ = (s) => [...document.querySelectorAll(s)];
  const set = (sel, txt) => { const el = $(sel); if (el) el.textContent = txt; };

  document.title = C.brand.title;
  const md = document.querySelector('meta[name="description"]');
  if (md) md.setAttribute('content', C.brand.description);

  // chrome
  set('.loader-wordmark', C.brand.name);
  set('.dock-wordmark', C.brand.name);
  set('.dock-link[href="#travaux"]', C.nav.proof);
  set('.dock-link[href="#explorer"]', C.nav.universes);
  set('.dock-cta', C.nav.cta);

  // 1 · accroche
  set('#heroKicker', C.brand.kicker);
  set('#heroLine1', C.hook.line1);
  const hls = $$('#heroLine2 .hl');
  if (hls.length === 2) { hls[0].textContent = C.hook.line2a; hls[1].textContent = C.hook.line2b; }
  const g1 = $('#grow1 img');
  if (g1) { g1.src = C.hook.image; g1.alt = C.hook.imageAlt; }
  $$('.floaters .fl img').forEach((img, i) => { if (C.hook.floaters[i]) img.src = C.hook.floaters[i]; });

  // 2 · positionnement (un span par mot)
  const intro = $('#spotIntro');
  if (intro) intro.innerHTML = C.positioning.split(' ').map((w) => `<span>${w}</span>`).join(' ');

  // 3 · démarche
  const fill = $('#fillText');
  if (fill) {
    fill.innerHTML = C.manifesto.text.replace(
      /\[\[(.+?)\]\]/,
      '<span class="boxed" id="boxedPhrase">$1<svg class="box-svg" viewBox="0 0 100 100" preserveAspectRatio="none"><path id="boxPath" d="M50,6 C88,4 98,22 97,50 C96,82 76,96 49,95 C16,94 3,76 4,48 C5,18 20,7 50,6 Z"/></svg></span>'
    );
  }

  // 4 · preuve : masonry (8 photos) ou bento (4 features big/tall/tall/big)
  const head = $$('.coll-head > *');
  if (head.length === 4) {
    head[0].textContent = C.proof.kicker;
    head[1].textContent = C.proof.title;
    head[2].textContent = C.proof.sub;
    head[3].textContent = C.proof.meta;
  }
  const grid = $('#collGrid');
  if (grid && C.proof.layout === 'bento') {
    grid.className = 'bento-grid';
    grid.innerHTML = C.proof.features.map((f) =>
      `<figure class="card${f.size ? ' b-' + f.size : ''}"><div class="card-img"><img src="${f.illu}" alt="${f.title}"></div><figcaption>${f.title}<span class="mono">${f.meta}</span></figcaption></figure>`
    ).join('');
  } else if (grid) {
    grid.className = 'coll-grid';
    const SPEEDS = [-0.05, 0.06, -0.028, 0.085];
    grid.innerHTML = SPEEDS.map((s, ci) =>
      `<div class="col" data-pspeed="${s}">` +
      C.proof.projects.slice(ci * 2, ci * 2 + 2).map((p) =>
        `<figure class="card"><div class="card-img"><img src="${p.img}" alt="${p.title} — ${p.meta}"></div><figcaption>${p.title}<span class="mono">${p.meta}</span></figcaption></figure>`
      ).join('') + '</div>'
    ).join('');
  }

  // 5 · devise (train de mots-clés)
  set('#mottoKicker', C.motto.kicker);
  const mtrack = $('#mottoTrack');
  if (mtrack) mtrack.innerHTML = C.motto.words.map((w) => `<span class="mw">${w.word}</span>`).join('');

  // 6-7 · processus immersif (visuels posés un à un)
  set('#nw1', C.universes.introA);
  set('#nw2', C.universes.introB);
  set('#nw3', C.universes.introC);
  const g2 = $('#grow2 img');
  if (g2) g2.src = C.universes.image || (C.universes.items[0] || {}).img || g2.src;
  const psteps = $('#psteps');
  if (psteps) {
    psteps.innerHTML = C.universes.items.map((u) =>
      `<div class="pstep"><span class="pstep-meta mono ash">${u.meta}</span><h3>${u.name}</h3><p>${u.desc || ''}</p></div>`
    ).join('');
  }
  const sCta = $('#stepsCtaLink');
  if (sCta) sCta.childNodes[0].textContent = C.universes.cta;

  // 8 · preuve sociale — le chiffre qui frappe
  set('#figKicker', C.testimonial.kicker || '');
  const figM = String(C.testimonial.figure || '').trim().match(/^([^\d.,+-]*[+\u2212-]?)\s*(-?[\d.,]+)/);
  set('#figPre', figM ? figM[1] : '');
  set('#figVal', figM ? figM[2] : '');
  set('#figUnit', C.testimonial.unit || '');
  set('#quoteText', C.testimonial.quote);
  set('#quoteAuthor', C.testimonial.author);

  // 9 · objections
  C.objections.items.forEach((t, i) => set('#fs' + (i + 1), t));
  const fs4 = $('#fs4');
  if (fs4) {
    fs4.innerHTML = `${C.objections.finale} <span class="pill" id="pillPhrase">${C.objections.pill}<svg class="pill-svg" viewBox="0 0 100 100" preserveAspectRatio="none"><path id="pillPath" d="M50,6 C88,4 98,22 97,50 C96,82 76,96 49,95 C16,94 3,76 4,48 C5,18 20,7 50,6 Z"/></svg></span>`;
  }
  $$('#trail img').forEach((img, i) => { img.src = C.trail[i % C.trail.length]; });

  // 10 · conversion
  set('.footer-kicker', C.contact.kicker);
  const mail = $('.footer-mail');
  if (mail) { mail.href = 'mailto:' + C.contact.email; mail.querySelector('.footer-mail-text').textContent = C.contact.email; }
  set('.footer-reassurance', C.contact.reassurance);
  const fname = $('#footerName');
  if (fname) { fname.textContent = C.brand.name; fname.setAttribute('aria-label', C.brand.name); }
  const bottom = $$('.footer-bottom > p');
  if (bottom.length === 3) {
    bottom[0].textContent = C.brand.copyright;
    bottom[1].innerHTML = C.brand.socials.map((s) => `<a href="${s.url}" target="_blank" rel="noopener">${s.label}</a>`).join('&nbsp;&nbsp;&nbsp;');
    bottom[2].textContent = C.brand.signature;
  }
})();
