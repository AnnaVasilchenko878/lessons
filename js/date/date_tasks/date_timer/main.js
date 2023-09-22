// Создайте функцию, которая будет определять, сколько дней осталось до заданной даты.

function calcDay(date) {
  let today = new Date();
  let curentDate = new Date(date);
  if(curentDate>today) {
    let days = Math.floor(((((curentDate - today)/1000)/60)/60)/24)+1;
    console.log(`До нужной даты осталось ${days} дней(дня)`)
    } else {
      console.log(`Выбранная дата меньше или равна текущей`);
    }
}
calcDay('2023-09-24'); 