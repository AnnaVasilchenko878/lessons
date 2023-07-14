// Создать регулярное выражение, которое будет проверять, является ли строка валидным email адресом. Напишите функцию, которая будет принимать строку и возвращать true, если она является email адресом, и false в противном случае.

function checkEmail(currentEmail) {
    let regEmail = /^([a-z]+|\d+|[!#$%&'*+-/=?^_`{|}~\.]+)@([a-z]{2,63})((\.[a-z]+){2,3})$/;
  console.log(regEmail.test(currentEmail));
}
checkEmail('anna@gmail.com');
