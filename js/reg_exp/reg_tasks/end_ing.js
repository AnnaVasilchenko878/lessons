//  Напишите регулярное выражение, которое будет находить все слова в строке, оканчивающиеся на "ing".Напишите функцию, которая будет принимать строку и возвращать массив найденных слов.

function searchIngEnd(currentString) {
  let regIngEnd = /[a-zA-z+]\w+ing/g;
 return currentString.match(regIngEnd);
}

let ingArray = searchIngEnd(`Listing, reading, chat, rendering, harmony`);