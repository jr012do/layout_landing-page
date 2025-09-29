/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById('myNav').style.width = '100%';
  document.getElementById('myNav').classList.add('is-open');
  lockBody();
}

function getScrollbarWidth() {
  return window.innerWidth - document.documentElement.clientWidth;
}

function lockBody() {
  const w = getScrollbarWidth();

  document.body.style.overflow = 'hidden';
  document.body.style.paddingRight = w + 'px'; // alebo margin-right
  document.body.style.backgroundColor = '#d12d35';
}

function unlockBody() {
  document.body.style.overflow = '';
  document.body.style.paddingRight = '';
  document.body.style.backgroundColor = 'white';
}

/* Close when someone clicks on the "x" symbol inside the overlay */
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
    top: '50%', // 👈 nad ikonou
    right: '100%', // 👈 vystredí horizontálne
    transform: 'translateY(-50%)',
    marginBottom: '8px', // medzera medzi ikonou a tooltipom
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

  const tooltipElement = document.createElement('div');

  tooltipElement.classList.add('tooltip');

  Object.assign(tooltipElement.style, tooltip);

  for (let li = 0; li < 5; li += 1) {
    const p = document.createElement('p');

    p.textContent = tooltipTexts[`line${li + 1}`];
    tooltipElement.appendChild(p);
  }

  btn.addEventListener('mouseleave', () => {
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
