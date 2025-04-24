let modal = document.querySelector('.modal');
let btn = document.querySelector('#btn'); 
let closeBtn = document.querySelector('.modal h2 span');

btn.addEventListener('click', () => {
  modal.classList.add('modalshow');
  });

closeBtn.addEventListener('click', () => {
   modal.classList.remove('modalshow');
});