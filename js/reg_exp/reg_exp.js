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
let str = `Сколько вы сказали стоят апельсины? 200? - Нет, 150 рублей за килограмм.`
    reg = /\d\d\S/;
console.log(str.match(reg));
