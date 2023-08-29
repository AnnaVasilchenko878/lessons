// Напишите функцию, которая будет выводить текущую дату и время в формате "День-Месяц-Год Часы:Минуты:Секунды

function printDate() {
  let date = new Date(),
  dateString = (date.toLocaleString()).replace(/\./g, '-').replace(',', '');
  console.log(dateString);

}
printDate();