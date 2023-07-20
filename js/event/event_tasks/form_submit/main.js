function checkInputs(currentInput) {
  let regNamesInput = /[а-яА-Я]/;
  return regNamesInput.test(currentInput.value);
} 

function checkTel(currentInput) {
  let regTel = /^\d{11}$/;
  return regTel.test(currentInput.value);
}

function checkEmail(currentInput) {
  let regEmail = /^([a-z]+|\d+|[!#$%&'*+-/=?^_`{|}~\.]+)@([a-z]{2,63})((\.[a-z]+){2,3})$/;
  return regEmail.test(currentInput.value);
}

let inputNames = document.querySelector(`.user-name`),
inputLastName = document.querySelector(`.user-last-name`),
inputMiddleName = document.querySelector(`.iser-middle-name`),
inputTel = document.querySelector(`.user-tel`),
inputEmail = document.querySelector(`.user-email`),
form = document.querySelector(`form`),
btnSend = document.querySelector(`.btn-send`),
modal = document.querySelector(`.modal`),
modalBtn = document.querySelector(`.btn-modal`);

if (checkInputs(inputNames) && checkInputs(inputLastName) && checkInputs(inputLastName) && checkInputs(inputMiddleName) && checkTel(inputTel) && checkEmail(inputEmail)) {
  btnSend.addEventListener('click', function () {
  form.classList.add(`hide`);
  form.classList.remove(`show`)
  modal.classList.add(`show`);
  })
}

if(modal.classList.contains(`show`)) {
  modalBtn.addEventListener('click', function(){
    modal.classList.remove(`show`)
    modal.classList.add(`hide`)
  })
}

// TODO: Переделать задание почсле изучения XMLHttpRequestS