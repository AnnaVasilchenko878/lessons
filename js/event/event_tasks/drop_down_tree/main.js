document.addEventListener('DOMContentLoaded', function(){
  // document.addEventListener('click', function(event){
  //   let targetId = event.target.dataset.toggleId;
  //   if(!targetId) return;
  //   let elem = document.querySelector(`#${targetId}`);
  //   elem.hidden = !elem.hidden;
  // })

// Работа над ошибками 
// - чтобы не оборачивать каждый текстовый узел в html тег можно его добавить через JS
  let mainList = document.querySelector('.main-list');
  for(let li of mainList.querySelectorAll('li')) {
    let span = document.createElement('span');
    // добавляем span в li перед текстом
    li.prepend(span);
    // добавлем текст в span
    span.append(span.nextSibling)
    }

  mainList.addEventListener('click', function(event){
    if(event.target.tagName !== 'SPAN') return;
    // получаем первого потомка ul цели 
    let childrenContainer = event.target.parentNode.querySelector('ul');
    if(!childrenContainer) return
    childrenContainer.hidden = !childrenContainer.hidden;
  })

})

