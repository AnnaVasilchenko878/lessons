// строка с датой
// let date = Date();
// console.log(typeof date);
// Fri Aug 18 2023 10:37:11 GMT+0300 (Москва, стандартное время)

// объект с датой
// let date = new Date();
// console.log(date);
// Fri Aug 18 2023 10:37:11 GMT+0300 (Москва, стандартное время)

// let date = new Date(10154854564135);
// console.log(date);
// Sun Oct 18 2291 03:56:04 GMT+0300 (Москва, стандартное время)

// let date = new Date('1995-01-20');
// console.log(date);

// добавление свойство прототипу
// Date.prototype.userName = 'Nastya';
// if (Date.prototype.hasOwnProperty('userName')) {
//   console.log('Свойство userName присутствует в прототипе класса Date');
// } else {
//   console.log('Свойство userName отсутствует в прототипе класса Date');
// }

// Количество параметров которые принимает функция-конструктор
// console.log(Date.length)

// Date.now()
// console.log(Date.now());

// Date.parse()
// let date = new Date('2003-05-25');
// console.log(typeof Date.parse(date));

// Date.UTC()
// console.log(Date.UTC(1995, 3))

// invalid date
// console.log(new Date(undefined));

// Приравнивание к примитиву
// console.log(new Date(null));
// console.log(new Date(false));
// console.log(new Date(['1995-06-15']));

// [toPrimitive]()
// let date = new Date(0);
// console.log(date);
// console.log(date[Symbol.toPrimitive]('string'));
// console.log(date[Symbol.toPrimitive]('number'));

// getDate()
// let date = new Date('2001-03-25');
// console.log(date.getDate());

// getDay()
// let date = new Date('2023-08-23');
// console.log(date.getDay());

// getFullYear()
// let date = new Date('2022-06-15');
// console.log(date.getFullYear());

// getHours()
// let time = new Date('2021-02-25T15:05:13');
// console.log(time.getHours());

// getMilliseconds()
// let time = new Date('2021-02-25T15:05:13.005');
// console.log(time.getMilliseconds());

// getMinutes()
// let time = new Date('2021-02-25T15:05:13.005');
// console.log(time.getMinutes());

// getMonth()
// let date = new Date('2021-02-25T15:05:13.005');
// console.log(date.getMonth());

// getSeconds()
// let date = new Date('2021-02-25T15:05:13.005');
// console.log(date.getSeconds());

// getTime()
// let date = new Date('2021-02-25T15:05:13.005');
// console.log(date.getTime())

//setDate()
// let date = new Date('May 15, 1995 22:05:14');
// date.setDate(10);
// console.log(date);

//setFullYear()
// let date = new Date('May 15, 1995 22:05:14');
// date.setFullYear(1998);
// console.log(date);

// let date = new Date('May 15, 1995 22:05:14');
// date.setFullYear(1998, 6);
// console.log(date);

// let date = new Date('May 15, 1995 22:05:14');
// date.setFullYear(1998, 6, 25);
// console.log(date)

//setHours()
// let date = new Date('May 15, 1995 22:05:14');
// date.setHours(15);
// console.log(date);

// let date = new Date('May 15, 1995 22:05:14');
// date.setHours(15, 15);
// console.log(date);

// let date = new Date('May 15, 1995 22:05:14');
// date.setHours(15, 15, 15);
// console.log(date);

// toDateString()
// let date = new Date(2021, 1, 20, 12, 20, 5);
// console.log(date.toString());

// toISOString()
// let date = new Date(2021, 1, 20, 12, 20, 5);
// console.log(date.toISOString());

// toJSON()
// let date = new Date(2021, 1, 20, 12, 20, 5);
// console.log(date.toJSON());

// toLocaleDateString()
// TODO: Вернуться после изучения  Intl.DateTimeFormat
// let date = new Date(2021, 1, 20, 12, 20, 5);
// console.log(date.toLocaleDateString());

//toString()
// let date = new Date(2021, 1, 20, 12, 20, 5);
// console.log(date.toString());

// toTimeString()
// let date = new Date(2021, 1, 20, 12, 20, 5);
// console.log(date.toTimeString());

// toUTCString()
// let date = new Date(2021, 1, 20, 12, 20, 5);
// console.log(date.toUTCString());

// Date.UTC()
// console.log(Date.UTC(2021, 1, 4));

// valueOf()
let date = new Date(2021, 1, 20, 12, 20, 5);
console.log(date.valueOf());