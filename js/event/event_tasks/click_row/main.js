// Добавить функционал, который будет обрабатывать событие клика на ряд элементов на странице и выполнять соответствующее действие.

let list = document.querySelector(`.list`),
listItems = document.querySelectorAll(`.list-item`)

list.addEventListener('click', function(){
  listItems.forEach(function(listItem, index) {
    let delay = index * 200;
    setTimeout(()=>{
      listItem.classList.toggle(`animation`);
    },delay);  
  })
}) 