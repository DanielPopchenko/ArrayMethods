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
