// Напишите функцию, которая будет проверять, находится ли текущий момент времени в указанном временном промежутке.

function checkDateInterval(startDate, endDate, currentDate) {
  let dateStart = new Date(startDate),
      dateEnd = new Date(endDate),
      dateCurrent = new Date(currentDate);
   return dateCurrent>=dateStart && dateCurrent<=dateEnd?'Дата попадает во временной промежуток':'Дата не попадает в нужный промежуток'; 
}
let dateAnswer  = checkDateInterval('2021-05-10', '2022-06-15', '2019-05-10');
console.log(dateAnswer)