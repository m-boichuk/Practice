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

// 19 Практика Частина 1
/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

// const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

// const personalMovieDB = {
//   count: numberOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false,
// };

// const a = prompt("Один из последних просмотренных фильмов", "");
// const b = +prompt("На сколько оцените его?", "");
// const c = prompt("Один из последних просмотренных фильмов", "");
// const d = +prompt("На сколько оцените его?", "");

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);

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

// Coding Exercise 3
// 1
// let i = 5;
// while (i < 11) {
//   console.log(i);
//   i++;
// }

// // 2
// for (let j = 20; j > 9; j--) {
//   if (j === 13) {
//     break;
//   }
//   console.log(j);
// }

// // 3
// for (let k = 1; k < 11; k++) {
//   if (k % 2 !== 0) {
//     continue;
//   }
//   console.log(k);
// }

// // 4
// let l = 1;
// while (l < 16) {
//   l++;
//   if (l % 2 === 0) {
//     continue;
//   } else {
//     console.log(l);
//   }
// }

// // 5
// const arrayOfNumbers = [];

// for (let o = 5; o < 11; o++) {
//   arrayOfNumbers.push(o);
// }

// Coding Exercise 4

// 1
// const arr = [3, 5, 8, 16, 20, 23, 50];
// const result = [];

// for (let i = 0; i < arr.length; i++) {
//   result[i] = arr[i];
// }

// 2
// const data = [5, 10, "Shopping", 20, "Homework"];
// for (let i = 0; i < data.length; i++) {
//   if (typeof data[i] === "number") {
//     data[i] = data[i] * 2;
//   } else if (typeof data[i] === "string") {
//     data[i] = `${data[i]} - done`;
//   }
// }

// console.log(data);
// return data;

// 3
// const data = [5, 10, "Shopping", 20, "Homework"];
// const result = [];
// for (let i = 1; i <= data.length; i++) {
//   result[i - 1] = data[data.length - i];
// }

// console.log(result);
// return result;

// 24 Практика Частина 2
/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

// const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

// const personalMovieDB = {
//   count: numberOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false,
// };

// for (let i = 0; i < 2; i++) {
//   const a = prompt("Один из последних просмотренных фильмов?", ""),
//     b = prompt("На сколько оцените его?", "");

//   if (a != null && b != null && a != "" && b != "" && a.length < 50) {
//     personalMovieDB.movies[a] = b;
//     console.log("done");
//   } else {
//     console.log("error");
//     i--; // повертає цикл назад
//   }
// }

// if (personalMovieDB.count < 10) {
//   console.log("Просмотрено довольно мало фильмов");
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//   console.log("Вы классический зритель");
// } else if (personalMovieDB.count >= 30) {
//   console.log("Вы киноман");
// } else {
//   console.log("Произошла ошибка");
// }

// console.log(personalMovieDB);

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
