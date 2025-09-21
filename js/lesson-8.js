// const parent = document.querySelector('#parent');

// parent.addEventListener('click', event => {
//   console.log('event.target: ', event.target);
//   console.log('event.currentTarget: ', event.currentTarget);
// });
// const parent = document.querySelector('#parent');
// const child = document.querySelector('#child');
// const descendant = document.querySelector('#descendant');

// parent.addEventListener('click', () => {
//   alert(
//     'Parent click handler. This alert will not appear when clicking on Descendant, the event will not reach here!'
//   );
// });

// child.addEventListener('click', () => {
//   alert(
//     'Child click handler. This alert will not appear when clicking on Descendant, the event will not reach here!'
//   );
// });

// descendant.addEventListener('click', event => {
//   event.stopPropagation();
//   alert('Descendant click handler');
// });

// // Ми отримали посилання на контейнер div.box.
// const box = document.querySelector('div.box');

// // Додали до нього один обробник кліку:
// box.addEventListener('click', function (event) {
//   console.log(event.target);  //Елемент, по якому клікнули
// });

// const box = document.querySelector('.box');

// box.addEventListener('click', function (event) {
//   // Перевіряємо, чи клік був саме по кнопці
//   if (event.target.tagName === 'BUTTON') {
//     console.log('Ви натиснули:', event.target.textContent);
//   } else {
//     console.log('Клік був по контейнеру .box, не по кнопці');
//   }
// });

// Шукаємо елемент <div class="color-palette"> у HTML —
// це контейнер, в який ми додамо 60 кнопок-кольорів
const colorPalette = document.querySelector('.color-palette');

// Шукаємо елемент <p class="output"> у HTML —
// тут будемо показувати, який колір вибрано
const output = document.querySelector('.output');

// Вішаємо слухач події "click" на контейнер .color-palette
// ❗ Тут і відбувається делегування: слухач тільки один, але відловлює кліки по будь-якій кнопці всередині
colorPalette.addEventListener('click', selectColor);

// Функція-обробник кліку
function selectColor(event) {
  // Перевіряємо: якщо клік був НЕ по кнопці, виходимо з функції
  // (наприклад, користувач клікнув у порожнє місце контейнера)
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }

  // Отримуємо значення кольору з data-атрибута кнопки, по якій клікнули
  const selectedColor = event.target.dataset.color;

  // Виводимо текст у .output із назвою вибраного кольору
  output.textContent = `Selected color: ${selectedColor}`;

  // Змінюємо сам колір тексту на вибраний
  output.style.color = selectedColor;
}

// Викликаємо допоміжну функцію, щоб створити кнопки-кольори
createPaletteItems();

function createPaletteItems() {
  const items = []; // масив для збереження всіх кнопок
  for (let i = 0; i < 60; i++) {
    // цикл на 60 разів
    const color = getRandomHexColor(); // генеруємо випадковий колір
    const item = document.createElement('button'); // створюємо кнопку
    item.type = 'button'; // задаємо тип кнопки
    item.dataset.color = color; // записуємо колір у data-атрибут (data-color="...")
    item.style.backgroundColor = color; // робимо фон кнопки цим кольором
    item.classList.add('item'); // додаємо клас .item (може бути для стилів)
    items.push(item); // зберігаємо кнопку в масив
  }
  // Додаємо всі створені кнопки в контейнер .color-palette одним махом
  colorPalette.append(...items);
}

// Функція, яка генерує випадковий колір у форматі HEX (наприклад, "#A1B2C3")
function getRandomHexColor() {
  const letters = '0123456789ABCDEF'; // доступні символи для HEX кольору
  let color = '#';

  for (let i = 0; i < 6; i++) {
    // треба 6 символів після "#"
    // додаємо випадковий символ із рядка letters
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color; // повертаємо готовий HEX-код кольору
}

// БІБЛІОТЕКА
console.log(_); // весь об’єкт Lodash

console.log(_.sum([4, 2, 8, 6])); // 20
console.log(_.sum([5, 10])); // 15

console.log(_.shuffle([1, 2, 3, 4])); // [3, 1, 4, 2] (порядок випадковий)
