// Напишите функцию, которая будет проверять, находится ли текущий момент времени в указанном временном промежутке.

function checkDateInterval(startDate, endDate, currentDate) {
  let dateStart = new Date(startDate),
      dateEnd = new Date(endDate),
      dateCurrent = new Date(currentDate);
  (dateCurrent>=dateStart && dateCurrent<=dateEnd)?console.log(`Дата попадает во временной промежуток`):console.log(`Дата не попадает в нужный промежуток`) 
}
checkDateInterval('2021-05-10', '2022-06-15', '2019-05-10');