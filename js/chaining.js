// Цепочки вызовов - chaining

// const numbers = [1, 5, 2, 4, 3];

// const greaterThanTwo = numbers.filter(function (num) {
//   return num > 2;
// });
// // console.log(greaterThanTwo);

// const multByThree = greaterThanTwo.map(function (num) {
//   return num * 3;
// });
// // console.log(multByThree);

// const sorted = multByThree.sort(function (a, b) {
//   return a - b;
// });
// // console.log(sorted);

// // ! chaining !
// /**
//  * !ретернется массив на котором мы вызываем метод map
//  * !потом на массиве который вернулся после результата работы map
//  * !вызывается sort и нам возвращается массив отсортированных чисел
//  * !Но Все Это Цепочка Вызовов(позволяет нам не создавать промежуточный переменные)
//  */
// const res = numbers
//   .filter(function (num) {
//     return num > 2;
//   })
//   .map(function (num) {
//     return num * 3;
//   })
//   .sort(function (a, b) {
//     return a - b;
//   });

// console.log(res);

// -----------------------

// const players = [
//   { id: 'player-1', name: 'Mango', rank: 300, online: true },
//   { id: 'player-2', name: 'Poly', rank: 250, online: true },
//   { id: 'player-3', name: 'Ajax', rank: 900, online: false },
//   { id: 'player-4', name: 'Kiwi', rank: 700, online: false },
//   { id: 'player-5', name: 'Chelsey', rank: 500, online: true },
// ];

// const onlineAndSorted = players
//   .filter(function (player) {
//     return player.online;
//   })
//   .sort(function (prevPlayer, nextPlayer) {
//     return prevPlayer.rank - nextPlayer.rank;
//   });
// /**
//  * Оригинальный массив не менятеся потому, что мы вызываем sort
//  * на результате работы, тоесть на новом массиве, который вернул filter()
//  */

// console.table(onlineAndSorted);

const numbers = [1, 5, 2, 4, 3];
// const greaterThenTwo = numbers.filter((num) => num > 2);
// console.log("greaterThenTwo", greaterThenTwo);

// const multByThree = greaterThenTwo.map((num) => num * 3);
// console.log(multByThree);
// const sorted = multByThree.sort((a, b) => a - b);

/**
 * Цепочка вызовов, сделали все тоже самое что и вверху только
 * намного короче и без доп переменных
 * все наши методы возвращают нам массив поэтому мы можем
 * делать эту цепочку методов работы с массивом
 */
const sorted = numbers
  .filter((num) => num > 2)
  .map((num) => num * 3)
  .sort((a, b) => a - b);
console.log(sorted);

/**
 * Сортируем тех кто онлайн по рангу
 * фильтруем и потом сортируем
 */

const players = [
  { id: "player-1", name: "Mango", rank: 300, online: true },
  { id: "player-2", name: "Poly", rank: 250, online: true },
  { id: "player-3", name: "Ajax", rank: 900, online: false },
  { id: "player-4", name: "Kiwi", rank: 700, online: false },
  { id: "player-5", name: "Chelsey", rank: 500, online: true },
];

const onlineAndSorted = players
  .filter((player) => player.online)
  .sort((plA, plB) => plA.rank - plB.rank);
console.table(onlineAndSorted);

/**
 * Chaining в методах обьекта как jquery
 */

const element = {
  class: "",
  hovered: false,
};
