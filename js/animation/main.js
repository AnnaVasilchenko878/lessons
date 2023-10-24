// классическая линейная анимация
let elem = document.querySelector('progress');
function animate({
  duration,
  draw,
  timing
}) {
  let start = performance.now();
  console.log(`Время которое прошло с открытия страницы start =${start}`);

  (function run(time) {
    console.log(`Время с открытия страницы до запуска функции run включительно time =  ${time}`)
    let timeFraction = (time - start) / duration;
    console.log(`Статус выполнения анимации timeFraction = ${timeFraction}`);

    if (timeFraction > 1) {
      timeFraction = 1;
    }

    let progress = timing(timeFraction);
    console.log(`Скорость анимации progress = ${progress}`);
    draw(progress);

    if (timeFraction < 1) {
      requestAnimationFrame(run);
    }
    console.log(`Следующий цикл кадр`)
  })(start);
}
animate({
  duration: 1000,
  timing: function (timeFraction) {
    return timeFraction;
  },
  draw: function (progress) {
    elem.style.width = progress * 100 + '%';
  }
});

// Общий алгоритм анимации 
/*
1. рассчитываем время с открытия страницы
2. рассчитваем время которое пройдет с открытия страницы до конца работы функции с анимацией
3. рассчитываем прогресс анимации(шаг 0-0.5-1) 1 конец
4. пишем условие если шаг анимации становиться больше 1 т.е завершился то прогресс анимации завершить
5. создаем переменную которая хранит скорость анимации это результат функции 
6. применяем анимационный стиль к объекту
*/
