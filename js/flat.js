/**
 * Array.prototype.flat(depth)
 * - Разглаживает массив до указанной глубины
 * - По умолчанию глубина 1
 */

const array = [1, 2, [4, [5]], [6, [7, 8, [9]]]];
console.log(array);

/**
 * Разгладило наш массив
 * 3, потому что в нашем массиве только 3 уровня вложенности
 */
console.log(array.flat(3));

const tweets = [
  { id: '001', likes: 100, tags: ['js, node.js', 'react'] },
  { id: '002', likes: 200, tags: ['html, node.js'] },
  { id: '003', likes: 300, tags: ['js, node.js', 'css'] },
  { id: '004', likes: 400, tags: ['js, node.js', 'react', 'C++'] },
];

// Пример с урока про редусе
// const tags = tweets.reduce((acc, tweet) => [...acc, ...tweet.tags], []);
// console.log(tags);

// Тоже самое только с помощью flat
// const tags = tweets.map(t => t.tags).flat();
// console.log(tags);

/**
 * Самый лучший вариант(больше производительность)
 * flatMap - по умолчанию разглаживает 1 уровень вложенности
 */
// const tags = tweets.flatMap(t => t.tags);
// console.log(tags);

const stats = tweets
  .flatMap(t => t.tags)
  .reduce(
    (acc, tag) => ({
      ...acc,
      [tag]: acc[tag] ? acc[tag] + 1 : 1,
    }),
    {}
  );

console.log(stats);
