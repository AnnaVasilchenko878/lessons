// Создайте функцию, которая будет принимать в качестве аргумента дату в формате "Месяц-День-Год" и возвращать объект Date.

function creatDateObject(dateString) {
  let parts = dateString.split('-');
  console.log(parts);
  let formattedDate = parts[2] + '-' + parts[0] + '-' + parts[1];
  let date = new Date(formattedDate);
  return date;
}

let date = creatDateObject('25-04-2005');
console.log(date);