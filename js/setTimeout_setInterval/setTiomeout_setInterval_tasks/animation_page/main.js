let btnAnimate = document.querySelector('.btn'),
    square = document.querySelector('.box');

function myAnimation(){
  let pos = 0;
  let timerId = setInterval(frame, 10)
  function frame() {
    if(pos == 300) {
      clearInterval(timerId);
    } else {
      pos++;
      square.style.top = pos + 'px';
      square.style.left = pos + 'px'; 
    }
  }
}

btnAnimate.addEventListener('click', myAnimation);

// делегирование
let btnWrapper = document.querySelector('.btn-block'),
    buttons = document.querySelectorAll('button');

btnWrapper.addEventListener('click', function(event){
  // клик в обертке && клик на самой кнопке которая должна быть в обертке и иметь класс first
  // if(event.target && event.target.classList.contains('first')) {

  //клик в обертке && клик на самой кнопке которая должна быть в обертке и иметь класс first c matches
    if(event.target && event.target.matches('button.first')) {
    console.log('Клик на кнопке');
  }
})
