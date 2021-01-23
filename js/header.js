export default function header(){
  const header = document.querySelector('.header');
  function scrollHeader(){
    if(window.scrollY > 10){
      header.classList.add('black');
    }else{
      header.classList.remove('black');
    }
  }
  window.addEventListener('scroll', scrollHeader);

  return () => {
    window.removeEventListener('scroll', scrollHeader);
  }
}