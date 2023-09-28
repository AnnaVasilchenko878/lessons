// Создайте функцию, которая будет определять, является ли заданная дата прошедшей, текущей или будущей.

function checkDate(currentDate) {
  let date = new Date(currentDate);
  let today = new Date();

  if (date.toDateString() === today.toDateString()) {
    return "Введенная дата является текущей";
  } else if (date < today) {
    return "Дата меньше текущей";
  } else {
    return "Дата больше текущей";
  }
}
let isTime = checkDate('2023-09-03');
console.log(isTime);