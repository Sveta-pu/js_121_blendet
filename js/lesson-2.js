// / Створіть масив styles з елементами 'jazz' і 'blues'
// Додайте до кінця масиву елемент 'rock-n-roll' за допомогою відповідного методу масивів
// Знайдіть елемент 'blues' у масиві та замініть його на 'classic', використовуючи JavaScript-код

// Напишіть функцію logItems(array), яка приймає масив як аргумент
// і виводить у консоль кожен його елемент у форматі:
// "<номер елемента> - <значення елемента>".
// Використайте цикл for для перебору елементів масиву.
// Нумерація елементів повинна починатися з 1 (а не з 0).

// const styles = ['jazz', 'bluz'];

// styles.push('rock-n-rill');

// const index = styles.indexOf('blues');
// console.log(index);

// styles[index] = 'classic';
// console.log(styles);

// function logItems(array) {
//   for (let i = 0; i < array.length; i++) {
//     console.log(`${i + 1}: ${array[i]}`);
//   }
// }

// logItems(styles);

// Напишіть функцію checkLogin(array), яка:
// Приймає масив логінів як аргумент.
// Запитує ім'я користувача через prompt.
// Перевіряє, чи є введене ім'я у переданому масиві.
// Якщо ім'я є в масиві – виводить повідомлення через alert: "Welcome, <name>!"
// Якщо ім'я відсутнє – виводить повідомлення: "User not found".

// const logins = ['Peter', 'John', 'Igor', 'Sasha'];

// function checkLogin(array) {
//   const userName = prompt('Вкажіть ваше імя');

//   if (array.includes(userName)) {
//     alert(`Welcome, ${userName}!`);
//   } else {
//     alert('User not found');
//   }
// }
// checkLogin(logins);

// Напишіть функцію caclculateAverage(),
// яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення.
// // Додайте перевірку, що аргументи - це числа.

// function calculateAverage() {
//   let sum = 0;
//   let caunter = 0;
//   for (const arg of arguments) {
//     if (typeof arg === 'number') {
//       sum += arg;
//       caunter += 1;
//     }
//   }
//   return sum / caunter;
// }

// console.log(calculateAverage(2, 5, 7, '10'));

// Напишіть функцію, яка сумуватиме сусідні числа
// і пушитиме їх в новий масив.

// уточнення: складати необхідно перше число з другим, потім друге - з третім,
// третє - з четвертим і так до кінця.
// В результаті функція має повертати масив [33, 45, 39, 17, 25, 27, 29].

// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// function letSum(array) {
//   const newArray = [];
//   for (let i = 0; i < array.length - 1; i++) {
//     newArray.push(i);
//     console.log(array[i]) + array[(i += 1)];
//   }
//   return newArray;
// }
// console.log(letSum);

// Напишіть функцію findSmallestNumber(numbers),
// яка шукає найменше число в масиві.
// Додайте перевірку, що функція отримує саме масив, і
// якщо функція отримує масив - поверніть з функції найменше число,
// в іншому випадку - поверніть 'Sory, it is not an array!'.

// const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];

// function findSmallestNumber(numbers) {
//   if (Array.isArray(numbers)) {
//     return Math.min(...numbers);
//   } else {
//     return 'Sory, it is not an array!';
//   }
// }
// console.log(findSmallestNumber());

// Напишіть функцію findLongestWord(string), яка
// приймає довільний рядок, що складається лише зі слів, розділених
// пробілами (параметр string), і повертатиме найдовше слово у реченні.

// Скористайтесь цим прикладом виклику функції для перевірки її роботи:

// function findLongestWord(string) {
//   const array = string.split('');
//   console.log(array);
//   let firstWord = [0];
//   for (const word of array) {
//     console.log(word.length);
//     if (word.length > longestWord.length) {
//       longestWord = word;
//     }
//   }
//   return longestWord;
// }
// console.log(findLongestWord('London is the capital of Great Britain'));

// Завдання 7:
// Напишіть скрипт, який для об'єкту user, послідовно:
// 1 - додасть поле mood зі значенням 'happy',
// 2 - замінить hobby на 'skydiving',
// 3 - замінить значення premium на false,
// 4 - виведе зміст об'єкта user у форматі
// '<ключ>:<значення>' використовуя Object.keys() та for...of

// const user = {
//   name: 'John',
//   age: 20,
//   hobby: 'tenis',
//   premium: true,
// };

// user.mood = 'happy';
// user.hobby = 'skydiving';
// user.premium = false;

// // const resalts = Object.keys(user);
// // for (const resalts of keys[user]) {
// //   console.log(`${key} :${user[key]}`);
// // }

// for (const key in user) {
//   consolelog(`${key} :${user[key]}`);
// }

// Завдання 8:
// Є об'єкт, в якому зберігаються зарплати команди
// Напишіть код для додавання усіх зарплат та
// збережіть його результат в змінній sum.
// Якщо об'єкт salaries пустий, то результат має бути 0

// const salaries = {
//   Mango: 100,
//   Poly: 160,
//   Ajax: 1470,
// };

// let sum = 0;

// let arraySalarius = Object.values(salaries);
// console.log(arraySalarius);
// for (const

// Завдання 9:
// Створіть об'єкт calculator з наступними методами:
// read(a, b) - приймає два аргумента і зберігає їх як властивості об'єкта,
// sum() - повертає сумму збереженних значень (з перевіркою на наявність властивостей в об'єкті),
// mult() - перемножає збереженні значення і повертає результат (з перевіркою на наявність властивостей в об'єкті),
// винесіть перевірку на наявність властивостей в об'єкті в окремий метод exist().

// Якщо вказані властивості в обʼєкті відсутні (тобто метод exist повертає false),
// методи sum і mult мають повертати рядок 'No such propeties'

// const calculator = {
//   read(a, b) {
//     this.firstValue = a;
//     this.secondValue = b;
//   },
//   sum() {
//     if (this.exist()) {
//       return this.firstValue + this.secondValue;
//     } else {
//       return 'No such propeties';
//     }
//   },
//   mult() {
//     if (this.exist()) {
//       return this.firstValue * this.secondValue;
//     } else {
//       return 'No such propeties';
//     }
//   },
//   mult() {
//     if (this.firstValue && this.secondValue) {
//       return true;
//     } else {
//       return false;
//     }
//   },
// };

// calculator.read(10, 20);

// console.log(calculator);
// console.log(calculator.sum());
// console.log(calculator.mult());

// Завдання 10:
// Напишіть функцію calcTotalPrice(fruits, fruitName),
// яка приймає массив об'єктів (fruits) і рядок з назвою фрукта (fruitName).
// Функція рахує і повертає загальну вартість фрукта
// з таким ім'ям, ціною та кількістю з об'єкта.

// Зверніть увагу, що в масиві може бути кілька обʼєктів з однаковою
// назвою фрукта, це також треба урахувати.

// const fruits = [
//   { name: 'Яблуко', price: 45, quantity: 7 },
//   { name: 'Апельсин', price: 60, quantity: 4 },
//   { name: 'Банан', price: 125, quantity: 8 },
//   { name: 'Груша', price: 350, quantity: 2 },
//   { name: 'Виноград', price: 440, quantity: 3 },
//   { name: 'Банан', price: 125, quantity: 3 },
// ];

// function calcTotalPrice(fruits, fruitName) {
//   let sum = 0;
//   for (const mult of fruits) {
//     if (mult.name === fruitName) {
//       sum += mult.price * mult.quantity;
//     }
//   }
//   return sum;
// }
// console.log(fruits);

// Додатково, якщо все зробили або хочеться ще, можна дати цю задачу:
// Створіть телефонну книгу - об'єкт phonebook,
// у якого є властивість contacts (список контактів)
// та методи управління книгою:
// add(data) - приймає об'єкт data, де зберігається
// name, email, category, id, createdAt
// (name i email - обов'язкові параметри, які треба передавати
// при додаванні нового контакта,
// category - може передаватись чи ні, якщо ні - має
// приймати значення "default",
// id та createdAt генеруються відповідними методами:
// generateId() і getDate());
// *не забудь додати перевірку, якщо контакт з таким ім'ям чи імейлом вже є - ми його не додаємо
// list() - виводить список контактів у вигляді таблиці;
// filtered(category) - фільтрує контактів по обраній категорії (друзі, робота і т.д.)
// delete(name) - видаляє контакт з заданим ім'ям;
// updateName(oldName, newName) - зиінює ім'я контакта;

// const phonebook = {
//   contacts: [],
//   add(data) {},
//   list() {},
//   filtered(category) {},
//   delete(name) {},
//   updateName(oldName, newName) {},

//   generateId() {
//     return '#' + Math.random().toString(36).substr(2, 9);
//   },
//   getDate() {
//     return Date.now();
//   },
// };

// function add(data) {
//   if (!data.name || !data.email) return 'default';
// }

// phonebook.add({
//   name: 'Mango',
//   email: 'mango@mail.com',
//   category: 'friends',
// });

// phonebook.add({
//   name: 'Poly',
//   email: 'poly@hotmail.com',
// });
// phonebook.add({
//   name: 'Katy',
//   email: 'katy@hotmail.com',
//   category: 'friends',
// });

// починаємо з масиву обєктів
// ми можемо згрупувати в одне місце однотипні обєкти
// як ми можемо з цим працювати
// 1) Пщшук друга за іменем створюємо функцію та зробимо перебор через фор оф
// фор ( айтем - це є елемент масиву оф вказуємо назву масиву для перебору)

// const friends = [
//   { name: 'Ross', online: false },
//   { name: 'Joey', online: true },
//   { name: 'Luda', online: false },
//   { name: 'Sacha', online: true },
//   { name: 'MachA', online: false },
// ];

// function findFrendName(array, findFrendName) {
//   for (const item of array) {
//     if (item.name.toLowerCase() === findFrendName.toLowerCase()) {
//       console.log(item);
//       return item;
//     }
//   }
//   return 'not found';
// }

// findFrendName(friends, '');
// console.table(findFrendName(friends, 'sacha', 'luda'));

// // Для того шоб отримати фмена всіх друзів фиводимо функцію

// function getAllNames(array) {
//   const names = [];
//   for (const friend of array) {
//     // console.log(friend.name);
//     names.push(friend.name);
//   }
//   return names;
// }
// console.log(getAllNames(friends));

// // Отримуємо імена тільки тих друзів шо не онлайн

// function getOnlineFriends(array) {
//   const onlineFrends = [];
//   for (const toto of array) {
//     console.log(toto.online);
//     if (toto.online === false) {
//       onlineFrends.push(toto.name);
//     }
//   }
//   return onlineFrends;
// }

// console.log(getOnlineFriends(friends));

// потрвбно написати фенкцію шо пиймає масив обєктів та рядок з назвою каменя
// функція рахує та повертає загальну ватість
// з таким імям ціною та кількістю з обєкта

// const stones = [
//   { name: 'Смарагд', price: 12300, quantity: 4 },
//   { name: 'Діамант', price: 35500, quantity: 4 },
//   { name: 'Сапфір', price: 11300, quantity: 4 },
//   { name: 'Бреліант', price: 1300, quantity: 4 },
//   { name: 'Смарагд', price: 18300, quantity: 4 },
// ];

// function calcTotalPrice(stones, stoneName) {
//   let sum = 0;
//   for (const stone of stones) {
//     if (stone.name === stoneName) {
//       sum += stone.price * stone.quantity;
//     }
//   }
//   return sum;
// }

// console.log(calcTotalPrice(stones, 'Смарагд'));

// Обєкти

// методи обєкта
// Доступ до елемента через this
// зміна за посиланням
// можна в тіло обєкта савити функцію
// яка буде звязувати тіло обєкта та виуконувати якісь операції
// Як ми сожкмо савити метод в обʼєкті в самому обєті ти ме пишкмо слово
// функція імя круглі дужки фігурні дужки  Як викликати
//  запк=ус ити фенкцієб в середині обєкту Вона знаходиться в обєкті ми
// поза обєктом зветраємося до обєкта обєкту та через крапку називаємо нашу функцію
// та звпускаємо круглі дужки

// const firstObject = {
//   name: 'Sveta',
//   age: 35,
//   drink: ['water', 'tea', 'coffee'],
//   myFunction(newAge) {
//     this.age = newAge; // ✅ головна правка
//   },
// };

// console.log(firstObject); // age: 35
// firstObject.myFunction(20);
// console.log(firstObject.age); // 20

// const secondObject = {
//   name: 'Asaf',
//   age: 0.8,
//   drink: ['milk', 'water'],
// };

// secondObject.funcfinMom = firstObject.myFunction;
// console.log(secondObject.funcfinMom);
// console.log(secondObject);
// secondObject.funcfinMom(0.9);

// console.log(secondObject.age); // 0.9 ✅ тепер змінився secondObject

// 📑 Таблиця поведінки this

// Де викликана функція	Приклад	Хто такий this
// Метод в об’єкті	js const obj = { name: "Sveta", say() { console.log(this.name); } }; obj.say();	this = obj → виведе "Sveta"
// Позичений метод	js const obj2 = { name: "Asaf" }; obj2.say = obj.say; obj2.say();	this = obj2 → виведе "Asaf"
// Звичайна функція (не метод)	js function f() { console.log(this); } f();	у strict mode → undefined
// без strict → window (в браузері)
// Стрілкова функція	js const obj = { name: "Sveta", arrow: () => console.log(this) }; obj.arrow();	this не перемикається, а береться з оточення, де створена функція. Тут → window або undefined у strict
// bind / call / apply	js const f = obj.say.bind(obj2); f();	this примусово = obj2
// 💡 Пам’ятка

// this залежить не від того, де функція написана, а від того, як її викликали.

// У методах через крапку (obj.method()) він показує на цей об’єкт.

// У стрілкових функціях він не перемикається і лишається з контексту створення.

// bind/call/apply дозволяють вручну підставити, хто буде this.
// const user = {
//   name: 'Sveta',
//   sayHi() {
//     console.log(this.name);
//   },
// };

// user.sayHi();

// const user = {
//   name: 'Sveta',
//   sayHi() {
//     console.log(this.name);
//   },
// };
// console.log(sayHi);

// const fn = user.sayHi;
// fn();
// 🔹 Навіщо потрібен this

// У JavaScript this — це динамічне посилання на "той об’єкт, який викликав метод".

// 1. Щоб одна й та сама функція могла працювати з різними об’єктами

// function sayHi() {
//   console.log(this.name);
// }

// const user1 = { name: 'Sveta', sayHi };
// const user2 = { name: 'Asaf', sayHi };

// user1.sayHi(); // "Sveta"
// user2.sayHi(); // "Asaf"

// Без this довелося б у кожній функції вручну прописувати ім’я конкретного об’єкта.

// У сучасному JS часто використовують класи. Там this посилається на створений об’єкт:

// class Car {
//   constructor(model) {
//     this.model = model;
//   }
//   showModel() {
//     console.log(this.model);
//   }
// }

// const bmw = new Car('BMW X5');
// bmw.showModel(); // "BMW X5"

// 📌 Підсумок

// this потрібен для:

// Доступу до властивостей/методів об’єкта зсередини цього ж об’єкта.

// Можливості використовувати одну й ту ж функцію з різними об’єктами.

// Роботи з класами та конструкторами.

// 🔹 Spread (...)

// Розгортає (розкладає) елементи масиву чи об’єкта.

// Приклад — створення масиву:
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5];

// const merged = [...arr1, ...arr2];
// console.log(merged); // [1, 2, 3, 4, 5]

// Приклад — створення об’єкта:
// const obj1 = { name: "Sveta" };
// const obj2 = { age: 35 };

// const user = { ...obj1, ...obj2 };
// console.log(user); // { name: "Sveta", age: 35 }

// 🔹 Rest (...)

// Збирає залишкові елементи у масив.

// Приклад — залишкові параметри:
// function sum(...numbers) {
//   return numbers.reduce((acc, n) => acc + n, 0);
// }

// console.log(sum(1, 2, 3, 4)); // 10

// Приклад — збір частини аргументів:
// const [first, ...rest] = [10, 20, 30, 40];
// console.log(first); // 10
// console.log(rest);  // [20, 30, 40]

// 📌 Важливе

// Spread = розкласти ("розгорнути")

// Rest = зібрати ("зібрати все, що лишилось")

// Обидва пишуться однаково ..., різниця тільки в контексті:

// в аргументах функції → rest

// у масивах / об’єктах → spread

// function foo(a, b, ...rest) {
//   console.log(a, b);
//   console.log(rest);
// }

// foo(1, 2, 3, 5, 6);
// ...rest- для групування повинен бути останнім

// function foo(...lalala) {
//   console.log(lalala);
// }

// foo({ x: 11, y: 2 });

// const arr = [1, ...[4000, 100, 700], ...[70, 1, 2, 3], 800];
// console.log(arr);
// // перед масивом який я зочу розгорнути ставимо ...
// бере та розгортає

// const temps = [5, 10, 100, 17, 25];
// console.log(Math.max(...temps)); //100//
// // console.log(Math.min(...temps)); //5//

// const array = ['mama', 'world', 'hello'];

// function foo(a, b, c) {
//   console.log('a', b);
//   console.log('b', b);
//   console.log('c', c);
// }

// foo(...array); //mama world

// ****
// Створення масиву і тип за посиланням
// *****

// const a = [1, 2, 3];
// const b = [...a];

// a[0] = 200;
// b[1] = 11;
// console.log('a', a); //a (3) [200, 2, 3]
// console.log('b', b); /// b (3) [1, 11, 3]

// 🔹 1. Примітивні типи (копіюються за значенням)

// string, number, boolean, null, undefined, symbol, bigint

// При копіюванні створюється нова незалежна змінна:

// let a = 5;
// let b = a;   // копія значення
// b = 10;

// console.log(a); // 5  (не змінився)
// console.log(b); // 10

// 🔹 2. Складні типи (копіюються за посиланням)

// object, array, function

// При копіюванні копіюється посилання на ту ж саму область пам’яті, а не новий об’єкт:

// const arr1 = [1, 2, 3];
// const arr2 = arr1;   // копія посилання

// arr2.push(4);

// console.log(arr1); // [1, 2, 3, 4]  ← змінився і arr1!
// console.log(arr2); // [1, 2, 3, 4]

// Тобто arr1 і arr2 тепер «дивляться» на один і той самий масив у пам’яті.

// 🔹 Як зробити справжню копію масиву / об’єкта
// Поверхнева копія:
// const arr1 = [1, 2, 3];
// const arr2 = [...arr1];  // spread
// arr2.push(4);

// console.log(arr1); // [1, 2, 3]
// console.log(arr2); // [1, 2, 3, 4]

// Об’єкт:
// const obj1 = { name: "Sveta", age: 35 };
// const obj2 = { ...obj1 };

// obj2.age = 40;

// console.log(obj1.age); // 35
// console.log(obj2.age); // 40

// 📌 Важливо: spread робить поверхневу копію. Якщо всередині є вкладені об’єкти, вони все одно лишаються за посиланням.

// const user1 = { name: "Sveta", info: { city: "Kyiv" } };
// const user2 = { ...user1 };

// user2.info.city = "Lviv";

// console.log(user1.info.city); // "Lviv"  ← вкладений об’єкт лишився спільним

// *
// *поєднаємо декілька масивів в один
// *

// const oneArrey = [1, 2, 2];
// const towAreey = [2, 3, 4];
// const sreArrey = [5, 6, 7];

// const oll = [...oneArrey, ...sreArrey, ...sreArrey];
// console.log(oll);

// const objA = { x: 1, z: 2 };
// const objB = { z: 1, x: 0 };

// const objC = {
//   ...objA, // x:1, z:2
//   p: 's', // x:1, z:2, p:"s"
//   ...objB,
//   z: 800,
// };
// // console.log(objC);
// можна переприсвоювати нові значення перезатирвж нові значення

// ****
// Оновлюємо налаштування користувача
// ****
// Для еьог нам потрібно створити новий обєкт в якому через трикрапку
// перезапишиеться початкові значкння з налаштування о труга трикрапка
// залишить ті налаштування шо вибрав користувач
// ми маємо обєкт

// const defaultSetings = {
//   name: 'user',
//   age: 0,
//   status: 'online',
// };

// const userSetings = {
//   name: 'Sveta',
//   age: 35,
//   drink: ['sok', 'water'],
// };

// const finaSetings = {
//   ...defaultSetings,
//   ...userSetings,
// };
// console.log(finaSetings);

// const Transaction = {
//   DEPOSIT: 'deposit',
//   WITHDRAW: 'withdraw',
// };

// const account = {
//   // поточний баланс
//   balance: 0,

//   // історія транзакцій
//   transactions: [],

//   // створює та повертає об’єкт транзакції
//   createTransaction(amount, type) {
//     return {
//       id: Date.now(), // унікальний id
//       amount,
//       type,
//     };
//   },

//   // поповнення рахунку
//   deposit(amount) {
//     this.balance += amount;
//     const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
//     this.transactions.push(transaction);
//   },

//   // зняття коштів
//   withdraw(amount) {
//     if (amount > this.balance) {
//       console.log('Недостатньо коштів');
//       return;
//     }
//     this.balance -= amount;
//     const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
//     this.transactions.push(transaction);
//   },

//   // повертає баланс
//   getBalance() {
//     return this.balance;
//   },

//   // шукає транзакцію за id
//   getTransactionDetails(id) {
//     for (const item of this.transactions) {
//       if (item.id === id) {
//         return item;
//       }
//     }
//     return 'Not found';
//   },

//   // повертає суму транзакцій певного типу
//   getTransactionTotal(type) {
//     let sum = 0;
//     for (const item of this.transactions) {
//       if (item.type === type) {
//         sum += item.amount;
//       }
//     }
//     return sum;
//   },
// };

// account.deposit(1000);
// account.deposit(500);
// account.withdraw(30);
// account.withdraw(500);

// console.log(account.getBalance());
// // 120

// console.log(account.transactions);
// // масив із 3 транзакцій

// console.log(account.getTransactionTotal(Transaction.DEPOSIT));
// // 150

// console.log(account.getTransactionTotal(Transaction.WITHDRAW));
// // 30
