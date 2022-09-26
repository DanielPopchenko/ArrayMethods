// Библиотека lodash
// console.dir(_);

/**
 * isEmpty()
 * - Проверяет пустая или не пустая сущность
 * для проверки массива или обьекта
 */

// console.log(_.isEmpty({}));
// console.log(_.isEmpty({ a: 1 }));

/**
 * get()
 *
 * - user && user.location && obj.location.city
 * - user?.location?.city
 */

const user = {
  name: 'Mango',
  location: {
    coords: [1, 2],
    city: {
      name: 'Kharkiv',
      coords: [1, 2, 3, 4],
    },
  },
};

console.log(_.get(user, 'location.city.name'));
/**
 * Новый синтаксис обработки ошибки есть ли такое свойство или нет
 */
// console.log(user?.location?.city?.name);

/**
 * _.union()
 * Сделать массив неповторяющихся елементов в нескольких массивах
 */
console.log('union', _.union([1, 2, 3, 4], [4, 5, 6, 7]));

/**
 * _.range()
 */

console.log('range', _.range(4));
console.log('range', _.range(1, 11, 1));

/**
 * _.SortBy()
 * один из методов сортировки
 */

const users = [
  { name: 'Fred', age: 30, hobbies: ['football', 'reeding'] },
  { name: 'Barney', age: 21 },
  { name: 'Alex', age: 42 },
  { name: 'Carel', age: 28 },
];

console.log('sortBy', _.sortBy(users, ['name', 'age']));

/**
 *  _.sum(), _.sumBy()
 */

console.log('sum', _.sum([1, 2, 3, 4, 5]));

const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 120, points: 81, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 270, points: 56, online: true },
  { id: 'player-3', name: 'Ajax', timePlayed: 70, points: 37, online: true },
  { id: 'player-4', name: 'Chelsey', timePlayed: 90, points: 29, online: false },
  { id: 'player-5', name: 'Chelsey', timePlayed: 5, points: 32, online: true },
  { id: 'player-6', name: 'Chelsey', timePlayed: 430, points: 93, online: true },
];

const summaryTimePlayed = players.reduce((acc, player) => acc + player.timePlayed, 0);
console.log('summary Time Played using reduce -> ', summaryTimePlayed);
// lodash method
console.log(
  'summary Time Played using lodash method sumBy -> ',
  _.sumBy(players, player => player.timePlayed)
);

/**
 * uniq(), uniqBy()
 * sortedUniq(), sortedUniqBy()
 */

/**
 * min(), minBy()
 */

console.log(_.minBy(players, player => player.timePlayed));

/**
 * camelCase(), capitalize(), kebabCase(), lowerCase(), upperCase()
 * - camelCase() - приводит строку в кэмлКейс
 * - capitalize() - приводит первую букву строки в upperCase остальные в lowerCase
 * - kebabCase() - превращает строку в шашлычок (hello-my-name-is-bob)
 * - lowerCase & upperCase - это все понятно и так
 */

console.log(
  'приводит вот эту строку (---hello-world-_-_-) вот в это ->>',
  _.camelCase('---hello-world-_-_-')
);
console.log(_.capitalize('FReD Is AWEsome'));
console.log(_.kebabCase('Hello, my name is Bob'));
