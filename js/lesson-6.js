// // 'use strict';

// // function f() {
// //   return this && this.name;
// // }

// // const obj = {
// //   name: 'Obj',
// //   m: f,
// //   n() {
// //     const arrow = () => this.name;
// //     return arrow();
// //   },
// // };

// // const g = f.bind({ name: 'Bind' });

// // console.log(f()); // 1) ?
// // console.log(obj.m()); // 2) ?
// // console.log(g()); // 3) ?
// // console.log(obj.n()); // 4) ?
// // const apartment = {
// // 	rooms: 4,
// // 	floor: 2,
// // 	taxFree: false
// // };

// // const condo = Object.create(apartment);
// // condo.rooms = 3;

// // const objB = {
// //   b: 'objB prop',
// // };

// // const objA = Object.create(objB);
// // objA.a = 'objA prop';

// // console.log(objA);

// // Чудове завдання 👍
// // У тебе вже є об’єкт chopShop із масивом каменів. Тепер треба додати метод calcTotalPrice(stoneName), який:

// // Приймає назву каменя (stoneName).

// // Знаходить камінь у масиві stones.

// // Повертає його загальну вартість: price * quantity.

// // ✅ Рішення
// // const chopShop = {
// //   stones: [
// //     { name: 'Emerald', price: 1300, quantity: 4 },
// //     { name: 'Diamond', price: 2700, quantity: 3 },
// //     { name: 'Sapphire', price: 1400, quantity: 7 },
// //     { name: 'Ruby', price: 800, quantity: 2 },
// //   ],

// //   calcTotalPrice(stoneName) {
// //     const stone = this.stones.find(stone => stone.name === stoneName);
// //     return stone ? stone.price * stone.quantity : 0;
// //   },
// // };

// // console.log(chopShop.calcTotalPrice('Emerald'));

// // 🔹 Пояснення

// // .find() шукає перший елемент у масиві, який відповідає умові.

// // Якщо камінь знайдено → повертаємо price * quantity.

// // Якщо ні (undefined) → повертаємо 0.

// // Класна тема 👌
// // На скріншоті у тебе згадуються три методи: call, apply, bind.
// // Всі вони допомагають явно вказати контекст виконання (this) для функції.1. Метод call

// // Викликає функцію з переданим контекстом та аргументами через кому.

// // function greet(greeting, punctuation) {
// //   console.log(`${greeting}, ${this.name}${punctuation}`);
// // }

// // const user = { name: "Alice" };

// // greet.call(user, "Hello", "!");
// // // Hello, Alice!

// // 🔹 2. Метод apply

// // Схожий на call, але аргументи передаються масивом.

// // greet.apply(user, ["Hi", "!!!"]);
// // // Hi, Alice!!!

// // 🔹 3. Метод bind

// // Не викликає функцію відразу, а повертає нову функцію з прив’язаним this.

// // const greetAlice = greet.bind(user, "Hey");
// // greetAlice("?");
// // // Hey, Alice?

// // 🔹 Порівняння
// // Метод	Викликає одразу?	Як передаються аргументи	Що повертає
// // call	✅ Так	через кому	результат функції
// // apply	✅ Так	масивом	результат функції
// // bind	❌ Ні	через кому (як у call)	нову функцію

// // 🔹 Порівняння
// // Метод	Викликає одразу?	Як передаються аргументи	Що повертає
// // call	✅ Так	через кому	результат функції
// // apply	✅ Так	масивом	результат функції
// // bind	❌ Ні	через кому (як у call)	нову функцію

// Об’єкт-прототип
// Object.create(proto)

// Створює новий об’єкт, чий [[Prototype]] вказує на proto.

// const animal = { legs: 4 };
// const dog = Object.create(animal); // dog.__proto__ === animal
// dog.name = "Mango";

// console.log(dog.name); // "Mango" (власна)
// console.log(dog.legs); // 4 (успадкована з animal)

// Власні vs невласні (успадковані) властивості

// Власні: зберігаються безпосередньо в об’єкті.

// Невласні: приходять із ланцюжка прототипів.

// dog.hasOwnProperty("name"); // true
// dog.hasOwnProperty("legs"); // false
// "legs" in dog;              // true (бо є у прототипі)

// Перебір власних властивостей

// Уникай for...in без фільтра — він тягне і успадковані.

// // Варіант 1: фільтруємо
// for (const key in dog) {
//   if (dog.hasOwnProperty(key)) console.log(key); // лише власні
// }

// // Варіант 2: сучасно з for...of
// for (const [k, v] of Object.entries(dog)) {
//   console.log(k, v); // лише власні
// }

// Ланцюжки прототипів

// Пошук властивості йде вгору ланцюжком до Object.prototype, потім зупиняється.

// Object.getPrototypeOf(dog) === animal;        // true
// Object.getPrototypeOf(animal) === Object.prototype; // true

// Перевірка «хто чий прототип»
// animal.isPrototypeOf(dog); // true
// dog.isPrototypeOf(animal); // false

// Типові підводні камені

// for...in перебирає й успадковані — фільтруй або використовуй Object.keys/values/entries.

// Присвоєння однойменної властивості у «нащадка» перекриває успадковану (не змінює прототип).

// undefined при доступі → або властивості нема ніде в ланцюгу, або вона є, але має значення undefined. Різницю перевіряй оператором in.

// Міні-практика (спробуй у консолі)
// const base = { x: 1 };
// const a = Object.create(base);
// a.y = 2;

// // 1) Які ключі виведе?
// console.log(Object.keys(a)); // ?

// // 2) Чим відрізняються:
// console.log("x" in a);             // ?
// console.log(a.hasOwnProperty("x")); // ?

// // 3) Хто прототип a?
// console.log(Object.getPrototypeOf(a) === base); // ?
