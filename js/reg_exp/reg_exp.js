// let str = `1. Смех, что ураган: достигнув определенного уровня, он выходит на режим самоподпитывания и самоподдерживания. Ты смеешься не потому, что шутки забавные, но потому, что забавным становится твое состояние.`

// match()
// let reg = new RegExp(`режим`);
// console.log(str.match(reg));

// экранирование символов
// let reg = /режим\./;
// console.log(str.match(reg));
// null

// символьные классы
// let str = `3 2 1 пуск`

// \d
// let reg = /\d/;
// console.log(str.match(reg));

// \d\d
// let str = `321 пуск`
// let reg = /\d\d/;
// console.log(str.match(reg));

// \D
// let str = `321_пуск`
// let reg = /\D/;
// console.log(str.match(reg));

// \s
// let str = `321 пуск`
// let reg = /\s/;
// console.log(str.match(reg));

// \S
// let str = `А сколько вы сказали стоят апельсины? 200?- Нет, 150 рублей за килограмм.`
//     reg = /\d\d\S/;
// console.log(str.match(reg));

// \w
// let str = `How are you?`,
//     reg = /\w/;
// console.log(str.match(reg));

// \W
// let str = `Привет, как дела?`
//     reg = /\W/;
// console.log(str.match(reg));

// наборы [символы вариантов начала]конец  
// let str = `Привет, меня зовут Маша а этой мой друг Паша`,
//     reg = /[МП]аша/;
// console.log(str.match(reg));

// исключающие наборы 
// let str = `Привет, меня зовут Маша а этой мой друг Паша. А ты Даша, правильно?`,
//     reg = /[^МП]аша/;
// console.log(str.match(reg));

//диапазон 
// let str = `aбвгдеёжз`,
//     reg = /[б-д]/;
// console.log(str.match(reg));

// исключающий диапазон
// let str = `абвгде`
//     reg = /[^a-г]/;
// console.log(str.match(reg));

// несколько диапазонов с исключением
let str = `абвгдежзиклмн`,
    reg = /[^а-ез-н]/;
console.log(str.match(reg));