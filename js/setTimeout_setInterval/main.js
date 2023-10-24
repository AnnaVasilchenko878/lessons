// общий синтаксис
// setTimeout(funct,delay);

// пример с задержкой в 3 сек
// setTimeout(sayHello, 3000)
// function sayHello() {
//   console.log('Hello')
// };

// запись в числовой идентификатор с удалением
// let timerId = setTimeout(sayHello, 3000);
// clearTimeout(timerId);
// function sayHello() {
//   console.log('Привет');
// }

// вывод в консоль с интервалом 3 сек
// let timerId = setInterval(sayHello, 3000);
// function sayHello() {
//   console.log('Hello')
// };

// удаление интервального вызова
// let timerId = setInterval(sayHello, 3000);
// function sayHello() {
//   console.log('Hello');
// }
// clearInterval(timerId);

// рекурсивный setiTimeout
let timerId = setTimeout(function log() {
  console.log('Hello');
  setTimeout(log, 2000);
});