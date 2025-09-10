// Метод filter():

// 🔄 Поелементно перебирає оригінальний масив

// 📦 Повертає новий масив (з елементами або порожній)

// ✅ Додає у новий масив ті елементи, які задовольняють умову

// Якщо колбек повертає true, елемент додається

// Якщо колбек повертає false, елемент не додається

// const numbers = [1, 2, 3, 4, 5];

// const res = numbers.filter((item, index, arr) => {
//   return item > 10;
// });
// console.log(res);

const allCars = [
  {
    make: 'Honda',
    model: 'CR-V',
    type: 'suv',
    amount: 14,
    price: 24045,
    onSale: true,
  },
  {
    make: 'Honda',
    model: 'Accord',
    type: 'sedan',
    amount: 2,
    price: 22455,
    onSale: true,
  },
  {
    make: 'Mazda',
    model: 'Mazda 6',
    type: 'sedan',
    amount: 8,
    price: 24195,
    onSale: false,
  },
  {
    make: 'Mazda',
    model: 'CX-9',
    type: 'suv',
    amount: 7,
    price: 31520,
    onSale: true,
  },
  {
    make: 'Toyota',
    model: '4Runner',
    type: 'suv',
    amount: 19,
    price: 34210,
    onSale: false,
  },
  {
    make: 'Toyota',
    model: 'Sequoia',
    type: 'suv',
    amount: 16,
    price: 45560,
    onSale: false,
  },
  {
    make: 'Toyota',
    model: 'Tacoma',
    type: 'truck',
    amount: 4,
    price: 24320,
    onSale: true,
  },
  {
    make: 'Ford',
    model: 'F-150',
    type: 'truck',
    amount: 11,
    price: 27110,
    onSale: true,
  },
  {
    make: 'Ford',
    model: 'Fusion',
    type: 'sedan',
    amount: 13,
    price: 22120,
    onSale: true,
  },
  {
    make: 'Ford',
    model: 'Explorer',
    type: 'suv',
    amount: 6,
    price: 31660,
    onSale: false,
  },
];

// const filterByPrice = (cars, threshold) => {
//   return cars.filter(car => car.price < threshold);
// };

// // console.log(filterByPrice(allCars, 30000));

// **************
// Твоє завдання: написати функцію getCarsWithType,
// яка повертає масив автомобілів з певним

// function getCarsWithType(cars, type) {
//   return cars.filter(car => car.type === type);
// }

// Що робить .find()

// Поелементно перебирає масив (як forEach, map, filter).

// Повертає ПЕРШИЙ елемент, який задовольняє умову в колбек-функції.

// Якщо жоден елемент не підходить — повертає undefined.

// Тут ти хочеш знайти машину за типом кузова.
//  Для цього зручно використати метод .find(), бо він повертає перший знайдений елемент.

// Приклад коду:
// function getCarByType(cars, type) {
//   return cars.find(car => car.type === type);
// }

// // Використання:
// console.log(getCarByType(allCars, "suv"));
// console.log(getCarByType(allCars, "truck"));

// Як це працює:

// .find() проходить по масиву cars.

// Якщо car.type === type → повертає цю машину.

// Якщо жодної не знайде → поверне undefined.

// Метод .every()

// Поелементно перебирає масив.

// Повертає true, якщо усі елементи масиву задовольняють умову.

// Якщо хоча б один елемент не відповідає умові → результат false.

const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54 },
  { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92 },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48 },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71 },
  { id: 'player-5', name: 'Chelsy', timePlayed: 280, points: 48 },
];

// ✅ Отже:

// .every() зручно використовувати для перевірки
// "чи всі" елементи відповідають умові.

// Якщо потрібно перевірити "чи хоча б один" відповідає умові
//  — краще взяти метод .some().

// Метод .some()

// Поелементно перебирає масив.

// Повертає true, якщо хоча б один елемент масиву задовольняє умову.

// Якщо жоден не відповідає → false.

// Приклад з твоїм масивом players
// const players = [
//   { id: "player-1", name: "Mango", timePlayed: 310, points: 54 },
//   { id: "player-2", name: "Poly", timePlayed: 470, points: 92 },
//   { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48 },
//   { id: "player-4", name: "Ajax", timePlayed: 150, points: 71 },
//   { id: "player-5", name: "Chelsy", timePlayed: 280, points: 48 }
// ];

// // Чи є хоч один гравець з 100+ очками?
// const hasTopScorer = players.some(player => player.points >= 100);
// console.log(hasTopScorer); // false

// // Чи є хоч один, хто грав більше ніж 400 годин?
// const hasLongPlayer = players.some(player => player.timePlayed > 400);
// console.log(hasLongPlayer); // true

// ✅ Отже:

// .every() → перевіряє "чи всі" → повертає true тільки якщо всі елементи задовольняють умову.

// .some() → перевіряє "чи хоча б один" → повертає true, якщо хоч один елемент задовольняє умову.

// Метод .reduce()

// Поелементно перебирає масив.

// Накопичує значення у акумуляторі (acc).

// Повертає єдине значення (яке ми самі визначаємо: число, рядок, об’єкт, масив).

// Приклад з твоїм кодом
// const numbers = [1, 10, 15, 20, 25];

// const total = numbers.reduce((acc, number) => acc + number, 0);

// console.log(total); // 71

// ✅ Тут:

// acc (акумулятор) починається з 0.

// Додаємо кожне число з масиву до acc.

// В кінці отримуємо суму 71.

// Чудово 👌 Ти хочеш порахувати загальну зарплату з об’єкта salary.

// Ось як це можна зробити:

// const salary = {
//   mango: 100,
//   poly: 50,
//   ajax: 150,
// };

// // Отримуємо масив значень зарплат
// const values = Object.values(salary);
// console.log(values); // [100, 50, 150]

// // Рахуємо суму через reduce
// const totalSalary = values.reduce((acc, value) => acc + value, 0);

// console.log(totalSalary); // 300

// Пояснення:

// Object.values(salary) → витягує всі значення з об’єкта (буде [100, 50, 150]).

// .reduce((acc, value) => acc + value, 0) → додає всі елементи, починаючи з 0.

// У результаті отримаєш 300. ✅

// О, класний приклад! 👌 Ти хочеш порахувати загальну кількість годин, які всі гравці провели в грі.

// Це ідеальний випадок для .reduce():

// const players = [
//   { id: "player-1", name: "Mango", timePlayed: 310, online: false },
//   { id: "player-2", name: "Poly", timePlayed: 470, online: true },
//   { id: "player-3", name: "Kiwi", timePlayed: 230, online: true },
//   { id: "player-4", name: "Ajax", timePlayed: 150, online: false },
//   { id: "player-5", name: "Chelsey", timePlayed: 80, online: true },
// ];

// // Рахуємо загальний час
// const totalTime = players.reduce((acc, player) => acc + player.timePlayed, 0);

// console.log(totalTime); // 1240

// Пояснення:

// reduce починає з початкового значення 0.

// На кожній ітерації додає player.timePlayed до acc.

// У фіналі маємо суму всіх годин → 1240. ✅

// Клас! 🛒 У тебе кошик cart, де кожен товар має price і quantity.
//  Треба знайти загальну суму покупки.

// Рішення з .reduce()
// const cart = [
//   { label: "Apples", price: 100, quantity: 2 },
//   { label: "Bananas", price: 120, quantity: 3 },
//   { label: "Lemons", price: 70, quantity: 4 },
// ];

// const totalAmount = cart.reduce((acc, item) => {
//   return acc + item.price * item.quantity;
// }, 0);

// console.log(totalAmount); // 850

// Як це працює:

// acc починається з 0.

// На кожному кроці до acc додається price * quantity.

// Apples → 100 * 2 = 200

// Bananas → 120 * 3 = 360

// Lemons → 70 * 4 = 280

// Разом: 200 + 360 + 280 = 850. ✅

// Що таке toSorted()

// Це новий метод у JavaScript (ES2023).

// Працює подібно до .sort(), але не змінює оригінальний масив – повертає новий відсортований.

// За замовчуванням сортує:

// рядки → за Unicode.

// числа → перетворює на рядки і тоді сортує (тому треба писати власну функцію для чисел).

// Приклади використання

// Сортування рядків

// const fruits = ["banana", "apple", "cherry"];
// const sortedFruits = fruits.toSorted();

// console.log(sortedFruits); // ["apple", "banana", "cherry"]
// console.log(fruits);       // ["banana", "apple", "cherry"] (оригінал не змінився)

// // Сортування чисел

// const numbers = [10, 1, 5, 20];
// const sortedNumbers = numbers.toSorted((a, b) => a - b);

// console.log(sortedNumbers); // [1, 5, 10, 20]
// console.log(numbers);       // [10, 1, 5, 20] (оригінал залишився)

// Сортування об’єктів

// const players = [
//   { name: 'Mango', points: 54 },
//   { name: 'Poly', points: 92 },
//   { name: 'Ajax', points: 71 },
// ];

// const sortedPlayers = players.toSorted((a, b) => b.points - a.points);

// console.log(sortedPlayers);
// // [
// //   { name: "Poly", points: 92 },
// //   { name: "Ajax", points: 71 },
// //   { name: "Mango", points: 54 }
// // ]

// ✅ Відмінність:

// .sort() → змінює оригінальний масив.

// .toSorted() → повертає новий масив, а оригінал не чіпає.

// Класний приклад! 👌
// Ти експериментуєш із toSorted() та методом localeCompare() для сортування рядків.

// Код із картинки
// const arr = ["a", "b", "B", "A"];

// console.log(arr.toSorted((a, b) => a.localeCompare(b)));
// console.log(arr.toSorted((lalala, tototo) => tototo.localeCompare(lalala)));

// Як це працює:

// a.localeCompare(b)

// Порівнює рядки за локаллю (алфавітний порядок, враховує великі/малі літери).

// Якщо a < b → повертає -1.

// Якщо a > b → повертає 1.

// Якщо однакові → 0.

// 👉 arr.toSorted((a, b) => a.localeCompare(b)) сортує за зростанням.

// Результат:

// [ "a", "A", "b", "B" ] // залежить від локалі

// tototo.localeCompare(lalala)

// Це просто інші назви параметрів (можна писати будь-які слова замість a і b).

// Тут навпаки: спочатку порівнюємо tototo з lalala.

// Тобто сортування відбувається у зворотному порядку (спаданням).

// 👉 arr.toSorted((lalala, tototo) => tototo.localeCompare(lalala)) → сортує від Z до A.

// Висновок

// a.localeCompare(b) → сортує за алфавітом (вгору).

// b.localeCompare(a) → сортує за алфавітом у зворотному напрямку (вниз).

// Імена змінних (a, b чи lalala, tototo) неважливі, головне — порядок, як їх порівнюєш. ✅

// Що таке "ланцюжки методів"

// Це коли ми викликаємо кілька методів масиву один за одним.

// Кожен метод повертає новий масив або значення, і результат передається далі.

// Це робить код компактним та зрозумілим.

// Приклад 1. Фільтрування + сортування

// const numbers = [5, 10, 2, 8, 3, 20];

// const result = numbers
//   .filter(num => num > 5)      // залишаємо тільки > 5
//   .map(num => num * 2)         // множимо кожне на 2
//   .toSorted((a, b) => a - b);  // сортуємо за зростанням

// console.log(result); // [16, 20, 40]

// Приклад 2. Ланцюжок з об’єктами
// const players = [
//   { name: "Mango", points: 54 },
//   { name: "Poly", points: 92 },
//   { name: "Ajax", points: 71 },
//   { name: "Kiwi", points: 48 },
// ];

// const topPlayers = players
//   .filter(player => player.points > 50)           // беремо тих, хто має більше 50 очок
//   .map(player => player.name)                     // дістаємо тільки імена
//   .toSorted((a, b) => a.localeCompare(b));        // сортуємо по алфавіту

// console.log(topPlayers); // ["Ajax", "Mango", "Poly"]

// ✅ Переваги ланцюжків:

// Код коротший.

// Не треба створювати проміжні змінні.

// Читається, як “потік даних”: відфільтруй → оброби → відсортуй.

// Завдання: написати функцію getModelsOnSale, яка повертає масив моделей авто, що зараз на розпродажі.

// Але в масиві allCars у тебе поки немає поля, яке вказує на розпродаж (onSale: true/false). Давай додамо його, щоб можна було перевіряти.

// Приклад з доданим onSale
// const allCars = [
//   { make: "Honda", model: "CR-V", type: "suv", amount: 14, price: 24000, onSale: true },
//   { make: "Honda", model: "Accord", type: "sedan", amount: 2, price: 28000, onSale: false },
//   { make: "Mazda", model: "Mazda 6", type: "sedan", amount: 8, price: 26000, onSale: true },
//   { make: "Mazda", model: "CX-9", type: "suv", amount: 7, price: 31500, onSale: false },
//   { make: "Toyota", model: "4Runner", type: "suv", amount: 19, price: 35000, onSale: true },
//   { make: "Toyota", model: "Sequoia", type: "suv", amount: 16, price: 47000, onSale: false },
//   { make: "Toyota", model: "Tacoma", type: "truck", amount: 4, price: 40000, onSale: true },
//   { make: "Ford", model: "F-150", type: "truck", amount: 11, price: 29000, onSale: false },
//   { make: "Ford", model: "Fusion", type: "sedan", amount: 13, price: 27000, onSale: true },
//   { make: "Ford", model: "Explorer", type: "suv", amount: 6, price: 33000, onSale: false }
// ];

// Функція getModelsOnSale
// function getModelsOnSale(cars) {
//   return cars
//     .filter(car => car.onSale)   // залишаємо тільки ті, що onSale === true
//     .map(car => car.model);      // беремо тільки моделі
// }

// // Використання:
// console.log(getModelsOnSale(allCars));
// // ["CR-V", "Mazda 6", "4Runner", "Tacoma", "Fusion"]

// ✅ Логіка:

// filter() → залишає лише ті авто, які мають onSale: true.

// map() → перетворює їх на список моделей.

// Завдання: зробити функцію getSortedCarsOnSale, яка повертає масив авто з onSale: true, відсортованих за зростанням ціни.

// Рішення'
// function getSortedCarsOnSale(cars) {'
//   return cars
//     .filter(car => car.onSale)                // беремо тільки ті, що на розпродажі
//     .toSorted((a, b) => a.price - b.price);   // сортуємо за зростанням ціни
// }

// // Використання:
// console.log(getSortedCarsOnSale(allCars));

// Як працює:

// .filter(car => car.onSale) → залишаємо лише авто з розпродажу.

// .toSorted((a, b) => a.price - b.price) → сортуємо копію масиву за ціною (від меншої до більшої).

// Використовуємо toSorted(), щоб оригінальний масив не змінювався.

// ✅ У результаті отримаєш список повних об’єктів авто, відсортованих за ціною.

// О, класний масив вийшов 🍎🍊🍌🍋

// Ти створив:

// const arr = ["apple,🍎", "orange,🍊", "banana,🍌", "lemon,🍋"];

// Якщо ти хочеш відсортувати ці рядки
// const sortedArr = arr.toSorted((a, b) => a.localeCompare(b));

// console.log(sortedArr);
// // ["apple,🍎", "banana,🍌", "lemon,🍋", "orange,🍊"]

// Якщо треба витягти тільки назви фруктів (без emoji)
// const fruitNames = arr.map(item => item.split(",")[0]);

// console.log(fruitNames);
// // ["apple", "orange", "banana", "lemon"]

// Якщо треба тільки emoji
// const fruitEmojis = arr.map(item => item.split(",")[1]);

// console.log(fruitEmojis);
// // ["🍎", "🍊", "🍌", "🍋"]

// 🔥 Дуже гарна ідея! Ти робиш перетворення масиву фруктів у об’єкт за допомогою .reduce().

// Ось як твій код виглядає в повному вигляді:

// const arr = ["apple,🍎", "orange,🍊", "banana,🍌", "lemon,🍋"];

// const obj = arr.reduce((acc, item) => {
//   const itemArr = item.split(","); // ["apple", "🍎"]

//   const key = itemArr[0];
//   const value = itemArr[1];

//   acc[key] = value; // додаємо ключ-значення у об’єкт
//   return acc;       // важливо повернути акумулятор!
// }, {}); // початкове значення — порожній об’єкт

// console.log(obj);
// // {
// //   apple: "🍎",
// //   orange: "🍊",
// //   banana: "🍌",
// //   lemon: "🍋"
// // }

// Що тут відбувається:

// .reduce() перебирає кожен елемент масиву.

// item.split(",") ділить рядок на [назву, emoji].

// acc[key] = value додає нову пару у об’єкт.

// Початкове значення {} робить акумулятор об’єктом.

// ✅ В результаті ти отримуєш об’єкт, де ключі — назви фруктів, а значення — emoji.

// const products = [
//   { name: 'Apple', category: 'fruits', price: 1.2, stock: 50 },
//   { name: 'Banana', category: 'fruits', price: 0.8, stock: 100 },
//   { name: 'Carrot', category: 'vegetables', price: 0.5, stock: 200 },
//   { name: 'Broccoli', category: 'vegetables', price: 1.0, stock: 150 },
//   { name: 'Milk', category: 'dairy', price: 1.5, stock: 20 },
//   { name: 'Cheese', category: 'dairy', price: 2.5, stock: 5 },
//   { name: 'Chicken', category: 'meat', price: 5.0, stock: 30 },
//   { name: 'Beef', category: 'meat', price: 7.0, stock: 25 },
// ];

// function areAllDairyStockAboveTen(products) {

//   products.reduce()

//   return products
//     .filter(product => product.category === 'dairy')
//     .every(product => product.stock > 10);
// }

// console.log(areAllDairyStockAboveTen(products));

// const arr = [2, 4, 6];
// const result = arr.filter(el => el + 2);
// console.log(result);

// const students = [
//   { name: "Mango", courses: ["mathematics", "physics"] },
//   { name: "Poly", courses: ["science", "mathematics"] },
//   { name: "Kiwi", courses: ["physics", "biology"] },
// ];

// const mappedCourses = students.map(student => student.courses);
// console.log(mappedCourses) // [["mathematics", "physics"], ["science", "mathematics"], ["physics", "biology"]]

// const flattenedCourses = students.flatMap(student => student.courses);
// console.log(flattenedCourses) // ["mathematics", "physics", "science", "mathematics", "physics", "biology"];

// const getUserNames = users => {
//   return users.map(users => users.name);
// };

// const getUserEmail = users => {
//   return users.map(users => users.email);
// };

// console.log(
//   getUserNames([
//     {
//       name: 'Moore Hensley',
//       email: 'moorehensley@indexia.com',
//       balance: 2811,
//     },
//     {
//       name: 'Sharlene Bush',
//       email: 'sharlenebush@tubesys.com',
//       balance: 3821,
//     },
//     {
//       name: 'Ross Vazquez',
//       email: 'rossvazquez@xinware.com',
//       balance: 3793,
//     },
//     {
//       name: 'Elma Head',
//       email: 'elmahead@omatom.com',
//       balance: 2278,
//     },
//     {
//       name: 'Carey Barr',
//       email: 'careybarr@nurali.com',
//       balance: 3951,
//     },
//     {
//       name: 'Blackburn Dotson',
//       email: 'blackburndotson@furnigeer.com',
//       balance: 1498,
//     },
//     {
//       name: 'Sheree Anthony',
//       email: 'shereeanthony@kog.com',
//       balance: 2764,
//     },
//   ])
// ); // ["Moore Hensley", "Sharlene Bush", "Ross Vazquez", "Elma Head", "Carey Barr", "Blackburn Dotson", "Sheree Anthony"]
