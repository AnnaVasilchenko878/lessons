// Напишите функцию, которая будет принимать две даты и выводить разницу между ними в днях, часах и минутах.

function calcDay(firstDate, secondDate) {
  let first = new Date(firstDate),
      second = new Date(secondDate),
      hours = second.getHours() - first.getHours(),
      days = second.getDate() - first.getDate();
  if (second.getHours() < first.getHours()) {
    days--;
    hours = 24 - second.getHours();
  }
    let minutes = second.getMinutes() - first.getMinutes();
  if (second.getMinutes() < first.getMinutes()) {
      hours--;
      minutes = 60 - second.getMinutes();
  }
  console.log(`Разница между датами составляет ${days} дня(дней), ${hours} часов, ${minutes} минут`);
}
calcDay('2003-05-12T10:00', '2003-05-15T07:24');