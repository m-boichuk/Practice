"use strict";

// Coding Exercise 1

// const userName = "John";
// let userNumber = 25;
// userNumber = 24;

// // Coding Exercise 2

// let storeName = "Bodyshop";
// let storeDescription = {
//   budget: 10000,
//   employees: ["Anna", "Hannah", "Arma"],
//   products: { notebook: 30, pen: 5 },
//   open: true,
// };

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

// Coding Exercise 7

// 1
// function calculateVolumeAndArea(num) {
//   if (num <= 0 || typeof num === "string" || !Number.isInteger(num)) {
//     let resultat = "При вычислении произошла ошибка";
//     console.log(resultat);
//     return resultat;
//   } else {
//     let volume = num * num * num;
//     let area = num * num * 6;
//     let result = `Объем куба: ${volume}, площадь всей поверхности: ${area}`;
//     console.log(result);
//     return result;
//   }
// }

// calculateVolumeAndArea(1.5);
// // тут я використав забагато прохідних змінних,

// // 2

// function getCoupeNumber(number) {
//   if (number < 0 || typeof number === "string" || !Number.isInteger(number)) {
//     return "Ошибка. Проверьте правильность введенного номера места";
//   }
//   if (number === 0 || number > 36) {
//     return "Таких мест в вагоне не существует";
//   }
//   let result = Math.ceil(number / 4);
//   console.log(result);
//   return result;
// }
// getCoupeNumber(6);

// `Coding Exercise 8`

// 1
// function getTimeFromMinutes(minutes) {
//   let hours = Math.floor(minutes / 60);
//   let minut = minutes % 60;
//   let result = `Зараз ${hours} година і ${minut} хвилин`;
//   console.log(result);
// }

// getTimeFromMinutes(500);

// function findMaxNumber(a, b) {
//   console.log(findMaxNumber.length);
// }

// findMaxNumber(1, 2, 3, 4);

// // 2
// function findMaxNumber(a, b, c, d) {
//   // Самое простое - это использовать Math.max :)
//   // А оптимизировать такую проверку мы научимся совсем скоро
//   if (
//     typeof a !== "number" ||
//     typeof b !== "number" ||
//     typeof c !== "number" ||
//     typeof d !== "number"
//   ) {
//     return 0;
//   } else {
//     return Math.max(a, b, c, d);
//   }
// }

// findMaxNumber(1, 5, 6.6, 10.5);
// findMaxNumber(1, 5, "6", "10");

// Coding Exercise 9 Послідовніст Фібоначі

// function fib(num) {
//   if (typeof num !== "number" || num <= 0 || !Number.isInteger(num)) {
//     return "";
//   }

//   let result = "";
//   let first = 0;
//   let second = 1;

//   for (let i = 0; i < num; i++) {
//     if (i + 1 === num) {
//       result += `${first}`;
//       // Без пробела в конце
//     } else {
//       result += `${first} `;
//     }

//     let third = first + second;
//     first = second;
//     second = third;
//   }

//   return result;
// }

// fib(5);
