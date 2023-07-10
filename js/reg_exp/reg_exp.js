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
// let str = `Всего 20$`,
//     reg = /\p{Sc}/gu;
// console.log(str.match(reg));

// первый символ кроме пробела
// let str = `Распустился ландыш в мае\nВ самый праздник — в первый день.\nМай цветами провожая,\nРаспускается сирень.`,
//     reg = /^[^\s]+/g;
// console.log(str.match(reg));

// последний символ кроме пробела
// let str = `Распустился ландыш в мае\nВ самый праздник — в первый день.\nМай цветами провожая,\nРаспускается сирень.`,
//     reg = /[^\s]+$/;
// console.log(str.match(reg));

// Поиск на каждой строке первого символа кроме пробела, якорь m
// let str = `Распустился ландыш в мае\nВ самый праздник — в первый день.\nМай цветами провожая,\nРаспускается сирень.`,
//     reg = /^[^\s]+/gm;
// console.log(str.match(reg));

// Поиск на каждой строке последнего символа кроме пробела
// let str = `Распустился ландыш в мае\nВ самый праздник — в первый день.\nМай цветами провожая,\nРаспускается сирень.`,
//     reg = /[^\s]+$/gm;
// console.log(str.match(reg));

//Якорь границы слова \b
// let str = `Hello hi hello hi hit...`,
//     reg = /\bhi\b/g;
// console.log(str.match(reg));

//Якорь границы части слова
// let str = `Hello hi hello hi thit...`,
//     reg = /hi\B/g;
// console.log(str.match(reg));

// метод test с якорем
// let str = `12345611`,
//     reg = /^.{6}$/;
// console.log(reg.test(str));

// скобочная группа
// let str = `
//           865E-5628-5815 banana
//           8936-562K-896G orange
//           896N-521J-H845 lemon`;
// let reg = /([A-Z\d]{4}-){3}[A-Z\d]{4}/g;
// console.log(Array.from(str.matchAll(reg)));

// метод replace() c совпадением
// let str = `Привет User`,
//     reg = /\w+/;
// console.log(str.replace(reg, '$&'));

// метод replace() c вставкой до совпадения
// let str = `Привет User`,
//     reg = /\w+/;
// console.log(str.replace(reg, '$`'));

// метод replace() c вставкой после совпадения
// let str = `Привет User !`,
//     reg = /\w+/;
// console.log(str.replace(reg, '$\''))

//метод replace() с обратной ссылкой
// let str = `Привет George Henry`,
//     reg = /(\w+)\s(\w+)/;
//   console.log(str.replace(reg, '$2 $1'));

// replace c обратной ссылкой на шаблон
// let str = `Привет George Henry`,
//     reg = /(?<first_name>\w+)\s(?<last_name>\w+)/;
// console.log(str.replace(reg, `$<last_name> $<first_name>`));

// replace c получением данных о совпадении и скобочной группе
// let str = `Привет George Henry`,
//     reg = /(?<name>\w+)\s(?<last_name>\w+)/;
// result = str.replace(reg, (match, p1, p2, offset, input, groups)=> {
//   console.log(`Найдено совпадение: ${match}`);
//   console.log(`Первое слово: ${p1}`);
//   console.log(`Второе слово: ${p2}`);
//   console.log(`Индекс совпадения: ${offset}`);
//   console.log(`Строка целиком: ${input}`);
//   console.log(groups);
// })

//альтернация
//  let str = `abcdef`,
//     reg = /b|d/g;
//   console.log(str.match(reg));

// позитивная опережающая проверка (находит число если за ним пробел и слово "рублей")
// let str = `"Это будет стоить 500 рублей, а это 300.`
//     reg = /\d+\b(?=\sрублей)/g;
// console.log(str.match(reg));

// негативная опережающая проверка (находит число если за ним нет пробела и слово "рублей")
// let str = `"Это будет стоить 500 рублей, а это 300.`,
//     reg = /\d+\b(?!\sрублей)/g;
// console.log(str.match(reg));

// позитивная ретроспективная проверка
// let str = `"Это будет стоить 500 рублей, а это 300.`,
//     reg = /(?<=стоить\s)\b\d+/g;
//   console.log(str.match(reg))

// негативная ретроспективная проверка
// let str = `"Это будет стоить 500 рублей, а это 300.`,
//     reg = /(?<!стоить\s)\b\d+/g;
// console.log(str.match(reg));

// создать РВ где должно присутствовать минимум (1 буква в нижнем регистре, 1 буква в верхнем регистре, 1 цифра, длина от 8-16 символов)
let str = "fJ4Ujr52jsy",
    reg = /(?=[a-z])[a-zA-Z]\d/g;
console.log(str.match(reg));