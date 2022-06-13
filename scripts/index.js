//секция description блок video-player
const videoCover = document.querySelector('.video-player__cover')
videoCover.addEventListener('click', ()=> {
  videoCover.style.display='none'
})
// по клику отрубает обложку у айфрейма

//burger js
const burgerOpenBtn = document.querySelector('.burger__close');
const burgerLine = document.querySelector('.burger__line');
const buregerBody = document.querySelector('.burger');
const pageBody = document.querySelector('.root');

burgerOpenBtn.addEventListener('click', function() {
    burgerOpenBtn.classList.toggle('burger__close_is-active');
    burgerLine.classList.toggle('burger__line_is-active');
    buregerBody.classList.toggle('burger_is-active');
    pageBody.classList.toggle('root_type_scroll-locked');
})