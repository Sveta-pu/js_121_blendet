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
const chopShop = {
  stones: [
    { name: 'Emerald', price: 1300, quantity: 4 },
    { name: 'Diamond', price: 2700, quantity: 3 },
    { name: 'Sapphire', price: 1400, quantity: 7 },
    { name: 'Ruby', price: 800, quantity: 2 },
  ],
  calcTotalPrice(stoneName) {
    const stone = this.stones.find(stone => stone.name === stoneName);
    return stone ? stone.price * quantity : 0;
  },
};

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
// ***********************************************************
// ****************************************************
// 📘 Класи в JavaScript
// 🔹 Оголошення класу
// class Car {}

// Клас — це «шаблон» для створення об’єктів.

// 🔹 Конструктор класу
// class Car {
//   constructor(brand, model) {
//     this.brand = brand;
//     this.model = model;
//   }
// }

// Метод constructor автоматично викликається при створенні нового екземпляра:

// const bmw = new Car("BMW", "X5");

// 🔹 Методи класу
// class Car {
//   start() {
//     console.log("Engine started");
//   }
// }

// Методи описуються всередині класу і зберігаються у прототипі.

// 🔹 Прототип екземпляра

// Кожен об’єкт має приховане посилання на prototype свого класу.

// Методи класу зберігаються в цьому прототипі (а не дублюються в кожному об’єкті).

//  * Напиши клас Blogger для створення об'єкта блогера з наступними властивостями:
//  * - email - пошта, рядок
//  * - age - вік, число
//  * - numberOfPosts - кількість постів, число
//  * - topics - масив тем на яких спеціалізується блогер
//  *
//  * Клас чекає один параметр - об'єкт налаштувань з однойменними властивостями.
//  *
//  * - Додай метод getInfo(), який, повертає рядок:
//  *    User ${email} is ${age} years old and has ${numPosts} posts.
//  *
//  * - Додай метод updatePostCount(value), який у параметрі value
//  *    приймає кількість постів, які потрібно додати користувачеві.
//  */

// class Blogger {
//     constructor (obj) {
// this.email = obj.email,
//     }
//     getInfo(){
//         return
//     }
// }

// const alice = new Blogger ({
//     email: "alise@tooo",

// })

// Завдання з картинки звучить так:

// 👉 Напиши клас User, який створює об’єкт із властивостями login та email.

// Оголоси приватні властивості #login та #email.

// Доступ до них зроби через гетери та сетери.

// cclass Car {
//   #brand;
//   #model;
//   #price;
//   constructor(params) {
//     this.#brand = params.brand;
//     this.#model = params.model;
//     this.#price = params.price;
//   }

//   get brand(){
//     return this.#brand;
//   }
//   set brand (newBrand){
//     this.#brand = newBrand;
//   }

//   get model(){
//   return this.#model;
//   }
//   set model (newModel){
//     this.#model = newModel;
//   }
//    get price(){
//     return this.#price;
//   }
//   set price (newBrand){
//     this.#price = newBrand;
//   }

//   getBrand() {
//     return this.#brand;
//   }

//   changeBrand(newBrand) {
//     this.#brand = newBrand;
//   }

//   getModel() {
//     return this.#model;
//   }

//   updateModel(newModel) {
//     this.#model = newModel;
//   }

//   getPrice() {
//     return this.#price;
//   }

//   setPrice(newPrice) {
//     this.#price = newPrice;
//   }
// }

// class MyClass {
//   static b = 5;

//   constructor(value) {
//     this.a = value;
//   }
// }

// const instance = new MyClass(10);
// console.log(MyClass);

// class User {
//   static roles = {
//     admin: 'admin',
//     editor: 'editor',
//     basic: 'basic',
//   };

//   #email;
//   #role;

//   constructor(params) {
//     this.#email = params.email;
//     this.#role = params.role || User.roles.basic;
//   }

//   get role() {
//     return this.#role;
//   }

//   set role(newRole) {
//     this.#role = newRole;
//   }
// }

// const mango = new User({
//   email: 'mango@mail.com',
//   role: User.roles.admin,
// });

// console.log(mango.role); // "admin"
// mango.role = User.roles.editor;
// console.log(mango.role); // "editor"

// class User {
//   static #takenEmails = [];

//   static isEmailTaken(email) {
//     return User.#takenEmails.includes(email);
//   }

//   #email;

//   constructor(params) {
//     this.#email = params.email;
//     User.#takenEmails.push(params.email);
//   }
// }

// const mango = new User({ email: 'mango@mail.com' });

// console.log(User.isEmailTaken('poly@mail.com')); // false
// console.log(User.isEmailTaken('mango@mail.com')); // true

// class Car {
//   static #maxPrice = 50000;

//   checkPrice(price) {
//     if (price >= Car.#maxPrice) {
//       return 'Error! Price exceeds the ';
//     } else {
//       return 'Success! Price is within acceptable limits.';
//     }
//   }

//   constructor(params) {
//     this.price = params.price;
//   }
// }

// const audi = new Car({ price: 36000 });

// const bmw = new Car({ price: 64000 });

// console.log(audi.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// console.log(bmw.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"

// class User {
//   #email;

//   constructor(email) {
//     this.#email = email;
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

// class Admin extends User {
//   static role = {
//     BASIC: 'basic',
//     SUPERUSER: 'superuser',
//   };
//   construcnor(params) {
//     super(params.emaile);
//     this.access = params.access;
//   }
// }

// const mango = new Admin({
//   email: 'mango@mail.com',
//   access: Admin.role.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.access); // "superuser"

// class User {
//   #email;

//   constructor(email) {
//     this.#email = email;
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

// class Admin extends User {
//   static role = {
//     BASIC: 'basic',
//     SUPERUSER: 'superuser',
//   };
//   constructor(params) {
//     super(params.email);
//     this.access = params.access;
//   }
// }

// const mango = new Admin({
//   email: 'mango@mail.com',
//   access: Admin.role.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.access); // "superuser"

// Уявімо, що вище є оголошення класу User

// class ContentEditor extends User {
//   constructor(params) {
//     super(params.email);
//     this.posts = params.posts;
//   }

//   addPost(post) {
//     this.posts.push(post);
//   }
// }

// const editor = new ContentEditor({
//   email: 'mango@mail.com',
//   posts: [],
// });

// console.log(editor); // { #email: "mango@mail.com", posts: [], addPost: f }

// editor.addPost('post-1');
// editor.addPost('post-2');
// console.log(editor.posts); // ['post-1', 'post-2']

// Дано масив об'єктів.
// Перевірте, чи є хоча б один об'єкт з віком менше 20 років.
// Очікуваний результат: true.

// const people = [
//  { name: 'John', age: 27 },
//  { name: 'Jane', age: 31 },
//  { name: 'Bob', age: 19 },
// ];

// Завдання 4:
// const isYoung = people.some(elem , age) =>
// Дано масив чисел [2, 4, 6, 8, 10].
// Перевірте, чи є кожен елемент масиву парним. Очікуваний результат: true.

// const numbers = [2, 4, 6, 8, 10];
// const isIven  = numbers.every( number => % 2 === 0);

// Завдання 5:

// Знайдіть перше непарне число

// const numbers = [2, 1, 6, 8, 9, 10, 12];
// const notEver =

// Завдання 6:

// Відсортуйте масив чисел [4, 2, 5, 1, 3]
// у порядку зростання. Очікуваний результат: [1, 2, 3, 4, 5].

// const numbersArray = [4, 2, 5, 1, 3];
// const num = numbersArray.toSorted((a, b) => a - b);
// console.log(num);

// Завдання 7:

// Відсортуйте масив рядків ["banana", "orange", "apple", "pear"]
//  у порядку алфавіту.
// Очікуваний результат: ["apple", "banana", "orange", "pear"].

// const stringArray = ['banana', 'orange', 'apple', 'pear'];

// // const string = stringArray.toSorted((a, b) => a.localeCompare(b));
// // console.log(string);

// const newStringArray = arr => arr.toSorted((a, b) => a.localeCompare(b));
// console.log(newStringArray(arr));

// Завдання 8:

//  Відсортуйте масив об'єктів за віком у порядку зростання.
// Очікуваний результат: [{name: "Bob", age: 19}, {name: "John", age: 27}, {name: "Jane", age: 31}].

// const users = [
//   { name: 'John', age: 27 },
//   { name: 'Jane', age: 31 },
//   { name: 'Bob', age: 19 },
// ];

// // const newUsers = users.toSorted((a, b) => a.age - b.age);
// // console.log(newUsers);

// const newUsersSort = users.toSorted((a, b) => a.age - b.age);
// console.log(newUsersSort);

// Завдання 9:

// Дано масив об'єктів.
// Створіть новий масив, що містить тільки об'єкти, в яких
// вік більше 20 років.
// Очікуваний результат: [{name: "John", age: 27}, {name: "Jane", age: 31}]

// const user = [
//   { name: 'John', age: 27 },
//   { name: 'Jane', age: 31 },
//   { name: 'Bob', age: 19 },
// ];

// const newUsers = user.filter(obj => obj.age > 20);
// console.log(newUsers);

// // const userFoo = (arr) =>

// Завдання 10:

// Дано масив чисел [1, 2, 3, 4, 5].
// Застосуйте метод для обчислення суми елементів масиву.

// const numbers = [1, 2, 3, 4, 5];

// const num = numbers.reduce((acc, elm) => (acc += elm), 0);
// console.log(num);

// const numFoo = arr => numbers.reduce((acc, elm) => (acc += elm), 0);

// console.log(numFoo(numbers));

// Завдання 11:
// Розроби клас Calculator, який дозволяє виконувати арифметичні //
//  операції над числом за допомогою методів класу, підтримуючи //
//  ланцюжковий виклик (method chaining). // //
//  Вимоги до класу Calculator // - Метод number(value) //
// Встановлює початкове значення для наступних обчислень. //
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів. //
//  - метод getResult, Повертає поточний результат усіх операцій. //
// Не змінює значення, просто повертає його. //
// - метод add - Додає value до поточного значення. //
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів. //
//  - метод substruct - Віднімає value від поточного значення. Повертає this.
// - метод divide - Ділить поточне значення на value, якщо value не дорівнює 0.
// Якщо value === 0, викидає помилку з повідомленням про неможливість ділення.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів. //
// - метод multiply -Множить поточне значення на value.
//  Повертає this. //
//  Об'єкт класу може проводити послідовні операції у вигляді ланцюжка //
// Приклад використання: // const calc = new Calculator();

// const result = calc
//    .number(10)   // Встановлюємо початкове значення 10
//    .add(5)       // Додаємо 5 (10 + 5 = 15)
//    .subtract(3)  // Віднімаємо 3 (15 - 3 = 12)
//    .multiply(4)  // Множимо на 4 (12 * 4 = 48)
//    .divide(2)    // Ділимо на 2 (48 / 2 = 24)
//    .getResult(); // Отримуємо результат: 24

// class Calculator {
// number(value) {
// this.result = value
// return this;
// }

// }

//    console.log(result); // 24

// Завдання 12:
// Напиши клас Client який створює об'єкт з властивостями login email.
// Оголоси приватні властивості #login #email, доступ до яких зроби
// через геттер та сеттер login email

// class Client {
//   #login;
//   #email;

//   constructor() {
//     this.#login = login;
//     this.#email = email;
//   }

//   get login() {
//     return this.#login;
//   }

//   set login(newlogin) {
//     this.#login = newlogin;
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

// const client = new Client();
// client.email = 'sdvjdkjv';
// client.login = 'TOOO';

//  Завдання 13:

//  Наслідування у класах!
// Cтворіть клас `Person`, який містить наступні властивості:
//  - `name` - ім'я людини;
//  - `age`- вік людини;
//  - `gender` - стать людини;
//  - `email`- електронна пошта людини.

// Крім того, клас `Person` має мати метод `getDetails()`,
// який повертає об'єкт з ім'ям, віком, статтю
//та електронною поштою людини.

//
// Потім Створіть клас `Employee`, який розширює клас `Person`
//  і містить наступні властивості:
//  - salary - зарплата співробітника;
//  - department - відділ, в якому працює співробітник.
// Крім того, клас `Employee` має мати метод `getEmployeeDetails()`,
// який повертає об'єкт з зарплатою співробітника та відділом,
//  в якому він працює.

// class Person {
//   constructor(name, age, gender, email) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//     this.email = email;
//   }
//   getDetails() {
//     return {
//       name: this.name,
//       age: this.age,
//       gender: this.gender,
//       email: this.email,
//     };
//   }
// }

// class Employee extends Person {
//   constructor(name, age, gender, email, salary, department) {
//     super(name, age, gender, email);
//     this.salary = salary;
//     this.department = department;
//   }
//   getEmployeeDetails() {
//     return {
//       salary: this.salary,
//       age: this.age,
//     };
//   }
// }
// const person = new Person('Anna', 25, 'female', 'anna@example.com');
// console.log(person.getDetails());

// const g = { name, age, gender, email};
// const p = new Person(g);

// class Person {
//   constructor(name, age, gender, email) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//     this.email = email;
//   }
//   getDetails() {
//     return {
//       name: this.name,
//       age: this.age,
//       gender: this.gender,
//     };
//   }
// }

// class Employee extends Person {
//   constructor({ salary, departmen, ...person }) {
//     super(person);
//     this.salary = salary;
//     this.departmen = departmen;
//   }

//   getEmployeeDetails() {
//     return {
//       salary: this.salary,
//       name: this.name,
//       department: this.departmen,
//     };
//   }
// }

// const emp = new Employee({
//   name: 'Sveta',
//   departmen: 'Googol',
//   salary: 50000,
// });

// const per = new Person({
//   name: 'Gavriel',
//   age: 41,
//   gender: 'man',
//   email: 'gavriel@gmail.com',
// });

// console.log(per.getDetails());
// console.log(emp.getEmployeeDetails());
