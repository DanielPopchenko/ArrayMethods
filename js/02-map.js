// Чистый метод, потому что оригинальный массив не мутирует !!!
// На каждой итерации, для каждого елемента вызывается колбэк !
// На свое место map() возвращает обьект такой же длинны, возвращает результат какогото действия с елементом
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const mappedNumbers = numbers.map(function (el, idx, arr) {
//   console.log(el);
//   console.log(idx);
//   console.log(arr);

//   return el;
// });

// console.log(mappedNumbers);

// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 120, points: 81, online: false },
//   { id: 'player-2', name: 'Poly', timePlayed: 270, points: 56, online: true },
//   { id: 'player-3', name: 'Ajax', timePlayed: 180, points: 37, online: true },
//   { id: 'player-4', name: 'Chelsey', timePlayed: 90, points: 29, online: false },
// ];

// /**
//  *  1) Получаем массив всех игроков
//  */

// /**
//  * Создает пустой массив, обходит их циклом и пушит в новый массив такой же длинны как и исходный
//  */

// const playerName = players.map(function (player) {
//   return player.name;
// });
// console.log(playerName);

// /**
//  * Увеличиваем кол-во поинтов каждого игрока
//  */

// const improvedPoints = players.map(function (player) {
//   return {
//     ...player,
//     points: player.points + player.points * 0.1,
//   };
// });

// console.table(improvedPoints);

// /**
//  * Увеличиваем кол-во часов игрока по id
//  */

// const playerIdToUpdate = 'player-4';

// const updatedPlayers = players.map(function (player) {
//   if (player.id === playerIdToUpdate) {
//     console.log('Нашли нужного');
//     return {
//       ...player,
//       timePlayed: player.timePlayed + 50,
//     };
//   }

//   return player;
// });

// console.table(updatedPlayers);

/**
 * map() нужен для того чтобы создать едентичную коллекция елементов, но уже
 * с измененным значением !!!
 */

// map своими руками

/**
 * 1. создает и возвращает ноый массив
 * 2. перебирает оригинальный массив
 * 3. вызывает колбек для каждого элемента и кидает туда аргументы
 * 4. записываем результат вызова функции в новый массив
 */

// const numbers = [5, 10, 15, 20, 25];

// const map = function (array, callback) {
//   const newArr = [];

//   for (let i = 0; i < array.length; i += 1) {
//     const result = callback(array[i], i, array);
//     newArr.push(result);
//   }

//   return newArr;
// };

// const dobledNumbers = map(numbers, function (number, idx, arr) {
//   console.log(number);

//   return number * 2;
// });

// console.log(dobledNumbers);

/**
 * !!!!! - !!!!!! Practising --- 2 !!!!!!!! - !!!!!!!
 */

/**
 * Array.prototype.map()
 * Поэлементно перебирает массив
 * Не изменяет оригинальный массив
 * Возвращает новый массив оригинальной длинны
 */

// ---------  Example - 1
// const numbers = [5, 10, 15, 20, 25];

// const doubledNumbers = numbers.map(number => {
//   console.log(number);

//   return number * 2;
// });

// Если нету явного возврата то возвратит undefined
// console.log('doubledNumbers', doubledNumbers);

// ---------- Example - 2 (Users)

const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 320, points: 75, online: false },
  { id: 'player-2', name: 'Ajax', timePlayed: 130, points: 20, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 440, points: 80, online: false },
  { id: 'player-4', name: 'Chelsey', timePlayed: 555, points: 95, online: false },
  { id: 'player-5', name: 'Poly', timePlayed: 230, points: 20, online: true },
];

console.table(players);

// const playerNames = players.map(player => player.name);
// const playerIds = players.map(player => player.id);

// console.log('playerNames', playerNames);
// console.log('playerIds', playerIds);

// const res = players.map(({ name, online }) => {
//   return {
//     name,
//     online,
//   };
// });

// console.log('res', res);

/**
 *  !!! --- На место старого объекта мы возвращаем новые с перезаписанным свойством --- !!!
 */
// const updatedPlayers = players.map(player => ({
//   // Распыляем обьект
//   ...player,
//   // Перезаписываем значение поинтс на +10%
//   points: player.points * 1.1,
// }));

// console.table(updatedPlayers);

// Что если надо обновить не всех, а только одного игрока
/**
 * Почему используем map
 * Потому что мы хотим получить новый массив с измененным свойством
 */
const playerIdToUpdate = 'player-3';

const updatedPlayers = players.map(
  player =>
    playerIdToUpdate === player.id
      ? {
          ...player,
          timePlayed: player.timePlayed + 100,
        }
      : player
  /**
   *  !!! вышенаписанное эквивалентно ->
   *
   * return условие
   * ? сделай если истина
   * : сделай если ложь
   */
);

console.table(updatedPlayers);

/**
 * Умеет :
 * 1) Неизменно обновить весь массив и вернуть новый, обновленный с одним или нескольким обновленным обьектом
 * 2) Вернуть массив с одним обновленным обьектом
 */

const obj = {
  a: 5,
  b: {
    c: 2,
    x: 10,
  },
};

console.log(obj);

const copy = {
  ...obj,
};

console.log(copy);
// будет тру потому что это ссылка на одно и тоже
console.log(copy.b === obj.b);
