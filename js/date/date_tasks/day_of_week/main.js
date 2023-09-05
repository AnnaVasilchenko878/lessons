// Напишите функцию, которая будет проверять, является ли заданная дата выходным днем(субботой или воскресеньем).

function isWeekend(currentDate) {
  let date = new Date(currentDate);
  date.getDay() == 0 || date.getDay() == 6?console.log('Это выходной день'):console.log('Будний день')
}
isWeekend('2023-09-02');
isWeekend('2023-09-05');
