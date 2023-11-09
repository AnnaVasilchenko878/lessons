// всплытие события
// let parentBlock = document.querySelector('.parent-block'),
//     childBlock = document.querySelector('.child-block'),
//     btn = document.querySelector('.btn');

// parentBlock.addEventListener('click', function(event) {
  // показать цель
  //let target = event.target;

  //показать тег цели
  // let target = event.target.tagName; 

//   console.log(target);
// })

// показать родителя
btn.addEventListener('click', function(event){
  let target = event.target.closest('div')
  console.log(target);
})

