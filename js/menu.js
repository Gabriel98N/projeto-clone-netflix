export default function menu (){
  const menu = document.querySelector('.menu');
  const hamburguer = document.querySelector('.menu-hamburguer');
  const mobile = document.querySelector('.mobile');

  function handleMenu(){
    menu.classList.toggle('ativo');
    mobile.classList.toggle('ativo');
  }
  hamburguer.addEventListener('click', handleMenu);
}