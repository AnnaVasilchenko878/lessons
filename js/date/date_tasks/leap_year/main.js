// Напишите функцию, которая будет принимать дату и определять, является ли год високосным.

function isLeapYear(currentDate) {
  let date = new Date(currentDate),
      currentYear = date.getFullYear();
  if ((currentYear % 400 == 0 && currentYear % 4 == 0) || (currentYear % 4 == 0 && currentYear % 100 !==0)) {
    console.log('Год високосный')
  } else {
    console.log('Год не високосный')
  }
}
isLeapYear('2000-05-06');
isLeapYear('2020-06-05');
isLeapYear('2100-05-09');
