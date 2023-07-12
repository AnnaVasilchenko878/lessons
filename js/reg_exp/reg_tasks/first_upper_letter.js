// Напишите регулярное выражение, которое будет находить все слова в строке, начинающиеся с заглавной буквы.Напиши функцию, которая будет принимать строку и возвращать массив найденных слов.

function searchUpper(currentString) {
  let regUpper = /[A-Z]\w+(?=\s|$)/g;
  return currentString.match(regUpper);
}

let result = searchUpper(`Apple banana Peach Yellow grape cat`);
