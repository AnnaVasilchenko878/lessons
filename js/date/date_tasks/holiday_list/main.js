// Создайте функцию, которая будет выводить список всех праздников в заданном году.
  let dateHolidays = {
    'Новый Год' : [1,1],
    'Рождество' : [7,1],
    'Старый новый год': [13,1],
    'Крещение': [19,1],
    'День защитника Отечества': [23,2],
    'Международный женский день': [8,3],
    'День космонавтики': [12,4],
    'День Весны и труда': [1,5],
    'День победы советского народа в ВОВ': [9,5],
    'День защиты детей': [1,6],
    'День России': [12,6],
    'День знаний': [1,9],
    'День учителя': [5,10],
    'День народного единства': [4,11],
    'День информатики': [4,12]
  }

  function calcEasterday(year) {
        let a = year%19,
        b = year%4,
        c = year%7,
        d = (19 * a + 15)%30;
        e = (2 * b + 4 * c + 6 * d + 6)%7;
        f = d + e,
        day = 13;
        month = 4 
        if(f>9) {
          // апрель
          day += f - 9; 
        }
        if(day>30) {
          // май
          day -= 30
          month = 5;
        }
    return [day, month];
  }
  let easterDate = calcEasterday(2020);
  dateHolidays['Пасха'] = easterDate;

  function calcButterWeek(easterArray, year) {
    let date = new Date();
    date.setFullYear(year, easterArray[1]-1, easterArray[0]-55);
    return [date.getDate(), date.getMonth()+1]
  }
  let butterWeek = calcButterWeek(easterDate, 2020);
  dateHolidays['Масленница'] = butterWeek;
  console.log(dateHolidays); 

  function calcBlackFridayDay(year){
    let  day = 30;
    for(let yearCounter = 2013; yearCounter<=year; yearCounter++) {
      if (yearCounter % 4 == 0) {
        day --;
      }
      day--;
      if (day < 24) {
        day = 30;
      }
    }

   if (year >= 2013) return [day, 10]
  }
  let dayBlackFriday = calcBlackFridayDay(2020);
  dateHolidays['Черная пятница'] = dayBlackFriday;
  console.log(dateHolidays);

  // function calcCyberMonday(arrayDate) {
  //   let date = new Date();
  //   date.setFullYear(year,arrayDate[1], arrayDate[0]+3);
  // }
  // let cyberMondayDate = calcCyberMonday(dayBlackFriday);
  //   if (year >= 2013) {
  //     dateHolidays['Черная пятница'] = dayBlackFriday;
  //     dateHolidays['Киберпонедельник'] = cyberMondayDate;
  //    }
