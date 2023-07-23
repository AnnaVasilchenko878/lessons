// Разработать обработчик события, который будет запускаться при прокручивании страницы и добавлять анимацию к элементам при их появлении на экране.

// получаем псевдомассив первой галереи
let gallery = document.querySelectorAll('.gallery-list')[0],
  gallerySecond = document.querySelectorAll('.gallery-list')[1];

// вешаем обработчик скролл на сам документ
document.addEventListener('scroll', function () {
  // присваиваем переменной offset количество пикселей на которое прокручена страница по вертикали
  let offset = window.scrollY;
  // сеняем стиль псведомассива сдвиг по горизонтали на отрицательное количество прокрученых пикселей
  gallery.style.transform = `translateX(-${offset}px)`;
  gallerySecond.style.transform = `translateX(${offset}px)`;
});
