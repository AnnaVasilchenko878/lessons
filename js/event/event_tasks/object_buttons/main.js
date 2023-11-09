class Menu {
  constructor(elem){
    elem.addEventListener('click', (event) =>{
      let action = event.target.dataset.action;
      if(action) {
        this[action]()
      }
    })
  }
  save() {
    console.log('Идет сохранение');
  }
  load() {
    console.log('Идет загрузка');
  }
  search() {
    console.log('Идет поиск');
  }
}

let menu = document.querySelector('.menu');
new Menu(menu);