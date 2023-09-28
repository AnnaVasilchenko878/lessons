// Напишите функцию, которая будет принимать две даты и выводить разницу между ними в днях, часах и минутах.

function calcDay(firstDate, secondDate) {
  let first = new Date(firstDate),
    second = new Date(secondDate),
    hours = second.getHours() - first.getHours(),
    days = second.getDate() - first.getDate();
    console.log(second.getHours())
    console.log(first.getHours())
  if (second.getHours() < first.getHours()) {
    days--;
    hours = 24 - first.getHours() + second.getHours();
    console.log(hours);
  }
  let minutes = second.getMinutes() - first.getMinutes();
  if (second.getMinutes() < first.getMinutes()) {
    hours--;
    minutes = 60 - first.getMinutes() + second.getMinutes();
  }
  return `Разница между датами составляет ${days} дня(дней), ${hours} часов, ${minutes} минут`;
}

let difference = calcDay('2003-05-12T10:00', '2003-05-15T05:24');
console.log(difference);