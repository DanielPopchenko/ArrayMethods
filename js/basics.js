// const numbers = [1, 2, 3, 4, 5];

// // for (let i = 0; i < numbers.length; i += 1) {
// //   console.log(numbers[i]);
// // }

// // numbers.forEach(num => console.log(num));

// numbers.forEach((number, index) => console.log(`index ${index}, value ${number}`));

// const users = [
//   { id: '000', name: 'Mango', isActive: true },
//   { id: '001', name: 'Poly', isActive: false },
//   { id: '002', name: 'Ajax', isActive: true },
//   { id: '003', name: 'Chelsey', isActive: false },
// ];

// const user = users.find(user => user.id === '002');
// console.log(user);

// const getUserById = (arr, id) => arr.find(x => x.id === id);

// console.log(getUserById(users, '001'));
// console.log(getUserById(users, '003'));

// const users2 = [
//   { id: '005', name: 'Chelsey', isActive: true },
//   { id: '009', name: 'Daniel', isActive: false },
//   { id: '006', name: 'Nikita', isActive: true },
//   { id: '008', name: 'Lena', isActive: false },
// ];

// console.log(getUserById(users2, '009'));
// const daniel = getUserById(users2, '009');
// console.log(daniel);

// const numbers = [1, 2, 3, 4, 5];
// const summ = numbers.reduce((acc, value) => acc + value, 0);
// console.log(summ); // 15

// --- Перебирающие методы массивов ------

// forEach -  просто перебирает массив, больше не делают ничего, альтернатива for...of; for ...

// const numbers = [5, 10, 15, 20, 25, 30];
// numbers.forEach(function (element, index, array) {
//   console.log(element);
//   console.log(index);
//   console.log(array);
// });

// Array.map - перебирает массив поелементно, что то делает с каждым из них и записывает в !новый! массив то что вернет эта функция

// const numbers = [5, 10, 15, 20, 25, 30];

// const mappedNumbers = numbers.map(function (element, index, array) {
//   console.log(element);
//   console.log(index);

//   return element * 2;
// });

// console.log('numbers before map', numbers);
// console.log('numbers after map in the new array', mappedNumbers);

// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 300, points: 30, online: false },
//   { id: 'player-2', name: 'Chelsey', timePlayed: 350, points: 50, online: true },
//   { id: 'player-3', name: 'Poly', timePlayed: 410, points: 40, online: false },
//   { id: 'player-4', name: 'Ajax', timePlayed: 280, points: 90, online: false },
//   { id: 'player-5', name: 'Kiwi', timePlayed: 190, points: 10, online: true },
// ];

// /**
//  * Получаем массив имен всех игроков
//  */

// const playerNames = players.map(function (player) {
//   return player.name;
// });

// console.log(playerNames);

/**
 * Увеличиваем кол-во поинтов для наших игроков
 */

// const updatedPlayers = players.map(function (player) {
//   // console.log(player);

//   return {
//     ...player,
//     points: player.points + player.points * 0.1,
//     // ! перезаписываем points !
//   };
// });

// console.log('players before map -->');
// console.table(players);
// console.log('updatedPlayers (after map) -->');
// console.table(updatedPlayers);

/**
 * Увеличиваем кол-во часов игрока по id
 */

// const playerIdToUpdate = 'player-3';

// const updatedPlayer = players.map(function (player) {
//   console.log(player.id);

//   if (player.id === playerIdToUpdate) {
//     console.log('Нашли нужного !!!');
//     return {
//       ...player,
//       timePlayed: player.timePlayed + 50,
//     };
//   }

//   return player;
// });

// console.table(updatedPlayer);

// ------ Array.filter() ------

/**
 * Array.filter() - тоже перебирает массив поелементно
 * создает новый пустой массив
 * Если переданная функция по условию возвращает true, то елемент помещается в массив, если возвращает false, то елемент в массив не помещается
 * --!-- Эта функция вызывается для каждого елемента массива, если тру то добававляется если фолс то нет
 */

// const numbers = [5, 10, 15, 20, 25];

// const filteredNumbers = numbers.filter(function (number) {
//   return number > 10;
// });

// console.log(filteredNumbers);

const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 300, points: 30, online: true },
  { id: 'player-2', name: 'Chelsey', timePlayed: 350, points: 50, online: false },
  { id: 'player-3', name: 'Poly', timePlayed: 120, points: 40, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 280, points: 90, online: false },
  { id: 'player-5', name: 'Kiwi', timePlayed: 190, points: 10, online: true },
];

/**
 * Находим всех онлайн игроков
 */

const onlinePlayers = players.filter(function (player) {
  return player.online;
});

console.log('Online players ->');
console.table(onlinePlayers);

/**
 * Находим всех офлайн игроков
 */

const oflinePlayers = players.filter(function (player) {
  return !player.online;
});

console.log('Ofline players ->');
console.table(oflinePlayers);

/**
 * выбираем игроков который отыграли больше чем 200 часов
 */

const hardcorePlayers = players.filter(function (player) {
  return player.timePlayed > 200;
});

console.log('Hardcore players ->');
console.table(hardcorePlayers);
