// Написать обработчики событий для работы с мультимедийными элементами, такими как аудио и видео проигрыватели, чтобы использовать определенные функции, когда пользователь взаимодействует с элементами (например, при нажатии на кнопку "воспроизведение").

// аудиопроигрыватель
// смена кнопок play и pause
const btnPlay = document.querySelector('.btn-play'),
      btnPause = document.querySelector('.btn-pause');

btnPlay.addEventListener('click', function(){
  this.classList.add('hide');
  btnPause.classList.remove('hide');
})

btnPause.addEventListener('click', function () {
  this.classList.add('hide');
  btnPlay.classList.remove('hide');
})

// бесконечное проигрывание плэйлиста
// регулировка громкости
// плейлист