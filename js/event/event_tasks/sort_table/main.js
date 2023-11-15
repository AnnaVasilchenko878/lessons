/* Сделать таблицу сортируемой: при клике на элемент < th > строки таблицы должны сортироваться по соответствующему столбцу.
- каждый элемент <th> имеет атрибут data-type:
- первый столбец содержит числа, а второй – строки, функция сортировки должна это учитывать, ведь числа сортируются иначе, чем строки.
- сортировка должна поддерживать только типы "string" и "number".*/

document.addEventListener('DOMContentLoaded', function(){
  let peopleTable = document.querySelector('.people-table');
  peopleTable.addEventListener('click', function(event){
    let tableType = event.target;
    if(!tableType) return;
    sortColumn(tableType.cellIndex, tableType.dataset.type)
  })

  function sortColumn(colNum, type) {
    let tableBody = document.querySelector('tbody');
    let rows = Array.from(tableBody.rows);
    let compare;

    switch(type) {
      case 'number': {
        compare = function(rowA, rowB) {
          return rowA.cells[colNum].innerHTML - rowB.cells[colNum].innerHTML
        }
      }
      break;
      case 'string': {
        compare = function(rowA, rowB) {
          return rowA.cells[colNum].innerHTML>rowB.cells[colNum].innerHTML?1:-1
        }
      }
      break;
    }
    rows.sort(compare);
    tableBody.append(...rows)
  }
})

