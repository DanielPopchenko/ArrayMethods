/**
 * Array.find()
 * - Поэлементно перебирает массив
 * - Возвращает первый елемент удовлетворяющий условие или undefined
 */

// const numbers = [5, 10, 15, 20, 25];

// // метод Array.find используется для того чтобы найти в коллекции один удовлетворяющий условие елемент и закончить перебор

// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 300, points: 30, online: true },
//   { id: 'player-2', name: 'Chelsey', timePlayed: 350, points: 50, online: false },
//   { id: 'player-3', name: 'Poly', timePlayed: 120, points: 40, online: true },
//   { id: 'player-4', name: 'Ajax', timePlayed: 280, points: 90, online: false },
//   { id: 'player-5', name: 'Kiwi', timePlayed: 190, points: 10, online: true },
// ];

// // const number = numbers.find(function (n) {
// //   return n > 10;
// // });

// // console.log(number);

// const playerIdToFind = 'player-1';

// // Найти уникальный елемент в коллекции
// const player = players.find(function (player) {
//   return player.id === playerIdToFind;
// });

// console.log(player);

// ---- round 2 -------

// ! Для поиска уникального елемента в нашем массиве !
// ! Возвращает 1 елемент который удовлетворил условие !
// если он ничего не нашел, то возвращается undefind

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const numberToFind = 5;
// const findNumber = numbers.find(function (number) {
//   return number === 5;
// });
// console.log(numberToFind);

// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 120, points: 81, online: false },
//   { id: 'player-2', name: 'Poly', timePlayed: 270, points: 56, online: true },
//   { id: 'player-3', name: 'Ajax', timePlayed: 70, points: 37, online: true },
//   { id: 'player-4', name: 'Chelsey', timePlayed: 90, points: 29, online: false },
//   { id: 'player-5', name: 'Chelsey', timePlayed: 5, points: 32, online: true },
//   { id: 'player-6', name: 'Chelsey', timePlayed: 430, points: 93, online: true },
// ];

// const idToFind = 'player-5';

// const findPlayer = players.find(function (player) {
//   return player.id === idToFind;
// });

// console.log(findPlayer);

// --------- Practising - 2 ------------

/**
 * Находит 1 уникальный елемент
 */

const numbers = [1, 2, 3, 4, 5, 10];

const five = numbers.find(number => number == 5);
console.log(five);

// Example --- 2

const players = [
  { id: 'player-1', name: 'Kelly', age: 19 },
  { id: 'player-2', name: 'Daniil', age: 23 },
  { id: 'player-3', name: 'Kelly', age: 37 },
  { id: 'player-4', name: 'Poly', age: 20 },
  { id: 'player-5', name: 'Kelly', age: 31 },
  { id: 'player-5', name: 'Anton', age: 27 },
];

// const playerIdToFind = 'player-3';

// const playerWithId = players.find(({ id }) => id === playerIdToFind);
// console.log(playerWithId);

// const playerNameToFind = 'Poly';

// const playerWithName = players.find(({ name }) => name === playerNameToFind);
// console.log(playerWithName);

/**
 * --- Убрали слово return и скобки (просто такой синтаксис) ---
 */
// const findPlayerByName = (allPlayers, playerName) =>
//   allPlayers.find(player => player.name === playerName);

const findPlayerByName = (allPlayers, playerName) => {
  return allPlayers.find(player => player.name === playerName);
};

console.log(findPlayerByName(players, 'Daniil'));
console.log(findPlayerByName(players, 'Anton'));
