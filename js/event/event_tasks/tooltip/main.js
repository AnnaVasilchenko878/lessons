/*Напишите JS-код, реализующий поведение «подсказка».

При наведении мыши на элемент с атрибутом data-tooltip, над ним должна показываться подсказка и скрываться при переходе на другой элемент.

В этой задаче мы полагаем, что во всех элементах с атрибутом data - tooltip– только текст.То есть, в них нет вложенных тегов(пока).

Детали оформления:

Отступ от подсказки до элемента с data - tooltip должен быть 5 px по высоте.
Подсказка должна быть, по возможности, посередине элемента.
Подсказка не должна вылезать за границы экрана, в том числе если страница частично прокручена, если нельзя показать сверху– показывать снизу элемента.
Текст подсказки брать из значения атрибута data - tooltip.Это может быть произвольный HTML.
Для решения вам понадобятся два события:

  mouseover срабатывает, когда указатель мыши заходит на элемент.
mouseout срабатывает, когда указатель мыши уходит с элемента.
Примените делегирование событий: установите оба обработчика на элемент document, чтобы отслеживать« заход» и« уход» курсора на элементы с атрибутом data - tooltip и управлять подсказками с их же помощью.

После реализации поведения– люди, даже не знакомые с JavaScript смогут добавлять подсказки к элементам.

P.S.В один момент может быть показана только одна подсказка.

*/

document.addEventListener('DOMContentLoaded', function(){
  document.addEventListener('click',function(event) {
    let target = event.target;
    if(!target.hasAttribute('data-tooltip')) return;
    creatTooltip(target);
  })

  function creatTooltip(target) {
    let tooltipText = target.dataset.tooltip;
    let tooltipWrapper = document.createElement('span');
        tooltipWrapper.textContent = tooltipText;
        tooltipWrapper.classList.add('tooltip');
        target.insertAdjacentElement('beforebegin', tooltipWrapper);
    if(window.pageYOffset <20) {
      tooltipWrapper.style.top = 25 + 'px';
    }
  }
})

