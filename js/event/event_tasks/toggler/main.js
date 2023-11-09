document.addEventListener('DOMContentLoaded',function(){
  document.addEventListener('click', function (event) {
    let id = event.target.dataset.toggleId;
    console.log(id)
    if (!id) return;
    let elem = document.querySelector(`#${id}`);
    elem.hidden = !elem.hidden;
    console.log(elem);
  })
})


