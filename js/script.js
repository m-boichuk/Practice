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

// 19 Практика
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
