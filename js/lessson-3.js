// Функція makePizza повертає рядок з повідомленням клієнту.

// Доповни код таким чином, щоб у змінній result був результат виконання функції makePizza,
// а у змінній pointer було посилання на функцію makePizza.

// function makePizza() {
//   return 'Your pizza is being prepared, please wait.';
// }

// const result = makePizza();
// const pointer = makePizza;

// console.log(result);
// console.log(pointer);
// console.log(pointer());

// Колбек-функції

// function greet(name) {
//   console.log(`Welcome ${name}!`);
// }

// function notify(name) {
//   console.log(`Dear ${name}, your room will be ready in 30 minutes`);
// }

// console.log(greet('Saha'));
// console.log(notify('Sveta'));

// **************************
// Функція makeMessage приймає один параметр ім'я
// піци, що доставляється, pizzaName та повертає рядок з повідомленням клієнту.

// Доповни функцію makeMessage таким чином,
// щоб вона очікувала другим параметром (параметр callback)
// колбек-функцію і повертала результат її виклику.
//  Функції deliverPizza або makePizza будуть передаватися
//   як колбек для makeMessage і очікувати аргументом
//    ім'я готової піци, що доставляється.

// function deliverPizza(pizzaName) {
//   return `Delivering pizza ${pizzaName}.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// function makeMessage(pizzaName, callback) {
//   // викликаємо колбек і передаємо йому pizzaName
//   return callback(pizzaName);
// }

// // Приклади викликів
// console.log(makeMessage('Royal Grand', makePizza));
// // "Pizza Royal Grand is being prepared, please wait..."

// console.log(makeMessage('Ultracheese', deliverPizza));
// // "Delivering pizza Ultracheese."

// ************************
// Інлайн-колбеки

// Функція makePizza має два параметри:
//  pizzaName - ім'я піци та callback - колбек-функцію.
//  Під час виконання, makePizza викликає цей колбек,
//  передаючи йому pizzaName як аргумент.

// Доповни другий виклик функції makePizza(pizzaName, callback),
//  передавши другим аргументом інлайн колбек-функцію eatPizza(pizzaName).
//   Колбек eatPizza логує рядок "Eating pizza <назва піци>",
//    де <назва піци> це значення параметра pizzaName.

// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza('Royal Grand', function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}`);
// });

// makePizza('Ultracheese');

// Урок онлайн розглядаємо колбек функцію 02,09,2025

// function foo(name) {
//   console.log(`Hello ${name}`);
// }
// foo('Sveta'); /// Hello Sveta

// //  якшо не поставити круглі дужки то буде посилання на цю іункцію

// const a = foo;
// console.log(a('Petya')); ////Hello Petya
// ```
// // // можна посилання на функцію передати як аргумент в іншу функцію

// function Too(str, collback) {
//   // console.log(str); //// Yura
//   console.log(collback); ///  ƒ foo(name)  посилання на функ foo
//   console.log(`Yello ${name}`);
// }

// function foo(name) {
//   console.log(`Yello ${name}`);
// }

// Too('Yura', foo);//// викликаємо функнцію в

// ми створюємо функцію кальк вона приймає два параметри
// а та б , В  мене буде змінна в якій я буду зберігати а+створюємо зсігну
// яка приводитиме до рядка

// function calc(a, b, collback) {
//   const c = collback(a, b);
//   const str = String(c);
//   const res = str + '!!!';
//   return res;
// }

// console.log(
//   calc(2, 3, function (a, b) {
//     return a + b;
//   })
// );

// console.log(
//   calc(10, 20, function (c, z) {
//     return c * z;
//   })
// );

// console.log(calc(1, 1));

// function calc2(a, b) {
//   const c = a - b;
//   const str = String(c);
//   const res = str + '!!!';
//   return res;
// // }

// console.log(calc2(20, 2));

// Тут завдання: написати функцію each(array, callback), яка:

// приймає масив першим параметром,

// приймає функцію-колбек другим параметром,

// застосовує колбек до кожного елемента масиву,

// повертає новий масив з результатами викликів колбека.

// Тобто ти маєш відтворити власну реалізацію методу map.

// function each(array, callback) {
//   const newArray = [];
//   for (const item of array) {
//     // console.log(callback(item)); шось робить що ми вказали в реторн та вмкликл фун
//     newArray.push(callback(item));
//   }
//   return newArray; //// ми отримуємо новий масив
// }

// console.log(
//   each([20, 30, 17, 56], function (value) {
//     return value * 2;
//   })
// );

// console.log(
//   each([20, 30, 17, 56], function (value) {
//     return value - 2;
//   })
// );

// СТРФЛОЧНІ  ФУНКЦІЇ

// function foo(a, b) {
//   return a + b;
// }
// console.log(foo(2, 22));
// це звичайна функція ми до неї можна достукатися перд  її написанням

// const addAffow = (a, b) => { ///// синтаксис як записувати
//   return a * b;
// };

// console.log(addAffow(7, 27));
//  До стрілочної іцнкції не можливо достукатися перед написанням на відмінну від
//  звичайної ми отримаємо Андефайнед не має агрументс на відмінну від звичайної
//  краще користуватися рест оператором ( три крапки)

// const foo = () => ({ a: 20 });
// console.log(foo());

// const calc = (a, b, callback) => {
//   const res = callback(a, b);
//   const str = res + '!!!';
//   return str;
// };

// console.log(
//   calc(70, 70, (to, la) => {
//     return to + la;
//   })
// );

// console.log(
//   calc(7, 70, (t, l) => {
//     return t + l;
//   })
// );
//                  / 0  1   2   3 /
// const numbers = [10, 20, 30, 40];

// numbers.forEach(function (number, index, arr) {
//   console.log(number, index, arr);  10 0 (4) [10, 20, 30, 40]
// });

// const numbers = [1, 2, 3];
// let tooal = 0;
// numbers.forEach(nun => {
//   tooal += nun;
// });
// console.log(tooal);   це щоб порахувати суму чисел

// *************************
// const numbers = [1, 2, 3];
// let tooal = 0;
// numbers.forEach(function (nan) {
//   tooal += nan;
// });
// console.log(tooal);

// Класне завдання 👌 Тобі потрібно замінити звичайний for на forEach і використати стрілкову функцію.

// Ось рефакторинг:

// const logItems = (items) => {
//   items.forEach((item, index) => {
//     console.log(`${index + 1} - ${item}`);
//   });
// };

// // Тести
// logItems(["Mango", "Poly", "Ajax"]);
// logItems(["🍎", "🍐", "🍇", "🍑", "🍌", "🍋"]);

// 🔎 Що змінилось:

// function logItems(items) {} → замінили на стрілкову:

// const logItems = (items) => { ... }

// Цикл for (let i = 0; i < items.length; i++) → замінили на forEach.

// Колбек в forEach теж зроблений стрілковою функцією:

// items.forEach((item, index) => { ... })

// const logItems = array => {
//   array.forEach((item, index) => {
//     console.log(`${index + 1} - ${item}`);
//   });
// };

// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['🍎', '🍐', '🍇', '🍑', '🍌', '🍋']);

// Добре 👌 — це завдання: зробити рефакторинг коду з for
//  на forEach + стрілкову функцію.

// Оригінал у тебе такий:

// function printContactsInfo({ names, phones }) {
//   const namesArr = names.split(",");
//   const phonesArr = phones.split(",");

//   for (let i = 0; i < namesArr.length; i += 1) {
//     console.log(`${namesArr[i]}: ${phonesArr[i]}`);
//   }
// }

// 🔹 Варіант з forEach і стрілкою:

// const printContactsInfo = obj => {
//   const namesArray = obj.names.split(',');
//   const phonesArray = obj.phones.split(',');
//   namesArray.forEach((name, index) => {
//     console.log(`${name} = ${phonesArray[index]}`);

//   });
//   console.log(namesArray);
//   console.log(phonesArray);
// };

// printContactsInfo({
//   names: 'Jacob,William,Solomon,Artemis',
//   phones: '89001234567,89001112233,890055566377,890055566300',
// });

// Чудове завдання 🙌 — треба зробити рефакторинг
//  calculateAverage за допомогою forEach і стрілкової функції.

// Оригінал:
// function calculateAverage(...args) {
//   let total = 0;
//   for (let i = 0; i < args.length; i++) {
//     total += args[i];
//   }
//   return total / args.length;
// }

// 🔹 Варіант з forEach + стрілка:

// const calculateAverage = (...args) => {
//   let tooal = 0;
//   args.forEach(item => (tooal += item));
//   return tooal / args.length;
// };

// console.log(calculateAverage(1, 2, 3, 4)); // 2.5
// console.log(calculateAverage(14, 8, 2)); // 8
// console.log(calculateAverage(27, 43, 2, 8, 36)); // 23.2

// 🔹 Пояснення

// ____________________________________________ 4

// Array.prototype.map()
//  --- ПОЕТАПНО ПЕРЕБИРАЄ ОРИГІНАЛЬНИЙ МАСИВ
//  --- НЕ ЗМІНЮЄ ОРИГІНАЛЬНИЙ МАСИВ
//  ------ ПОВЕРТАЄ НОВИЙ МАСИВ ТАКОЇ Ж ДОВЖИНИ

// map перебирає масив allCars по елементам.

// Для кожного об’єкта повертає тільки значення поля model.

// У результаті формується новий масив тільки з назвами моделей.

// const allCars = [
//   { make: 'Honda', model: 'CR-V', amount: 14, price: 24045 },
//   { make: 'Honda', model: 'Accord', amount: 2, price: 22455 },
//   { make: 'Mazda', model: 'Mazda 6', amount: 8, price: 24195 },
//   { make: 'Mazda', model: 'CX-9', amount: 7, price: 31520 },
//   { make: 'Toyota', model: '4Runner', amount: 19, price: 34210 },
//   { make: 'Toyota', model: 'Sequoia', amount: 16, price: 45560 },
//   { make: 'Toyota', model: 'Tacoma', amount: 4, price: 24320 },
//   { make: 'Ford', model: 'F-150', amount: 11, price: 27110 },
//   { make: 'Ford', model: 'Fusion', amount: 13, price: 22120 },
//   { make: 'Ford', model: 'Explorer', amount: 6, price: 31660 },
// ];

// getModels → повертає масив моделей створюємо функнцію

// const getModels = cars => {
//   const res = [];
//   cars.forEach(item => {
//     //item///- обєкт автомобіля
//     console.log(item.model);
//     res.push(item.model);
//   });
//   return res;
// // };

// **************************************

// const getModels = cars => {
//   const res = cars.map(car => {
//     // console.log(car);
//     return car.model;
//   });
//   return res;
// };
// console.log(getModels(allCars));

// Добре 👌 — тобі треба зробити функцію makeCarsWithDiscount,
// яка повертає новий масив об’єктів,
// але з оновленим значенням price залежно від знижки.

// const makeCarsWithDiscount = (cars, discount) => {
//   return cars.map(car => {
//     return {
//       ...car,
//       price: car.price * (1 - discount),
//     };
//   });
// };

// console.log(makeCarsWithDiscount(allCars, 0.2));
// console.log(makeCarsWithDiscount(allCars, 0.5));

// *****************************

// Добре 👌 — завдання таке:
// збільшити кількість годин (timePlayed) гравця за його id.

// У тебе є масив players:

// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54 },
//   { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92 },
//   { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48 },
//   { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71 },
//   { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 43 },
// ];

// const playerId = 'player-3';

// const newPlayers = players.map(item => {
//   if (item.id === playerId) {
//     return {
//       ...item,
//       timePlayed: item.timePlayed + 100,
//     };
//   }
//   return item;
// });

// console.table(newPlayers);

// 📌 У цьому прикладі:

// map повертає новий масив (оригінальний не змінюється).

// Якщо id збігається → створюємо новий об’єкт із оновленим timePlayed.

// Якщо ні → повертаємо гравця без змін.

// удовий приклад 🚀 — у тебе є масив твітів з тегами,
//  і саме тут зручно застосувати flatMap

// const tweets = [
//   { id: '000', likes: 5, tags: ['js', 'nodejs'] },
//   { id: '001', likes: 2, tags: ['html', 'css'] },
//   { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
//   { id: '003', likes: 8, tags: ['css', 'react'] },
//   { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
// ];

// const tags = tweets.flatMap(tweet => {
//   return tweet.tags;
// });

// console.log(tags);

// в метод flatMap() отримує в себе як параметри
// 1) елемент масиву
// 2) індекс цього елемента
// 3) посилання на вихідний масив
// якшо якийсь з цих параметрів непотрібен ми просто прибераємо
// Метод flatMap() повертає новий масив заповнений значенями
// шо ми повернули колбек функцією Він їх розгортає
// Працює з першим видом вкладеності тобто якшо в масиві буде ще масив він не буде
// з ним працювати,

// 📌 Тобто:

// map створює масив масивів,

// flatMap одразу розгортає його на один рівень.

// const students = [
//   { name: 'Mango', score: 83 },
//   { name: 'Poly', score: 59 },
//   { name: 'Ajax', score: 37 },
//   { name: 'Kiwi', score: 94 },
//   { name: 'Houston', score: 64 },
// ];

// const names = students.map(student => student.name);
// console.log(names); // ["Mango", "Poly", "Ajax", "Kiwi", "Houston"]
