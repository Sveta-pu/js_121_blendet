// / Запропонуйте користувачу ввести число за допомогою prompt().
// // Збережіть введене значення у змінну number.
// Перевірте, чи дорівнює змінна number числу 10:
//    Якщо так – виведіть повідомлення 'Вірно' у alert().
//    Якщо ні – виведіть 'Невірно'.

// Підказка: prompt завжди повертає рядок (String), тому перед перевіркою
// // перетворіть значення на число за допомогою Number().
// const number = prompt('Введіть число');
// if (Number(number) === 10) {
//   alert('Вірно');
// } else {
//   alert('Невірно');
// }

// У змінній min лежить випадкове число від 0 до 59.
// Визначте, в яку чверть години потрапляє
// це число (у першу, другу, третю чи четверту).
// Виведіть в alert відповідне повідомлення, наприклад:
// "10 входить в першу чверть"

// const min = Math.floor(Math.random() * (59 - 0) + 0);
// if (min <= 15) {
//   alert(`${min} входить в першу чверть`);
// } else if (min <= 30) {
//   alert(`${min} входить в другу чверть`);
// } else if (min <= 45) {
//   alert(`${min} входить в третю чверть`);
// } else {
//   alert(`${min} входить в четверту чверть`);
// }

// console.log(min);
//  else{
//     alert (`${min} входить в четверту чверть`);
// }

// Отримуйте від користувача число (кількість хвилин) через prompt
// і виводьте у консоль рядок у форматі годин та хвилин.
// Приклад: користувач вводить в prompt '70' -> в консолі відобразиться '01:10'.
// Корисне посилання для відображення годин та хвилин у потрібному форматі ('01' замість '1'):
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart#examples

// const num = Number(prompt('Введіть кількість секунд:'));
// const hours = Math.floor(num / 60);
// const minutes = Math.floor((num % 60) / 60);
// const seconds = num % 60;

// const changeHours = String(hours).padStart(2, '0');
// const changeMinutes = String(minutes).padStart(2, '0');
// const changeSeconds = String(seconds).padStart(2, '0');

// console.log(`${changeHours}:${changeMinutes}:${changeSeconds}`);

// const num = 507;
// const hrivna = Math.floor(num / 100);
// const cent = num % 100;
// const changeHrivna = String(hrivna).padStart(2, '0');
// const chengeCent = String(cent).padStart(2, '0');
// console.log(`${changeHrivna}грн ${chengeCent} коп`);

// / Напишіть код, який запитуватиме у користувача
// логін за допомогою prompt і виводить результат в консоль браузера

// Після цього додайте перевірку введеного користувачем значення:
// Якщо відвідувач вводить "Адмін",
// то prompt запитує пароль (не забудьте зберігти його у змінну для подальшої перевірки).
// Якщо нічого не ввели або натиснули Cancel,
// Вивести в alert строку "Скасовано"
// В іншому випадку вивести в alert рядок "Я вас не знаю"

// Пароль перевіряти так:
// Якщо введено пароль "Я головний",
// то вивести в alert рядок "Добрий день!",
// в іншому випадку вивести в alert рядок "Невірний пароль!"

// const login = prompt('Введіть логін');

// if (login === null || login === '') {
//   alert('Скасовано');
// } else if (login.toLowerCase() === 'адмін') {
//   const password = prompt('Введіть пароль');

//   if (password && password.toLowerCase() === 'я головний') {
//     alert('Добрий день!');
//   } else {
//     alert('Невірний пароль!');
//   }
// } else {
//   alert('Я вас не знаю');
// }

// Використайте цикл while, щоб вивести в console всі числа від 0 до 20 включно.
