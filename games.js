const CATALOG = [
  { page: 'pyramidka.html',     name: 'Pyramidka: Ring Stack Puzzle',  icon: 'pyramidka_logo.png', genre: 'Puzzle',  platforms: ['Android', 'iOS'] },
  { page: '2000iq.html',        name: '2000 IQ! - Tricky Puzzles',     icon: '2000iq_logo.png',    genre: 'Brain teaser', platforms: ['Android', 'iOS'] },
  { page: '2001iq.html',        name: '2001 IQ - Tricky Brain Puzzles', icon: '2001iq_logo.png',   genre: 'Brain teaser', platforms: ['Android'] },
  { page: 'nutout.html',        name: 'Nut Out! - Screw Puzzle',       icon: 'logo1024.png',       genre: 'Puzzle',  platforms: ['Android', 'iOS'] },
  { page: 'sgh.html',           name: 'Stickman: Going Home',          icon: 'sghLogo.png',        genre: 'Casual',  platforms: ['Android'] },
  { page: 'colorlaserpop.html', name: 'Color Laser Pop',               icon: 'colorlaserLogo.png', genre: 'Puzzle',  platforms: ['Android'] },
  { page: 'duevo.html',         name: 'DUEVO',                         icon: 'duevonewlogo.png',   genre: 'Finance', platforms: ['Android', 'iOS'], app: true },
];

(() => {
  const page = document.querySelector('.game-page');
  if (!page) return;

  const file = location.pathname.split('/').pop() || 'index.html';
  const current = CATALOG.find(g => g.page === file);
  const icon = page.querySelector('.game-icon');

  if (icon) page.style.setProperty('--img', `url('${icon.getAttribute('src')}')`);
  page.insertAdjacentHTML('afterbegin', '<span class="gp-glow" aria-hidden="true"></span>');

  if (current) {
    const chips = [`<span class="gp-chip">${current.genre}</span>`]
      .concat(current.platforms.map(p => `<span class="pill pill-${p.toLowerCase()}">${p}</span>`))
      .join('');
    page.querySelector('.tagline')?.insertAdjacentHTML('afterend', `<div class="gp-meta">${chips}</div>`);
  }

  const others = CATALOG.filter(g => g.page !== file && !g.app);
  const label = current ? current.name : 'this game';

  page.insertAdjacentHTML('afterend', `
    <section class="gp-more">
      <h2 class="block-title">More <span class="accent-text">Games</span></h2>
      <div class="gp-more-list">
        ${others.map(g => `
          <a class="gp-more-item" href="${g.page}">
            <img src="${g.icon}" alt="">
            <span>${g.name}</span>
          </a>`).join('')}
      </div>
    </section>
    <section class="gp-help">
      <a class="gp-help-item" href="support.html">
        <span class="gp-help-icon"><svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M9.1 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3M12 17h.01"/></svg></span>
        <span><strong>Need help?</strong><small>Questions or bugs in ${label}? Get in touch.</small></span>
      </a>
      <a class="gp-help-item" href="privacy.html">
        <span class="gp-help-icon"><svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></span>
        <span><strong>Privacy Policy</strong><small>How your data is handled.</small></span>
      </a>
    </section>`);
})();
