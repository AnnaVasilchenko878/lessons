// Создайте функцию, которая будет принимать в качестве аргумента дату в формате "Месяц-День-Год" и возвращать объект Date.

function creatDateObject(dateString) {
  let date = new Date(dateString);
  console.log(date.toLocaleString());
  console.log(typeof date);
}
creatDateObject('12-22-2005');