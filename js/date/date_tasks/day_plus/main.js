//  Создайте функцию, которая будет добавлять указанное количество дней к заданной дате и возвращать новую дату.

function plusDay(currentDate, currentDay) {
  let date = new Date(currentDate);
  date.setDate(date.getDate() + currentDay);
  return date
}
let newDate = plusDay('2023-05-06', 5);
console.log(newDate)