// iffy
(function hello(){
  console.log(`Hello`)
})()

// iffy c параметрами
(function (a, b) {
  console.log(a + b)
})(2,3)

// глобальная переменная 
let number = 10;
function printNumber() {
  console.log(number);
}
printNumber()

// локальняа переменная и ошибка ReferanceError
function checkNumber(){
  let number2 = 20;
console.log(`Внутри функции number2 = ${number2}`);
}
checkNumber();
console.log(number2);

// блочная область
{
  let number3 = 30;
  console.log(`В этом блоке number3 = ${number3}`);
}
console.log(number3);