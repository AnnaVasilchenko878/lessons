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
// let str = `абвгдежзиклмн`,
//     reg = /[^а-ез-н]/;
// console.log(str.match(reg));

// символ ё в диапазоне
// let str = `абвгдеёжзийклмнопрстуфхцчшщъыьэюя`,
//     reg = /[^а-яё]/;
// console.log(str.match(reg));

// квантификатор {}
// let str = `Сегодня 27.06.2023 Вторник`,
//     reg = /\d{2}\.\d{2}\.\d{4}/;
// console.log(str.match(reg));

// квантификатор {} с диапазоном жадные
// let str = `Отсюда до реки 5 а до города километров 1888`,
//     reg = /\d{2,3}/;
// console.log(str.match(reg));

// жадный квантификатор от и до бесконечности
// let str = `Отсюда до реки 5 а до города километров 1888`,
//     reg = /\d{2,}/;
// console.log(str.match(reg));

// ленивый квантификатор {} c диапеазоном
// let str = `Отсюда до реки 50км а до города 180`,
//     reg = /\d{2,3}?/;
// console.log(str.match(reg));

// ленивый квантификатор от и до бесконечности
// let str = `Отсюда до реки 50км а до города 180`,
//     reg = /\d{2,}?/;
// console.log(str.match(reg));

// квантификатор в уловии
// let str = `Кто такой адресат?`,
//     reg = /адресан?т/;
// console.log(str.match(reg));

// квантификатор *
// let str = `123456789`,
//     reg = /\d*/;
// console.log(str.match(reg));

// ленивый квантификатор *?
// let str = `123456789`,
//     reg = /\d*?/;
// console.log(str.match(reg));

// + 
// let str = `123456789`,
//     reg = /\d+/;
// console.log(str.match(reg))

// split
// let str =`1,2,3, 4 , 5   ,6`,
//     reg = /\s*,\s*/;
// console.log(str.split(reg));

// search
// let str = `.....8652482`,
//     reg = /\d{7}/;
// console.log(str.search(reg));

// флаг g глобальный поиск
// let str = `apple`,
//     reg=/./g;
// console.log(str.match(reg));

// флаг s сингллайновый режим
// let str = `123\n4`,
//     reg = /./gs;
// console.log(str.match(reg));

// флаг i регистронезависимый 
// let str = `Кот терракотового цвета кушает котлету`,
//     reg = /кот/gi;
// console.log(str.match(reg));

// метод matchAll()
// let str = `Кот терракотового цвета кушает котлету`,
//   reg = /кот/gi;
// console.log(str.matchAll(reg));

// метод matchAll() в массиве
// let str = `Кот терракотового цвета кушает котлету`,
//   reg = /кот/gi;
// console.log(Array.from(str.matchAll(reg)));

// метод класса RegExp exec()
// let str = `Кот терракотового цвета кушает котлету`,
//   reg = /кот/gi;
// console.log(reg.exec(str));

// юникодный символ + u
let str = `Всего 20$`,
    reg = /\p{Sc}/gu;

console.log(str.match(reg));