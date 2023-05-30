"use strict";

// 11 Типи даних

// Об'єкт
// структура зберігання даних в парному форматі ключ і значення
// const human = {
//   name: "Mykola",
//   sex: "male",
//   age: 26,
//   isMarried: false,
// };

// human.degree = "master's degree";

// console.log(human.name);
// console.log(human["age"]); // надійніше використовувати квадратні дужки
// console.log(human);

// // Масив
// let arr = ["string", 9, true, {}, []]; // масив послідовність об'єктів по порядку
// console.log(arr[2]);

// 12 Завдання
// let storeName = "Bodyshop";
// let storeDescription = {
//   budget: 10000,
//   employees: ["Anna", "Hannah", "Arma"],
//   products: { notebook: 30, pen: 5 },
//   open: true,
// };

// 13 Просте спілкування з користувачем

// модальне вікно
// alert("Hello"); // сповіщення попередження

// const result = confirm("Are you here?");
// console.log(result);

// const answer = prompt("Where are you?", "I'm here");
// console.log(answer);
// console.log(typeof answer); // рядок

// const answers = [];

// answers[0] = prompt("Ваше прізвище");
// answers[1] = prompt("Ваше ім'я");
// answers[2] = prompt("Ваш вік");

// document.write(answers);

// console.log(typeof answers);

// 14 Інтерполяція (зміна значення змінної врядку)

// const category = "toys";
// console.log(`http://someurl.com/${category}/1`);

// const user = "John";
// alert(`Hi, ${user}`);

// 15 Оператори

// console.log("arr" + " - object"); // рядок
// console.log(5 + +"5"); // число тому що перед рядком стоїть унарний плюс
// console.log(5 + "5"); // рядок

// let incr = 10;
// let decr = 10;

// // ++ інкремент
// // -- декрамент

// // префіксний
// ++incr;
// --decr;

// console.log(incr);
// console.log(decr);

// console.log(++incr);
// console.log(--decr);

// // постфіксний
// incr++;
// decr--;

// console.log(incr);
// console.log(decr);

// console.log(incr++); // в постфіксній формі спочатку в консолі повертає старе значення
// console.log(decr--);

// console.log(5 % 2); // 1  показує остачу

// // = для присвоєння
// let qwerty = "string";
// console.log(typeof qwerty);

// // == для порівеяня
// console.log(2 + 3 == 5); // true
// console.log(2 + 3 == "5"); // true хоча "5" це рядок

// // для строгого порівняння
// console.log(2 + 3 === "5"); // false

// // Логічні оператор

// // &&(амперсанд) (Shift+7) - і ,
// const isChecked = true;
// const isOpen = true;
// const isClose = false;

// console.log(isChecked && isOpen);
// console.log(isClose && isOpen);

// // || (Shift+Vertical bar) - або
// console.log(isOpen || isClose);

// // ! заперечення
// console.log(!isOpen || isClose);

// // порядок виконання
// console.log(2 + 2 * 2);
// console.log(2 + 2 * 2 === 8);

// 20 Умови

// let number = 50;

// if (number < 50) {
//   console.log("замало");
// } else if (number > 50) {
//   console.log("Забагато");
// } else if (number == 50) {
//   console.log("Правильно");
// }

// // тернарний вираз має 3 аргументи
// number = 50 ? console.log("Правильно") : console.log("Неправильно");
// // Умова ? Умова вірна : умова невірнаж

// // Swiych

// switch (number) {
//   case 49:
//     console.log("Неправильно");
//     break;
//   case 51:
//     console.log("Неправильно");
//     break;
//   case 50:
//     console.log("Правильно");
//     break;
//   default:
//     console.log("Не знаю");
//     break;
// }

// 21 Логічні оператори

// завжди false
// null;
// NaN;
// 0;
// "", '',``; (порожній рядок)
// undefined;

// const hamburger = 3;
// const fries = 2;
// const cola = 1;
// const cebab = 0;
// const cheeseburger = 0;
// const mcflurry = -1;
// const nuggets = 3;

// && і
// if (hamburger === 3 && fries && cola) {
//   console.log("Наївся");
// } else {
//   console.log("Пішов голодний");
// }

// console.log(hamburger && fries && cola); // 1 && повертає останнє  true значення

// console.log(fries && cola && cebab); // 0 && повертає перше  false значення

// || або

// if (hamburger === 3 || fries || cola) {
//   console.log("Посиділи");
// } else {
//   console.log("Пішли");
// }

// console.log(hamburger || fries || cola); // 3 || повертає перше правильне значення
// console.log(cebab || cheeseburger || mcflurry); // -1 || повертає останнє неправильне значеня

// && зупинається на брехні, || зупинається на правді

// let matthewReport,
//   markReport,
//   lukeReport,
//   johnReport = "done";

// console.log(matthewReport || markReport || lukeReport || johnReport);

// // комбіновані

// if ((hamburger === 3 && cola === 2) || (fries === 2 && nuggets)) {
//   console.log("Наївся");
// } else {
//   console.log("Пішов голодний");
// }

// 22 Цикли

// let num = 0;

// // while
// while (num <= 10) {
//   console.log(num);
//   num++;
// }

// // do... while
// do {
//   console.log(num);
//   num++;
// } while (num <= 20);

// // for
// for (let i = 1; i <= 15; i++) {
//   console.log(num);
//   num++;
// }

// for (let l = 1; l <= 10; l++) {
//   if (l === 6) {
//     break; // цикл зупиняєтьс коли умова вірна
//     continue; // пропускає непотрібну умову і рухається далі
//   }
//   console.log(l);
// }

// Цикл в циклі і мітки

// Вкладені цикли
// for  (let i = 0; i < 3; i++) {
//   // і це лічильник , ітератор. Виконання тіла циклу це ітерація
//   console.log(i);
//   for (j = 0; j < 3; j++) {
//     // у вкладеному циклі використовують ітератор j
//     console.log(j);
//   }
// }

// let result = "";
// const length = 7;

// for (let i = 1; i < length; i++) {
//   for (let j = 0; j < i; j++) {
//     result += "*";
//   }

//   result += "\n";
// }

// console.log(result);

// // Мітки
// first: for (i = 0; i < 3; i++) {
//   // first - мітка
//   console.log(i);
//   for (j = 0; j < 3; j++) {
//     console.log(j);
//     for (k = 0; k < 3; k++) {
//       if (k === 2) break first; // уиова зупинити мітку
//       console.log(k);
//     }
//   }
// }

// 25 Функції, стрілкові функції

// let num = 20;

// // деклеративні функції працює ще до того як була оголошена
// function showFirstMessage(text) {
//   // ім'я функції має бути дієсловом із припискою над чим виконується дія
//   console.log(text);
//   let num = 15;
//   console.log(num); //  функція саочатку шукає в собі , якщо немає то піднімається на рівень вище і тд
// }

// showFirstMessage("Пррррррррривіт");
// console.log(num);

// function calc(a, b) {
//   return a + b; // після виконання return функція зупиняється
//   console.log("Text"); // unreachable code недосяжний код , тому що після ретурн функція зупиняється
// }

// console.log(calc(4, 5));

// function ret() {
//   let num = 50;
//   return num;
// }

// const anotherNum = ret();
// console.log(anotherNum);

// // Функціональний вираз
// // створюється тільки тоді коли до неї доходить потік коду, можна використати тільки після оголошення
// const logger = function () {
//   console.log("Пррррррррривіт");
// };

// logger();

// Стрілкова функція

// не має свого контексту
// const calcut = (a, b) => {
//   let result = a * b;
//   console.log(result);
// };

// calcut(6, 8);

// 26 Аргументи функцій

// const usdCurr = 28;
// const euroCurr = 32;

// function convert(amount, curr) {
//   return amount * curr;
// }

// console.log(convert(100, usdCurr));
// console.log(convert(100, euroCurr));

// 27 Return
// const usdCurr = 36;
// const discount = 0.9;

// function convert(amount, curr) {
//   return amount * curr;
// }

// function promotionOne(result) {
//   console.log(result * 1);
// }

// promotionOne(convert(400, usdCurr));

// const resultTwo = convert(500, usdCurr); // проміжна змінна

// promotionOne(resultTwo);

// function test() {
//   for (let i = 0; i < 5; i++) {
//     console.log(i);
//     if (i === 3) return; // якщо return не налаштований то функція повертає undefined
//   }
//   console.log("Кінець");
// }

// test();

// функція без return повертає undefined
// не робити новий рядок після return

// Coding Exercise 6

// 1
// function hello(name) {
//   const result = `Hello, ${name}`;
//   console.log(result);
//   return result;
// }

// hello("Vi");

// 2
// function returnNeighboringNumbers(num) {
//   let result = [num - 1, num, num + 1];
//   console.log(result);
//   return result;
// }

// returnNeighboringNumbers(6);

// 3

// function getMathResult(num, times) {
//   if (typeof times !== "number" || times <= 0) {
//     return num;
//   }

//   let str = "";

//   for (let i = 1; i <= times; i++) {
//     if (i === times) {
//       str += `${num * i}`;
//       // Тут без черточек в конце
//     } else {
//       str += `${num * i}---`;
//       // Это тоже самое, что и
//       // str = str + num * i + "---"
//     }
//   }

//   return str;
// }

// getMathResult(10, 5);

// Методи і властивості чмсел і рядків

// Методи це допоміжні функції ()
// Властивості це допоміжні значення .

// function suma(a, b) {
//   return a + b;
// }

// // Рядок
// const str = "Some simple text";

// // Властивості
// console.log(str.length);

// // Методи
// console.log(str.toLowerCase());
// console.log(str.toUpperCase());

// console.log(str.indexOf("S")); // 0 між великими і малими літерами є різниця
// console.log(str.indexOf("s")); // 5
// console.log(str.indexOf("m")); // 2 якщо зустрічається кілька разів то відображає перший
// console.log(str.indexOf("i")); // 6
// console.log(str.indexOf("q")); // -1 якщоне зустрічається

// console.log(str.slice(5, 11)); // перше число враховується а останнє ні
// console.log(str.slice(5)); // до кінця
// console.log(str.slice(-5, -1)); // може бути від'ємним

// console.log(str.substring(5, 11));

// console.log(str.substr(5, 4));

// // Число
// const num = 3.14;

// // Методи

// console.log(Math.round(num));

// const testsize = "12.25px";
// console.log(parseInt(testsize)); // перетворює на ціле число

// console.log(parseFloat(testsize)); // зберігає дробову частину

// 31 Callback функції

// function first() {
//   setTimeout(() => {
//     console.log("first");
//   }, 500);
// }

// function second() {
//   console.log("second");
// }

// first();
// second();

// // Call-back функція це така функція що має бути виконана коли інша вже завершилась
// function lernJІ(lang, callback) {
//   console.log(`Я учу ${lang}`);
//   callback();
// }

// function order() {
//   console.log(" Вчися краще");
// }

// lernJІ("javascript", function () {
//   console.log(" Ну учи далі");
// });

// lernJІ("JavaScript", order);

// 32 Об'єкти, деструктуризація об'єктів

// const options = {
//   name: "test",
//   width: 1920,
//   height: 1080,
//   colors: { border: "black", background: "grey" },
//   makeTest: function () {
//     console.log("Test"); // власний метод в об'єкті
//   },
// };

// options.makeTest();

// // Дкструктиризація витягнення властивостей з об'єкта в окрему змінну
// const { border, background } = options.colors;
// console.log(border);

// console.log(Object.keys(options).length);

// console.log(options.name);
// console.log(options.colors);

// delete options.name;

// console.log(options);

// // Перебір Об'єкта for in
// for (let key in options) {
//   console.log(`Властивість ${key} має значення ${options[key]}`);
// }

// let counter = 0;
// for (let key in options) {
//   if (typeof options[key] === "object") {
//     for (let i in options[key]) {
//       console.log(`Властивість ${i} має значення ${options[key][i]}`);
//       counter++;
//     }
//   } else {
//     console.log(`Властивість ${key} має значення ${options[key]}`);
//     counter++;
//   }
// }
// console.log(counter);

// 33 Масиви і псевдомасиви

// const arr = [0, 1, 1, 2, 3, 5, 8, 13];
// console.log(arr.sort());
// console.log(arr.sort(compareNum));

// function compareNum(a, b) {
//   return a - b;
// }
// Вдастивість

// кількість елементів у масиві = індекс останнього + 1
// arr[99] = 99;
// console.log(arr.length);
// console.log(arr);

// Методи

// const str = prompt("", "", "");
// const products = str.split(", "); // робить масив
// console.log(products);
// products.sort(); // сортування
// console.log(products.join(", ")); // робить рядок

// кінець масива
// arr.pop(); // видалити
// arr.push(21); // добавити

// // початок масиву використовують рідко щоб не зміщувати index
// // arr.shift(); // видалити
// arr.unshift(100); //  дадати елемент

// console.log(arr);

// методи перебору

// перебір масива за допомогою циклу
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// перебір масива за допомогою for of можна використовувати break і continue
// for (let value of arr) {
//   console.log(value);
// }

// перебір масива за допомогою forEach() найчастіше використовується
// 3 аргументи 1) елемент який перебираєм  2) номер по порядку,   3) посилання на масив що перебираєм
// arr.forEach(function (item, i, arr) {
//   console.log(`${i}: ${item} всередині масиву  ${arr}`);
// });

// Псевдомасив це об'єк структура якого співпадає із структурою масиву, але в нього не буде методів

// 35 Паредача за посиланням

// let a = 6;
// let b = a;

// b = b + 4;

// console.log(a);
// console.log(b);

// const obj = {
//   a: 5,
//   b: 1,
// };

// const copy = obj; // Посилання
// copy.a = 10;

// console.log(obj);
// console.log(copy);

// поверхнева копія на об`єкти в середині об'єкта діє передача за посиланням
// function copy(mainObj) {
//   let copyObj = {};

//   let key;
//   for (key in mainObj) {
//     copyObj[key] = mainObj[key];
//   }
//   return copyObj;
// }

// const numbers = {
//   a: 1,
//   b: 2,
//   c: 3,
//   d: {
//     x: 7,
//     y: 8,
//     z: 9,
//   },
// };

// // const newNumbers = copy(numbers);

// // newNumbers.a = 10;
// // newNumbers.d.x = 33;

// // console.log(numbers);
// // console.log(newNumbers);

// // Object.assign()
// const add = { e: 4, f: 5 };

// console.log(Object.assign(numbers, add));
// console.log(Object.assign({}, add));

// const clone = Object.assign({}, add);
// clone.g = 7;

// console.log(add);
// console.log(clone);

// // Копія масиву
// const oldArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

// const newArr = oldArray; // Передача за посиланням
// console.log(newArr);

// const newArray = oldArray.slice(); // копія
// newArray[1] = "Заміна";

// console.log(oldArray);
// console.log(newArray);

// // ... Spead-оператор

// // в масиві

// const messengers = ["WhatsApp", "Viber", "Telegram"];
// const socialNetwprk = ["Facebook", "Instagram", "Tiktok"];

// const internet = [...messengers, ...socialNetwprk, "Youtube", "Vimeo"];
// console.log(internet);

// const num = [7, 8, 9];

// function log(a, b, c) {
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }

// log(...num);

// const oldArr = ["a", "b", "c"];
// const newArra = [...oldArr];
// console.log(newArra);

// // в обєкті

// const q = { a: 1, b: 2, c: 3 };

// const qCopy = { ...q };
// qCopy.d = 4;

// console.log(q);
// console.log(qCopy);
