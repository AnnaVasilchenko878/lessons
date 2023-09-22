// Создайте функцию, которая будет выводить список всех праздников в заданном году.

// создать объект ключ празник а значение массив
// ветвелиние и добаить в объект празники с плавающей датой 
// создать объект с наследниками ключи названия празников - значения экземпляры класса date c параметрами из массива 0-день 1 месяц


// объект с основными датами

  let dateHolidays = {
    'Новый Год' : [1,0],
    'Рождество' : [7,0],
    'Старый новый год': [13,0],
    'Крещение': [19,0],
    'Неделя масленницы': [],
    'День защитника Отечества': [23,1],
    'Международный женский день': [8,2],
    'День космонавтики': [12,3],
    'День Весны и труда': [1,4],
    'День победы советского народа в ВОВ': [9,4],
    'День защиты детей': [1,5],
    'День России': [12,5],
    'День знаний': [1,8],
    'День учителя': [5,9],
    'День народного единства': [4,10],
    'День информатики': [4,11]
  }

// расчет всех праздников и добавление их в соответсвии с годом
function calcHolidays(year) {
  function calcEasterday() {
        let easterDate = [],
        a = year%19,
        b = year%4,
        c = year%7,
        d = (19 * a + 15)%30;
        e = (2 * b + 4 * c + 6 * d + 6)%7;
        f = d + e,
        day = 13;
        if(f>9) {
          // апрель
          day += f - 9; 
          easterDate.push(day, 4)
        }
        if(day>30) {
          // май
          day -= 30
          easterDate[0] = day;
          easterDate[1] = 5
        }
    return easterDate;
  }
  let easterDate = calcEasterday();
  dateHolidays['Пасха'] = easterDate;

  function calcButterWeek(easterArray) {
    let date = new Date();
    date.setFullYear(year, easterArray[1]-1, easterArray[0]-55);
    return date
  }
  let butterWeek = calcButterWeek(easterDate);
  dateHolidays['Масленница'] = butterWeek; 

  function calcBlackFridayDay(){
    let  day = 30,
        dateArray = [10];
    for(let yearCounter = 2013; yearCounter<=year; yearCounter++) {
      if (yearCounter % 4 == 0) {
        day --;
      }
      day--;
      if (day < 24) {
        day = 30;
      }
      if (yearCounter == year) {
        dateArray.unshift(day);
      }
    }
    return dateArray;
  }
  let dayBlackFriday = calcBlackFridayDay();

  function calcCyberMonday(arrayDate) {
    let date = new Date();
    date.setFullYear(year,arrayDate[1], arrayDate[0]+3);
  }
  let cyberMondayDate = calcCyberMonday(dayBlackFriday);
    if (year >= 2013) {
      dateHolidays['Черная пятница'] = dayBlackFriday;
      dateHolidays['Киберпонедельник'] = dayBlackFriday
     }
}
calcHolidays(2021);

console.log(dateHolidays);