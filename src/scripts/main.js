function openNav() {
  document.getElementById('myNav').style.width = '100vw';
  document.getElementById('myNav').classList.add('is-open');
  lockBody();
}

function getScrollbarWidth() {
  return window.innerWidth - document.documentElement.clientWidth;
}

function lockBody() {
  const w = getScrollbarWidth();

  document.documentElement.style.overflow = 'hidden';
  document.body.style.overflow = 'hidden';
  document.body.style.paddingRight = w + 'px';
  document.body.style.backgroundColor = '#d12d35';
}

function unlockBody() {
  document.documentElement.style.overflow = '';
  document.body.style.overflow = '';
  document.body.style.paddingRight = '';
  document.body.style.backgroundColor = 'white';
}

function closeNav() {
  document.getElementById('myNav').style.width = '0%';
  document.getElementById('myNav').classList.remove('is-open');
  unlockBody();
}

function hoverBtn() {
  const btn = document.querySelector('.call_btn');

  btn.classList.add('hovered');

  const tooltip = {
    position: 'absolute',
    top: '50%',
    right: '100%',
    transform: 'translateY(-50%)',
    marginBottom: '8px',
    zIndex: '9999',
    backgroundColor: 'rgba(0, 0, 0, 0)',
    color: '#fff',
    padding: '5px 10px',
    borderRadius: '5px',
    fontSize: '14px',
    textAlign: 'right',
    whiteSpace: 'nowrap',
  };

  const tooltipTexts = {
    line1: 'THE MET FIFTH AVENUE',
    line2: '+1 212-535-7710',
    line3: '',
    line4: 'THE MET FIFTH CLOISTERS',
    line5: '+1 212-923-3700',
  };

  if (window.matchMedia('(max-width: 344px)').matches) {
    tooltip.top = '40%';
    tooltip.fontSize = '10px';
    tooltip.fontWeight = '700';
    tooltip.right = '70%';
  }

  const tooltipElement = document.createElement('div');

  tooltipElement.classList.add('tooltip');

  Object.assign(tooltipElement.style, tooltip);

  for (let li = 0; li < 5; li += 1) {
    const p = document.createElement('p');

    p.textContent = tooltipTexts[`line${li + 1}`];
    tooltipElement.appendChild(p);
  }

  btn.addEventListener('mouseenter', () => {
    setTimeout(() => {
      if (btn.contains(tooltipElement)) {
        // btn.removeChild(tooltipElement);
        btn.classList.remove('hovered');
      }
    }, 3000);
  });

  btn.appendChild(tooltipElement);

  btn.addEventListener('mouseleave', () => {
    btn.classList.remove('hovered');
    btn.removeChild(tooltipElement);
  });
}

(function attachOverlayLinkHandler() {
  const nav = document.getElementById('myNav');

  if (!nav) {
    return;
  }

  nav.addEventListener(
    'click',
    (e) => {
      const link = e.target.closest('a');

      if (!link) {
        return;
      }

      const href = link.getAttribute('href');

      if (!href) {
        return;
      }

      e.preventDefault();

      closeNav();

      const NAV_CLOSE_DELAY = 250;

      setTimeout(() => {
        if (link.target === '_blank') {
          window.open(href, '_blank');

          return;
        }

        if (href.startsWith('tel:') || href.startsWith('mailto:')) {
          window.location.href = href;

          return;
        }

        if (href.startsWith('#')) {
          const target = document.querySelector(href);

          if (target) {
            target.scrollIntoView({ behavior: 'smooth' });

            return;
          }

          window.location.hash = href;

          return;
        }

        window.location.href = href;
      }, NAV_CLOSE_DELAY);
    },
    false,
  );
})();
