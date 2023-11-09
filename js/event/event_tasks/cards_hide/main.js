document.addEventListener('DOMContentLoaded', function(){
  document.addEventListener('click', function(event){
    let id = event.target.dataset.card;
    if(!id) return;
    let cardItem = document.querySelector(`#${id}`);
    cardItem.style.display = 'none';
  })
})