// function foo() {
//   const arg = Array.from(arguments);
//   console.log(Array.isArray(arg));
//   console.log(foo[0]);
// }
// foo(1, 7, 5);
// console.log(foo[0]);

// Напиши функцію add для складання довільнох кількості аргументів (чисел)

// function add() {
//   console.log(arguments);
//   let total = 0;
//   for (const num of arguments) {
//     console.log(num);
//   }
// }
// add();

// console.log(add(1, 2, 3, 4));
// console.log(add(7, 5, 5, 4));
// console.log(add(1, 18, -3, 100));

// Функція createReversedArray() може приймати довільну кількість аргументів.
//  Доповни код функції так, щоб вона повертала масив усіх аргументів,
//   але в масиві вони повинні йти у зворотному порядку. Тобто,
//    при виклику createReversedArray(1, 2, 3), функція має повернути масив [3, 2, 1].
//    Використовуй цикл або метод масиву createReversedArray
//    який застосовується до масиву і результатом роботи повертає новий масив з елементами у зворотньому порядку.

// function createReversedArray() {
//   const arr = Array.from(arguments);
//   return arr.reverse();
// }
// // console.log(createReversedArray(1, 2, 3));
// function greet(username = 'Guest') {
//   console.log(`Hello, ${username}!`);
// }

// greet('Jacob'); // "Hello, Jacob!"
// greet(); // "Hello, Guest!"

// function count(from, to, step = 1) {
//   console.log(`from: ${from}, to: ${to}, step: ${step}`);

//   for (let i = from; i <= to; i += step) {
//     // ...
//   }
// }

// count(5, 10, 1); // "from: 1, to: 15, step: 4"
// count(1, 15); // "from: 1, to: 15, step: 1"
// console.log(count);

// Функція calculateTax(amount, taxRate) оголошує два параметри:

// amount - число, сума від якої потрібно обчислити податок. Обов'язковий параметр.
// taxRate - число, податкова ставка. Необов'язковий параметр.
//  За замовчуванням його значення має бути 0.2.
// Доповни код функції так, щоб вона повертала суму податку -
// результат множення суми на податкову ставку.

// function calculateTax(amount, taxRate = 0.2) {
//   return amount * taxRate;
// }
// console.log(calculateTax(100, 0.1));

// function multiply(x, y, z) {
//   console.log(x * y * z);
// }
function one() {
  console.log('one');
}

function two() {
  console.log('to');
}

function foo() {
  console.log('foo');
  one();
  two();
}

foo();
