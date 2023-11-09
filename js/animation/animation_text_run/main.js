// основная часть анимации на основе прогресса и метода requestAnimationFrame
function animation(duration, timing, draw) {
  let start = performance.now();

    requestAnimationFrame(function run(time){
      let animationFraction = (time - start)/duration;
      if(animationFraction>1) {
        animationFraction = 1;
      } 
      let animationProgress = timing(animationFraction);
      draw(animationProgress);

      if(animationFraction<1) {
        requestAnimationFrame(run);
      }
    })  
}

// скорость анимации 
function timing() {
  return function(animationFraction) {
    for (let a = 0, b = 1; 1; a += b, b /= 2) {
    if (animationFraction >= (7 - 4 * a) / 11) {
      return -Math.pow((11 - 6 * a - 11 * animationFraction) / 4, 2) + Math.pow(b, 2)
    }
    }
  }
}

//отрисовка анимации
let textarea = document.querySelector('.text');
  function draw() {
    return function(animationProgress){
    let text = textarea.value,
    toText = textarea.value.length;
    fromText = 0;
    let result = (toText-fromText) * animationProgress + fromText;
    textarea.value = text.slice(0, Math.ceil(result))
    }
  }

animation(5000,timing(),draw());
