function show(panel) {
  // Update tabs
  document.getElementById('tab-in').classList.remove('active');
  document.getElementById('tab-up').classList.remove('active');
  document.getElementById('tab-' + panel).classList.add('active');

  // Update panels
  document.getElementById('panel-in').classList.remove('active');
  document.getElementById('panel-up').classList.remove('active');
  document.getElementById('panel-' + panel).classList.add('active');

  // Update footer links
  if (panel === 'in') {
    document.getElementById('footer-in').style.display = 'block';
    document.getElementById('footer-up').style.display = 'none';
  } else {
    document.getElementById('footer-in').style.display = 'none';
    document.getElementById('footer-up').style.display = 'block';
  }
}

function ustep(n) {
  // Update step panels
  document.getElementById('u1').classList.remove('active');
  document.getElementById('u2').classList.remove('active');
  document.getElementById('u3').classList.remove('active');
  document.getElementById('u' + n).classList.add('active');

  // Update dots
  const dot1 = document.getElementById('dot-1');
  const dot2 = document.getElementById('dot-2');
  const dot3 = document.getElementById('dot-3');

  if (n === 1) {
    dot1.className = 'dot active';
    dot2.className = 'dot pending';
    dot3.className = 'dot pending';
  } else if (n === 2) {
    dot1.className = 'dot done';
    dot2.className = 'dot active';
    dot3.className = 'dot pending';
  } else if (n === 3) {
    dot1.className = 'dot done';
    dot2.className = 'dot done';
    dot3.className = 'dot active';
  }
}

function toggleChip(element) {
  element.classList.toggle('selected');
}
