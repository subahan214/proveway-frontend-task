document.querySelectorAll('.card').forEach(card => {
  // Card expand/collapse
  card.addEventListener('click', function(e) {
    if (!e.target.closest('.color-box, .size-btn')) {
      document.querySelectorAll('.card').forEach(c => c.classList.remove('expanded'));
      this.classList.toggle('expanded');
    }
  });

  // Color change
  card.querySelectorAll('.color-box').forEach(box => {
    box.addEventListener('click', () => {
      const color = box.dataset.color;
      card.querySelector('.card-main-box').className = `card-main-box ${color}`;
      card.querySelectorAll('.color-box').forEach(b => b.classList.remove('active'));
      box.classList.add('active');
    });
  });

  // Size change
  card.querySelectorAll('.size-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const size = btn.dataset.size;
      const mainBox = card.querySelector('.card-main-box');
      mainBox.classList.remove('small', 'medium', 'large', 'xl');
      mainBox.classList.add(size);
      card.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });
});
