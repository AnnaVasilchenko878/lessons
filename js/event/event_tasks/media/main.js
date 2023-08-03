// Написать обработчики событий для работы с мультимедийными элементами, такими как аудио и видео проигрыватели, чтобы использовать определенные функции, когда пользователь взаимодействует с элементами (например, при нажатии на кнопку "воспроизведение").

// аудиопроигрыватель

// создание эл-та аудио c использование встроенного класса audio
window.addEventListener('DOMContentLoaded', function(){
  const audio = new Audio();
  audio.src = 'audio/depeche-mode-enjoy-the-silence.mp3';

  const btnPlay = document.querySelector('.btn-play'),
    btnPause = document.querySelector('.btn-pause');

  btnPlay.addEventListener('click', function () {
    this.classList.add('hide');
    btnPause.classList.remove('hide');
    audio.play();
  })

  btnPause.addEventListener('click', function () {
    this.classList.add('hide');
    btnPlay.classList.remove('hide');
    audio.pause();
  });

  // вывод продолжительности аудио
  const timeOutput = document.querySelector('.full-time')
  audio.addEventListener('loadedmetadata', function(){
    let time = audio.duration/60;
    timeOutput.textContent = time.toFixed(2);
    console.log(time);
  })

  // бесконечное проигрывание плэйлиста
  // регулировка громкости
  // плейлист
});