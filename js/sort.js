// Array.prototype.sort()
// Сортирует и ИЗМЕНЯЕТ оригинальный массив !!!!

// const numbers = [1, 9, 6, 2, 3];
// numbers.sort();
// Обычный сорт - сортирует числа от маленького к большому

// numbers.sort(function (prev, next) {
//   return next - prev;
//   // ! по-убыванию !
// });
// console.log(numbers);

/**
 * Как сделать копию массива чтобы не сортировать оригинальный
 */

// Метод slice() делает копию елементов массива на котором мы его вызвали -> !
// если мы туда ничего не передали, то он просто ставит все елементы как и в оригинально массиве, но они не равны
// const copy = numbers.slice();
// console.log(copy);

// поэлементно распыляем стврый массив в новый

// const copy = [...numbers].sort();
// console.log('Отсортированная копия нашего массива', copy);
// console.log('Наш оригинальный массив', numbers);

/**
 * Сортируем массив
 */

// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, online: false },
//   { id: 'player-2', name: 'Poly', timePlayed: 110, online: true },
//   { id: 'player-3', name: 'Ajax', timePlayed: 130, online: false },
//   { id: 'player-4', name: 'Kiwi', timePlayed: 230, online: false },
//   { id: 'player-5', name: 'Chelsey', timePlayed: 190, online: true },
// ];

// const sortedByTopPlayers = [...players].sort(function (prevPlayer, nextPlayer) {
//   // по-возрастанию значения свойства
//   return nextPlayer.timePlayed - prevPlayer.timePlayed;

//   // по-убыванию значения свойства
//   // return nextPlayer.timePlayed - prevPlayer.timePlayed;
// });

// const sortByWorstPlayers = [...players].sort(function (prevPlayer, nextPlayer) {
//   return prevPlayer.timePlayed - nextPlayer.timePlayed;
// });

// console.log('отсортированный массив игроков top->');
// console.table(sortedByTopPlayers);

// console.log('отсортированный массив игроков по худшим ->');
// console.table(sortByWorstPlayers);

// console.log('наш неизмененный оригинальный массив ->');
// console.table(players);

// Recoding

/**
 * Метод изменяет оригинальный массив
 */

const numbers = [1, 3, 5, 6, 9];
/**
 * Как он перебирает ?
 * Он приводит эти числа в строку и потом сортирует
 * с помощью unicode от меньшего к большему
 * - unicode -> у каждого символа есть свое значение (1 - 0031)
 */
numbers.sort();
// console.log('numbers', numbers);

const letters = ['a', 'B', 'A', 'b'];
// в unicode заглавные буквы имеют больший приоритет
letters.sort();
console.log(letters);

/**
 * Compare function - функция сравнения (callback)
 * елементы массива сортируются в соответствии с ее возвращаемым значением
 *  - если compareFunction(A, B) меншьше 0, то сортировка поставит А перед В
 *  - если compareFunction(A, B) больше 0, то сортировка поставит В перед А
 *  - если compareFunction(A, B) вернет 0, то сортировка оставит А и В
 * неизменимыми по отношению друг к другу, но отсортирует их по отношению ко всем
 * другим елементам
 */

// Возрастание
// numbers.sort((curEl, nextEl) => {
//   return curEl - nextEl;
//   /*
//    * Разберем
//    * 1 - 9 = -8 это значит что 1 идет перед 9
//    * 9 - 6 = 3 вернуло больше нуля значит текущий больше
//    * чем следущий значит меняем местами
//    * 6 - 2 = 4 меняем местами потому что больше 0
//    * 2 - 3 = -1 значит 2 идет перед 3
//    */
// });

// console.log(numbers);

// Убывание

// numbers.sort((curEl, nextEl) => {
//   return nextEl - curEl;
// });
// console.log(numbers);

/**
 * Как сделать копию чтобы не сортировать оригинальный
 * массив ?
 * Array.prototype.slice();
 * операция spread (... итд)
 */

// const copy = [...numbers];
// Теперь можно сортировать копию без изменения ориг массива

/**
 * 2 вариант - не создавать промежуточную переменную
 * а сделать все сразу
 */

// const ascSortedNumbers = [...numbers].sort((a, b) => a - b);
// const descSortedNumbers = [...numbers].sort((a, b) => b - a);
// console.log('ascSortedNumbers', ascSortedNumbers);
// console.log('descSortedNumbers', descSortedNumbers);
// console.log('original array', numbers);

const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 230 },
  { id: 'player-2', name: 'Poly', timePlayed: 300 },
  { id: 'player-3', name: 'Ajax', timePlayed: 270 },
  { id: 'player-4', name: 'Bingo', timePlayed: 310 },
];

// По игровому времени
// от лучших к худшим
const sortedByBestPlayer = [...players].sort(
  (prevPlayer, nextPlayer) => nextPlayer.timePlayed - prevPlayer.timePlayed
);
console.table(sortedByBestPlayer);

// от худших к лучшим
const sortedByWorstPlayer = [...players].sort(
  (prevPlayer, nextPlayer) => prevPlayer.timePlayed - nextPlayer.timePlayed
);
console.table(sortedByWorstPlayer);

// Сортируем по имени
const byName = [...players].sort((a, b) => {
  // сравниваются charcode больше или меньше
  const result = a.name[0] > b.name[0];

  if (result) {
    return 1;
  }

  if (!result) {
    return -1;
  }
});

console.table(byName);
