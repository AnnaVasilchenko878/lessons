// Создать форму поиска с автодополнением, используя обработчики событий на поле ввода и список предложенных вариантов.

let productItems = document.querySelectorAll('.product-item');
    // массив в который записываются заголовки и элементы списка
    tempArray = [];

    // получение текста в массив
productItems.forEach(function(productItem){
    tempArray.push(productItem.innerText);
});

// создание многомерного массива без символа \n
tempArray = tempArray.map(item => item.split('\n'));
// преобразование в одномерный массив
let searchArray = tempArray.flat();

let searchInput = document.querySelector('.input-search');
// получение value и вывод 


searchInput.addEventListener('input', function(){
    let searchInputValue = searchInput.value,
        searchValueList = document.querySelector('.search-value'),
        variantArray = [];
        searchValueList.innerHTML ='';
    if(searchInputValue) {
        function filterArray(array, inputValue) {
            array.forEach(function(item){
                if(item.includes(inputValue)) {
                    variantArray.push(item);
                }
            })
            return variantArray
        } 
        let filteredArray = filterArray(searchArray, searchInputValue);
        console.log(filteredArray);

        function printVariant(array){
            for(let i=0; i<array.length; i++) {
                searchValueList.classList.add('show');
                let filteredItem = document.createElement('li');
                filteredItem.textContent = array[i];
                filteredItem.classList.add('search-value-item');
                searchValueList.appendChild(filteredItem);
            }
        }
        printVariant(filteredArray);

    } else {

       console.log('Отмена символа')
}
});
