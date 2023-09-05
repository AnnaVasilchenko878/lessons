// Создайте функцию, которая будет определять, является ли заданная дата прошедшей, текущей или будущей.

function checkDate(currentDate) {
  let date = new Date(currentDate);
  let today = new Date();

  // переводим в строку и сравниваем символы
  if (date.toDateString() === today.toDateString()) {
    console.log("Введенная дата является текущей");
    // переводится в миллисекунды с unix
  } else if (date < today) {
    console.log("Дата меньше текущей");
  } else {
    console.log("Дата больше текущей");
  }
}
checkDate('2023-09-03');
checkDate('2023-09-05');
checkDate('2023-10-05');
