// setInterval()
// let btnStart = document.querySelector('.btn-start'),
//     square = document.querySelector('.box'),
//     posX = 0;

// let timer = setInterval(function() {
//   if(posX == 400) {
//     clearInterval(timer); 
//   } else {
//     posX ++;
//     console.log(posX);
//     square.style.left = posX + 'px';
//   }
// },2000) 

// requestAnimationFrame()
// let square = document.querySelector('.box'),
//     posY = 0; 

// function runBox() {
//   if(posY == 400) {
//   } else {
//     posY ++;
//     console.log(posY);
//     square.style.top = posY + 'px';
//     requestAnimationFrame(runBox);
//   }
// }

let time = performance.now();
console.log(time);

function animate({
  timing,
  draw,
  duration
}) {

  let start = performance.now();

  requestAnimationFrame(function animate(time) {
    // timeFraction изменяется от 0 до 1
    let timeFraction = (time - start) / duration;
    if (timeFraction > 1) timeFraction = 1;

    // вычисление текущего состояния анимации
    let progress = timing(timeFraction);

    draw(progress); // отрисовать её

    if (timeFraction < 1) {
      requestAnimationFrame(animate);
    }

  });
}