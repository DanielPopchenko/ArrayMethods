/**
 * reduce = сократить;
 *
 */

// Посчитать что то много и сделать из этого одно

// const numbers = [5, 10, 15, 20, 25];

// const total = numbers.reduce(function (accumulator, number) {
//   return accumulator + number;
// }, 0);

// если не укащать изначальное значение аккумулятора (как у нас 0) то ему присваивается первый елемент нашего массива (5)

// Как работает :
// accumulator = 0 -> number = 5 --> return 0 + 5
// accumulator = 5 -> number = 10 --> return 5 + 10
// accumulator = 10 -> number = 15 --> return 15 + 15
// accumulator = 30 -> number = 20 --> return 30 + 20
// accumulator = 50 -> number = 25 --> return 50 + 25
// В итоге функция ретернет число 75

// console.log(total);

/**
 * Считаем общую зарплату
 */

// Метод reduce можно вызывать только на массивах, а salary это обьект

// const salary = {
//   mango: 100,
//   poly: 50,
//   ajax: 150,
// };

// // Поэтому сначала мы получим все значения (зарплаты, цыфры) из нашего обьекта

// const value = Object.values(salary);

// console.log('Массив зарплат', value);

// const totalSalary = value.reduce(function (acc, value) {
//   return acc + value;
// }, 0);

// // ! аккумулятор (не обязательно число) это внутреннее значение reduce(), а потом оно просто возвращается как результат работы reduce() !

// console.log(`Общая зарплата всех сотрудников : ${totalSalary}`);

/**
 * Считаем общее кол-во часов в игре (timePlayed)
 */

// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 300, points: 30, online: true },
//   { id: 'player-2', name: 'Chelsey', timePlayed: 350, points: 50, online: false },
//   { id: 'player-3', name: 'Poly', timePlayed: 120, points: 40, online: true },
//   { id: 'player-4', name: 'Ajax', timePlayed: 280, points: 90, online: false },
//   { id: 'player-5', name: 'Kiwi', timePlayed: 190, points: 10, online: true },
// ];

// const totalTimePlayed = players.reduce(function (time, player) {
//   return time + player.timePlayed;
// }, 0);

// console.log(`Наши игроки сумарно отыграли -> ${totalTimePlayed} часов`);

/**
 * Считаем общую сумму товаров в корзине
 */

// const cart = [
//   { label: 'Apples', price: 110, quantity: 20 },
//   { label: 'Oranges', price: 340, quantity: 12 },
//   { label: 'Lemons', price: 280, quantity: 7 },
// ];

// const totalAmount = cart.reduce(function (total, item) {
//   return total + item.price * item.quantity;
// }, 0);
// // в параметр callback функции item записывается наш массив !!!
// // С этого обьекта можно брать значения свойств, но нельзя пушить итд
// console.log(`Общая сумма наших товаров в корзине = ${totalAmount}`);

/**
 * Собираем все теги из твитов
 */

// const tweets = [
//   { id: '001', likes: 5, tags: ['js', 'node.js'] },
//   { id: '002', likes: 9, tags: ['html', 'js'] },
//   { id: '003', likes: 11, tags: ['react', 'C#'] },
//   { id: '004', likes: 22, tags: ['Python', 'node.js'] },
//   { id: '005', likes: 13, tags: ['js', 'html'] },
//   { id: '006', likes: 49, tags: ['Rubin', 'css'] },
// ];

// const allTegs = tweets.reduce(function (tags, tweet) {
//   tags.push(...tweet.tags);

//   return tags;
// }, []);

// console.log(allTegs);

/**
 * Ведем статистику тегов
 */

// ----- 1 example -----

// const tagsStats = allTegs.reduce(function (acc, tag) {
//   console.log('TAG ', tag);
//   console.log('ACC ', acc);

//   if (acc.hasOwnProperty(tag)) {
//     console.log('такое свойство есть, увеличиваем значение');

//     acc[tag] += 1;

//     return acc;
//   }

//   console.log('Такого свойства нет, добавляем');

//   acc[tag] = 1;
//   return acc;
// }, {});

// !!! Грязная версия, мутирует елемент который придет в acc !!!

// const tagsStats = allTegs.reduce(function (acc, tag) {
//   console.log('TAG ', tag);
//   console.log('ACC ', acc);
//   // Тернарные операторы
//   acc[tag] = acc.hasOwnProperty(tag) ? acc[tag] + 1 : 1;
//   /**
//    * Если наше условие приводится к true(то есть acc has property tag) ->
//    * то возвращаем и записываем acc[tag] + 1, если false то возвращаем и записываем 1
//    *
//    */
//   return acc;
// }, {});

// Чистая версия, каждый раз создает новый обьект

// const tagsStats = allTegs.reduce(function (acc, tag) {
//   return {
//     ...acc,
//     [tag]: acc.hasOwnProperty(tag) ? acc[tag] + 1 : 1,
//   };
// }, {});
// console.log(tagsStats);

// {
//   html: 3,
//   node.js: 3,
//   js: 2
// }

// ------ Practising --- 2

// const numbers = [5, 10, 15, 20, 25];

// const total = numbers.reduce((acc, number) => {
//   console.log('number', number);
//   console.log('acc', acc);

//   return acc + number;
// }, 0);

// Как работает :
// accumulator = 0 -> number = 5 --> return 0 + 5
// accumulator = 5 -> number = 10 --> return 5 + 10
// accumulator = 10 -> number = 15 --> return 15 + 15
// accumulator = 30 -> number = 20 --> return 30 + 20
// accumulator = 50 -> number = 25 --> return 50 + 25
// В итоге функция ретернет число 75
// console.log(total);

// const salary = {
//   mango: 100,
//   poly: 50,
//   ajax: 75,
// };

// const totalSalary = Object.values(salary).reduce((total, value) => {
//   return total + value;
// }, 0);
// // 0 - это начальное значениенашей суммы

// console.log('totalSalary ->', totalSalary);

// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 100, online: false },
//   { id: 'player-1', name: 'Mango', timePlayed: 100, online: false },
//   { id: 'player-1', name: 'Mango', timePlayed: 100, online: false },
// ];

// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 320, points: 75, online: false },
//   { id: 'player-2', name: 'Ajax', timePlayed: 130, points: 20, online: true },
//   { id: 'player-3', name: 'Kiwi', timePlayed: 440, points: 80, online: false },
//   { id: 'player-4', name: 'Chelsey', timePlayed: 555, points: 95, online: false },
//   { id: 'player-5', name: 'Poly', timePlayed: 230, points: 20, online: true },
// ];

// Сумма сыгранных часов
// const totalTimePlayed = players.reduce((totalTime, player) => totalTime + player.timePlayed, 0);
// console.log(totalTimePlayed);

// Сумма покупок в корзине
const cart = [
  { label: 'Apples', price: 20, quantity: 4 },
  { label: 'Bananas', price: 65, quantity: 1 },
  { label: 'Lemones', price: 80, quantity: 3 },
  { label: 'Oranges', price: 70, quantity: 6 },
];

const totalAmount = cart.reduce((total, { price, quantity }) => total + price * quantity, 0);
console.log('totalAmount', totalAmount);

/**
 * Собираем все теги из твитов
 */

const tweets = [
  { id: '000', likes: 4, tags: ['js', 'html'] },
  { id: '001', likes: 12, tags: ['css', 'node.js', 'react'] },
  { id: '002', likes: 5, tags: ['js', 'html'] },
  { id: '003', likes: 9, tags: ['react', 'html'] },
  { id: '004', likes: 7, tags: ['html', 'css'] },
  { id: '005', likes: 16, tags: ['react', 'node.js', 'html', 'js'] },
];

const allTags = tweets.reduce((acc, tweet) => [...acc, ...tweet.tags], []);
/**
 * Распыляем старый аккумулятор и после распыляем текущие входящие данные
 */
console.log(allTags);

/**
 * Ведем статистику тегов
 */

// 1 вариант
// const tagsStats = allTags.reduce((acc, tag) => {
//   // в этом условииникогда не будет 0 или false или undefined
//   if (acc[tag]) {
//     acc[tag] += 1;

//     return acc;
//   }

//   acc[tag] = 1;
//   return acc;
// }, {});
// console.log(tagsStats);

// 2 вариант
const tagsStats = allTags.reduce((acc, tag) => {
  return {
    ...acc,
    /**
     * Тоже самое условие что и в первом примере
     * только записано более правильно с тернарником
     */
    [tag]: acc[tag] ? acc[tag] + 1 : 1,
  };
}, {});
console.log(tagsStats);

/**
 * Если свойство с ключем tag есть, то увеличивай его значение на 1 (acc[tag] += 1)
 * если свойства с таким ключем нету, то создавай и записывай один (acc[tag] = 1)
 */

// console.log(tagsStats);
