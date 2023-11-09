let counterContainer = document.querySelector('.counter-container');

counterContainer.addEventListener('click',function(event){
  if(event.target.dataset.counter !=undefined) {
    event.target.value++;
  }
})