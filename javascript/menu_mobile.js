let btnMobile = document.querySelector('#btn-mobile');
let line1 = document.querySelector('.line-1');
let line2 = document.querySelector('.line-2');
let menuMobile = document.querySelector('#menu-mobile');

let scrollY = 0;

btnMobile.addEventListener("click", () => {
  line1.classList.toggle('ativo1');
  line2.classList.toggle('ativo2');
  menuMobile.classList.toggle('abrir');

  if (menuMobile.classList.contains('abrir')) {
    // Salva a posição da rolagem atual
    scrollY = window.scrollY;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = '0';
    document.body.style.right = '0';
  } else {
    // Remove a trava e restaura a rolagem
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.left = '';
    document.body.style.right = '';
    window.scrollTo(0, scrollY);
  }
});
