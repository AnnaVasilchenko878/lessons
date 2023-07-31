//  Разработать слайдер для переключения изображений, используя обработчики событий для кнопок переключения.

let slider = document.querySelector('.slider'),
    btnPrew = document.querySelector('.btn-prew'),
    btnNext = document.querySelector('.btn-next'),
    position = 0;

btnNext.addEventListener('click', function(){
  position += 1000;
  if(position > 4000) {
    position = 0;
  }
    slider.style.left = `-${position}px`;
})

btnPrew.addEventListener('click', function(){
  position -=1000;
    if (position<0) {
      position = 4000;
    }
  slider.style.left = `-${position}px`;
})