/**
 * Array.prototype.every();
 * Поэлементно перебирает массив
 * возвращает true если все елементы массива удовлетворяют условия
 * перебирает до первго false
 */

// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 300, points: 30, online: true },
//   { id: 'player-2', name: 'Chelsey', timePlayed: 350, points: 50, online: false },
//   { id: 'player-3', name: 'Poly', timePlayed: 190, points: 40, online: true },
//   { id: 'player-4', name: 'Ajax', timePlayed: 280, points: 90, online: true },
//   { id: 'player-5', name: 'Kiwi', timePlayed: 170, points: 20, online: false },
// ];

// const isAllOnline = players.every(function (player) {
//   return player.online;
// });

// console.log('isAllOnline(Не все онлайн поэтому возвращает --->>>', isAllOnline); // Возвращает false потому, что не во всей коллекции пользователи активны

// const avaragedInPlayTime = players.every(function (player) {
//   return player.timePlayed > 100 && player.points > 15;
// });

// console.log(
//   'avaragedInPlayTime( Каждый из наших игроков отыграл больше 100 часов и кол-во поинтов > 15 ->',
//   avaragedInPlayTime
// );

// /**
//  * Array.prototype.some();
//  * Поэлементно перебирает массив
//  * возвращает true если хотя бы один елемент массива удовлетворяют условие
//  * перебирает до первого true
//  */

// const secondPackOfPlayers = [
//   { id: 'player-1', name: 'Mango', timePlayed: 410, points: 54, online: true },
//   { id: 'player-2', name: 'Chelsey', timePlayed: 350, points: 53, online: false },
//   { id: 'player-3', name: 'Poly', timePlayed: 190, points: 40, online: true },
//   { id: 'player-4', name: 'Ajax', timePlayed: 280, points: 90, online: true },
//   { id: 'player-5', name: 'Kiwi', timePlayed: 170, points: 10, online: false },
// ];

// const isAnyOnline = secondPackOfPlayers.some(function (player) {
//   return player.online;
// });

// console.log('isAnyOnline : ', isAnyOnline);

// const anyHardCorePlayer = secondPackOfPlayers.some(function (player) {
//   return player.timePlayed > 400 && player.points > 50;
// });

// console.log('anyHardCorePlayer : ', anyHardCorePlayer);

/**
 * every и some возвращает буль (true/false);
 */

// Practising --- 2

const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 300, points: 30, online: true },
  { id: 'player-2', name: 'Chelsey', timePlayed: 350, points: 50, online: false },
  { id: 'player-3', name: 'Poly', timePlayed: 190, points: 40, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 280, points: 90, online: true },
  { id: 'player-5', name: 'Kiwi', timePlayed: 170, points: 20, online: false },
];

/**
 * Array.prototype.every()
 */

const areAllOnline = players.every(player => player.online);
// Будет false, потому что не все игроки онлайн
console.log('Все ли игроки онлайн ->', areAllOnline);

const areAllYardcorePlayers = players.every(player => player.timePlayed > 100);
console.log('Все ли игроки сыграли больше 100 часов -> ', areAllYardcorePlayers);

/**
 * Array.prototype.some()
 */
const isAnyOnline = players.some(player => player.online);
console.log('Есть ли хотя бы один игрок онлайн ? ->', isAnyOnline);
