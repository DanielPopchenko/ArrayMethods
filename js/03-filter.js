// ------- round-2 ------

/**
 * Array.prototype.filter()
 * Поэлементно перебирает новый массив
 * Возвращает новый массив
 * Добавляет в новый массив елементы которые удовлетворяют условие (true)
 * !!! Всегда возвращает массив !!! Даже если ни один елемент не подошел
 */

// const numbers = [5, 10, 15, 20, 25];

// const filteredNumbers = numbers.filter(function (number) {
//   return number > 14;
// });

// console.log(filteredNumbers);
// // ----------------------------

// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 120, points: 81, online: false },
//   { id: 'player-2', name: 'Poly', timePlayed: 270, points: 56, online: true },
//   { id: 'player-3', name: 'Ajax', timePlayed: 70, points: 37, online: true },
//   { id: 'player-4', name: 'Chelsey', timePlayed: 90, points: 29, online: false },
//   { id: 'player-5', name: 'Chelsey', timePlayed: 5, points: 32, online: true },
//   { id: 'player-6', name: 'Chelsey', timePlayed: 430, points: 93, online: true },
// ];

// /**
//  * Получаем массив всех онлайн игроков
//  */
// const onlinePlayers = players.filter(function (player) {
//   return player.online;
// });

// const oflinePlayers = players.filter(function (player) {
//   return !player.online;
// });

// console.table(onlinePlayers);
// console.table(oflinePlayers);

// const hardcorePlayers = players.filter(function (player) {
//   return player.timePlayed > 100 && player.points > 30;
// });
// console.table(hardcorePlayers);

// ------------ practising-2 -------------------------------

const numbers = [5, 10, 15, 20, 25];

const filteredNumbers = numbers.filter(number => {
  console.log(number);

  return number > 10;
});
console.log(filteredNumbers);
// ---------- Example - 2 -----------

const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 300, points: 55, online: true },
  { id: 'player-2', name: 'Alex', timePlayed: 270, points: 55, online: false },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 55, online: true },
  { id: 'player-4', name: 'Chelsey', timePlayed: 100, points: 55, online: true },
];

const onlinePlayers = players.filter(player => player.online);
console.log('Online players ->');
console.table(onlinePlayers);

const oflinePlayers = players.filter(player => !player.online);
console.log('Ofline players ->');
console.table(oflinePlayers);

const hardcorePalyers = players.filter(player => player.timePlayed > 250);
console.log('Hardcore players ->');
console.table(hardcorePalyers);

console.log('Неизмененный массив', players);
