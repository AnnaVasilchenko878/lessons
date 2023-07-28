//  Написать обработчик событий для работы с формой ввода: проверка введенных данных на соответствие требованиям, форматирование введенной информации, отправка данных на сервер и отображение результата в интерфейсе.

// при клике на input поднимается label
let labelInputs = document.querySelectorAll(`label`),
inputs = document.querySelectorAll(`input`);


inputs.forEach(function (input, index) {
  input.addEventListener('input', function () {
    labelInputs[index].classList.add(`label-hover`);
  })
})

// валидация формы библиотекой ApproveJS
let userName = document.querySelector(`#user-name`),
    userEmail = document.querySelector(`#user-email`),
    userPassword = document.querySelector(`#user-password`);
    button = document.querySelector('button');

const rulesName = {
  required: true,
  alpha: true
}

const rulesEmail = {
  required: true,
  email: true
};
const rulesPassword = {
  alphaNumeric: true,
  required: true,
  min: 6
} 

let form = document.querySelector(`.form`),
    modal = document.querySelector(`.modal`),
    userNameOuput = document.querySelector(`.user-name-output`),
    userEmailOutput = document.querySelector(`.user-email-output`),
    userPasswordOutput = document.querySelector(`.user-password-output`);

button.addEventListener('submit', function(event){
  event.preventDefault();
  // Добавить функционал после изучения ajax
  let userNameResult = approve.value(userName.value, rulesName),
  userEmailResult = approve.value(userEmail.value, rulesEmail),
  userPasswordResult = approve.value(rulesPassword.value, rulesPassword);
  if (userNameResult && userEmailResult && userPasswordResult) {
  form.classList.add(`hide`);
  modal.classList.add(`show`);
  userNameOuput.textContent = userName.value;
  userEmailOutput.textContent = userEmail.value;
  userPasswordOutput.textContent = userPassword.value;
  }
})

