let box = document.querySelector('.box');

function animationRun(duration, timing, draw) {
  let start = performance.now();

  function run(time){
  let timeFraction = (time - start)/duration;
  if(timeFraction>1) {
    timeFraction = 1
  }
  let animationProgress = timing(timeFraction);
  draw(animationProgress);
  if(timeFraction<1) {
    requestAnimationFrame(run);
  }
}
requestAnimationFrame(run)
}

// функция для обраной анимации
function makeEaseOut(timing) {
  return function (timeFraction) {
    return 1 - timing(timeFraction)
  }
}

// функция для двойной обратной анимации 

function makeEaseInOut(timing) {
  return function(timeFraction) {
    if(timeFraction<0.5) {
      return timing(2*timeFraction)/2
    } else {
      return (2-timing(2*(1-timeFraction)))/2
    }
  }
}
// движение анимации
function timing(timeFraction) {
  // линейная easeIn
  // return timeFraction;

  // параболическая кривая easeIn
  // return Math.pow(timeFraction, 5);


  // дуга easeIn
  // return 1 - Math.sin(Math.acos(timeFraction));

  // отскок easeIn
   for(let a=0, b=1; 1; a+=b, b/=2) {
    if(timeFraction>=(7-4*a)/11) {
      return -Math.pow((11-6*a-11*timeFraction)/4,2) + Math.pow(b,2)
    }
   } 
}

// timing выстрел из лука easeIn
// function timing(x) {
//   return function (timeFraction) {
//   return Math.pow(timeFraction, 2) * ((x + 1) * timeFraction - x)
//   }
// }

// эластичная анимация пружина  easeIn
// function timing(x) {
//   return function (timeFraction) {
//     return Math.pow(2, 10* (timeFraction -1)) * Math.cos(20*Math.PI * x/3 * timeFraction);
//   }
// }

// для обратной анимации
// let linearEaseOut = makeEaseOut(timing);

// для двойной обратной анимации
let linearEaseInOut = makeEaseInOut(timing)

function draw(animationProgress) {
  box.style.left = animationProgress * 480 + 'px';
}

// для обратной анимации
// animationRun(10000, linearEaseOut, draw);

// для двойной обратной анимации
animationRun(3000, linearEaseInOut, draw);


// для timing выстрел из лука или пружины
// animationRun(10000, timing(2), draw);


