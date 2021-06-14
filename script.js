'use strict';

const overlay = document.querySelector('.overlay');
const model = document.querySelector('.modal');
const show_model = document.querySelectorAll('.show-modal');
const close_btn = document.querySelector('.close-modal');
const bodyEl = document.querySelector('body');
for (let i = 0; i < show_model.length; i++) {
  show_model[i].addEventListener('click', showModel);
}
close_btn.addEventListener('click', closeModel);

function showModel() {
  model.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

function closeModel() {
  model.classList.add('hidden');
  overlay.classList.add('hidden');
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && !model.classList.contains('hidden')) {
    closeModel();
  }
});
