// Напишите функцию, которая будет проверять, является ли заданная дата выходным днем(субботой или воскресеньем).

function isWeekend(currentDate) {
  let date = new Date(currentDate);
  return date.getDay() == 0 || date.getDay() == 6? 'Это выходной день': 'Будний день'
}
let myDate = isWeekend('2023-09-02');
console.log(myDate);
