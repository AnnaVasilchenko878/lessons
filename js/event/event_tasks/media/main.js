// Написать обработчики событий для работы с мультимедийными элементами, такими как аудио и видео проигрыватели, чтобы использовать определенные функции, когда пользователь взаимодействует с элементами (например, при нажатии на кнопку "воспроизведение").

// аудиопроигрыватель

// ждем когда отрисутся DOM
window.addEventListener('DOMContentLoaded', function(){
  // создвние экземпляра класса audio
  const audio = new Audio();
  audio.src = 'audio/depeche-mode-enjoy-the-silence.mp3';

  // ждем когда прогрузиться аудио
  audio.addEventListener('loadedmetadata', function(){

    // получене кнопок и программирование их
    const btnPlay = document.querySelector('.btn-play'),
          btnPause = document.querySelector('.btn-pause');
  
    btnPlay.addEventListener('click', function () {
      this.classList.add('hide');
      btnPause.classList.remove('hide');
      audio.play();
    });

    btnPause.addEventListener('click', function () {
      this.classList.add('hide');
      btnPlay.classList.remove('hide');
      audio.pause();
    });
    
    // расчет общего времени и вывод 
    const timeOutput = document.querySelector('.full-time'),
          timeStartOutput = document.querySelector('.time-start');
    let time = audio.duration/60;
    // вывод времени в формате мин:сек 4.23
    function modFormatTime(currentTime){
      currentTime = currentTime.toFixed(2);
      let min = Math.floor(currentTime);
      let sec = Math.floor((currentTime - min)*100);
      return {min: min,
              sec: sec}    
    }
    let fullTime = modFormatTime(time);
    timeOutput.textContent = `${fullTime.min}:${fullTime.sec}`;

    // расчет и вывод времени проигрывания
    // добавление события обновления времени
    audio.addEventListener('timeupdate', function(){
      let pastTime = audio.currentTime,
          minutes = Math.floor((pastTime % 3600)/60),
          seconds = Math.floor(pastTime % 60),
          timeOutput = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`; 
          timeStartOutput.textContent = timeOutput;
    })
  });
  // 
});
  // бесконечное проигрывание плэйлиста
  // регулировка громкости
  // плейлист