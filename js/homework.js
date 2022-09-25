// module-6 Homework

// ------------ Number-1 -------------
// const players = [
//   { id: 'player-1', eyeColor: 'blue', name: 'Mango', timePlayed: 120, points: 81, online: false },
//   { id: 'player-2', eyeColor: 'brown', name: 'Poly', timePlayed: 270, points: 56, online: true },
//   { id: 'player-3', eyeColor: 'green', name: 'Ajax', timePlayed: 180, points: 37, online: true },
//   { id: 'player-4', eyeColor: 'blue', name: 'Chelsey', timePlayed: 90, points: 29, online: false },
// ];

// // refactored
// const playersName = players.map(player => player.name);

// console.log(playersName);

// -------- Number-2 ----------

// const users = [
//   { id: 'player-1', eyeColor: 'blue', name: 'Mango', timePlayed: 120, points: 81, online: false },
//   { id: 'player-2', eyeColor: 'brown', name: 'Poly', timePlayed: 270, points: 56, online: true },
//   { id: 'player-3', eyeColor: 'green', name: 'Ajax', timePlayed: 180, points: 37, online: true },
//   { id: 'player-4', eyeColor: 'blue', name: 'Chelsey', timePlayed: 90, points: 29, online: false },
// ];

// const colorToFind = 'blue';
// console.log(colorToFind);

// // refactored
// const getUsersWithEyeColor = users.filter(user => user.eyeColor === colorToFind);

// console.table(getUsersWithEyeColor);

// ------------ Number-3 --------------

// const users = [
//   { id: 'player-1', gender: 'male', name: 'Mango', timePlayed: 120, points: 81, online: false },
//   { id: 'player-2', gender: 'feemale', name: 'Poly', timePlayed: 270, points: 56, online: true },
//   { id: 'player-3', gender: 'male', name: 'Ajax', timePlayed: 180, points: 37, online: true },
//   { id: 'player-4', gender: 'male', name: 'Chelsey', timePlayed: 20, points: 29, online: false },
//   { id: 'player-5', gender: 'feemale', name: 'Anna', timePlayed: 490, points: 29, online: false },
//   { id: 'player-6', gender: 'feemale', name: 'Inna', timePlayed: 520, points: 29, online: false },
//   { id: 'player-7', gender: 'feemale', name: 'Sonia', timePlayed: 130, points: 29, online: true },
//   { id: 'player-8', gender: 'male', name: 'Dania', timePlayed: 90, points: 29, online: false },
// ];

// const genderToFind = 'male';

// // refactored
// const getUsersWithGender = users.filter(user => user.gender === genderToFind);

// console.table(getUsersWithGender);

// ------------ Number-4 --------------

// const users = [
//   { id: 'player-1', gender: 'male', name: 'Mango', timePlayed: 120, points: 81, online: false },
//   { id: 'player-2', gender: 'feemale', name: 'Poly', timePlayed: 270, points: 56, online: true },
//   { id: 'player-3', gender: 'male', name: 'Ajax', timePlayed: 180, points: 37, online: true },
//   { id: 'player-4', gender: 'male', name: 'Chelsey', timePlayed: 20, points: 29, online: false },
//   { id: 'player-5', gender: 'feemale', name: 'Anna', timePlayed: 490, points: 29, online: false },
//   { id: 'player-6', gender: 'feemale', name: 'Inna', timePlayed: 520, points: 29, online: false },
//   { id: 'player-7', gender: 'feemale', name: 'Sonia', timePlayed: 130, points: 29, online: true },
//   { id: 'player-8', gender: 'male', name: 'Dania', timePlayed: 90, points: 29, online: false },
// ];

// // const getInactiveUsers = users.filter(function (user) {
// //   return !user.online;
// // });

// refactored
// const getInactiveUsers = users.filter(user => !user.online);

// console.table('Inactive users ->', getInactiveUsers);

// ------- Number-5 -----------

// const users = [
//   {
//     id: 'player-1',
//     email: 'shereeanthony@kog.com',
//     name: 'Mango',
//     timePlayed: 120,
//     points: 81,
//     online: false,
//   },
//   {
//     id: 'player-2',
//     email: 'elmahead@omatom.com',
//     name: 'Poly',
//     timePlayed: 270,
//     points: 56,
//     online: true,
//   },
// ];

// const getUserWithEmail = (users, email) => {
//   let newArr = users.find(user => user.email === email);
//   return newArr;
// };

// console.log(getUserWithEmail(users, 'shereeanthony@kog.com'));

// ---------- Number-6 ----------

// const users = [
//   { id: 'player-1', age: 35, name: 'Mango', timePlayed: 120, points: 81, online: false },
//   { id: 'player-2', age: 23, name: 'Poly', timePlayed: 270, points: 56, online: true },
//   { id: 'player-3', age: 45, name: 'Ajax', timePlayed: 180, points: 37, online: true },
//   { id: 'player-4', age: 21, name: 'Chelsey', timePlayed: 20, points: 29, online: false },
//   { id: 'player-5', age: 47, name: 'Anna', timePlayed: 490, points: 29, online: false },
//   { id: 'player-6', age: 33, name: 'Inna', timePlayed: 520, points: 29, online: false },
//   { id: 'player-7', age: 29, name: 'Sonia', timePlayed: 130, points: 29, online: true },
//   { id: 'player-8', age: 25, name: 'Dania', timePlayed: 90, points: 29, online: false },
// ];

// const getUsersWithAge = (users, min, max) => {
//   let newArr = users.filter(user => {
//     return user.age > min && user.age < max;
//   });
//   return newArr;
// };

// console.log(getUsersWithAge(users, 20, 30));
// console.log(getUsersWithAge(users, 30, 40));

// -------- Task-7 ----------

// const users = [
//   { id: 'player-1', age: 35, name: 'Mango', balance: 3504, online: false },
//   { id: 'player-2', age: 23, name: 'Poly', balance: 2100, online: true },
//   { id: 'player-3', age: 45, name: 'Ajax', balance: 21000, online: true },
//   { id: 'player-4', age: 21, name: 'Chelsey', balance: 4500, online: false },
//   { id: 'player-5', age: 47, name: 'Anna', balance: 2800, online: false },
//   { id: 'player-6', age: 33, name: 'Inna', balance: 550, online: false },
//   { id: 'player-7', age: 29, name: 'Sonia', balance: 900, online: true },
//   { id: 'player-8', age: 25, name: 'Dania', balance: 1100, online: false },
// ];

// const calculateTotalBalance = users => {
//   // refactored
//   let totalBalance = users.reduce((acc, user) => acc + user.balance, 0);

//   return totalBalance;
// };

// console.log('Total User`s balance = ', calculateTotalBalance(users));

// -------- Task-8 ---------

// const users = [
//   {
//     id: 'player-1',
//     age: 35,
//     name: 'Mango',
//     friend: 'Briana Decker',
//     balance: 3504,
//     online: false,
//   },
//   {
//     id: 'player-2',
//     age: 23,
//     name: 'Poly',
//     friend: 'Goldie Gentry',
//     balance: 2100,
//     online: true,
//   },
//   {
//     id: 'player-3',
//     age: 45,
//     name: 'Ajax',
//     friend: 'Briana Decker',
//     balance: 21000,
//     online: true,
//   },
//   {
//     id: 'player-4',
//     age: 21,
//     name: 'Chelsey',
//     friend: 'Goldie Gentry',
//     balance: 4500,
//     online: false,
//   },
//   {
//     id: 'player-5',
//     age: 47,
//     name: 'Anna',
//     friend: 'Goldie Gentry',
//     balance: 2800,
//     online: false,
//   },
//   {
//     id: 'player-6',
//     age: 33,
//     name: 'Inna',
//     friend: 'Briana Decker',
//     balance: 550,
//     online: false,
//   },
//   {
//     id: 'player-7',
//     age: 29,
//     name: 'Sonia',
//     friend: 'Goldie Gentry',
//     balance: 900,
//     online: true,
//   },
//   {
//     id: 'player-8',
//     age: 25,
//     name: 'Dania',
//     friend: 'Goldie Gentry',
//     balance: 1100,
//     online: false,
//   },
// ];

// const getUsersWithFriend = (arr, friendName) => {
//   let userWithFriend = arr.filter(function (user) {
//     return user.friend === friendName;
//   });

//   return userWithFriend;
// };

// const getUsersWithFriend = (users, friendName) => {
//   return users.filter(user => user.friend.indexOf(friendName) !== -1).map(user => user.name);
// };

// console.table(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
// console.table(getUsersWithFriend(users, 'Goldie Gentry'));

// ----- Task-9 --------

// const users = [
//   {
//     id: 'player-1',
//     friends: ['Moore Hensley', 'Sharlene Bush'],
//     age: 35,
//     name: 'Mango',
//     balance: 3504,
//     online: false,
//   },
//   {
//     id: 'player-2',
//     friends: ['Elma Head', 'Sharlene Bush', 'Moore Hensley'],
//     age: 23,
//     name: 'Poly',
//     balance: 2100,
//     online: true,
//   },
//   {
//     id: 'player-3',
//     friends: ['Carey Barr', 'Blackburn Dotson', 'Elma Head', 'Sharlene Bush'],
//     age: 45,
//     name: 'Ajax',
//     balance: 21000,
//     online: true,
//   },
//   {
//     id: 'player-4',
//     friends: [
//       'Sharlene Bush',
//       'Blackburn Dotson',
//       'Carey Barr',
//       'Elma Head',
//       'Sharlene Bush',
//       'Moore Hensley',
//     ],
//     age: 21,
//     name: 'Chelsey',
//     balance: 4500,
//     online: false,
//   },
//   {
//     id: 'player-5',
//     friends: ['Ross Vazquez'],
//     age: 47,
//     name: 'Anna',
//     balance: 2800,
//     online: false,
//   },
//   {
//     id: 'player-6',
//     friends: ['Elma Head', 'Moore Hensley'],
//     age: 33,
//     name: 'Inna',
//     balance: 550,
//     online: false,
//   },
//   { id: 'player-7', friends: [], age: 29, name: 'Sonia', balance: 900, online: true },
//   {
//     id: 'player-8',
//     friends: ['Moore Hensley'],
//     age: 25,
//     name: 'Dania',
//     balance: 1100,
//     online: false,
//   },
// ];

// // const getNamesSortedByFriendsCount = users => {
// //   return users.sort((a, b) => b.friends.length - a.friends.length).map(user => user.name);
// // };

// const getNamesSortedByFriendsCount = users => {
//   return users.sort((a, b) => b.friends.length - a.friends.length).map(user => user.name);
// };

// console.log(getNamesSortedByFriendsCount(users));

// -------- Task-10 ----------

// const users = [
//   {
//     id: 'player-1',
//     skills: ['drawing', 'studing'],
//     age: 35,
//     name: 'Mango',
//     balance: 3504,
//     online: false,
//   },
//   {
//     id: 'player-2',
//     skills: ['playing games', 'Biology', 'Math'],
//     age: 23,
//     name: 'Poly',
//     balance: 2100,
//     online: true,
//   },
//   {
//     id: 'player-3',
//     skills: ['playing football', 'drawing'],
//     age: 45,
//     name: 'Ajax',
//     balance: 21000,
//     online: true,
//   },
//   {
//     id: 'player-4',
//     skills: ['playing basketball', 'studing'],
//     age: 21,
//     name: 'Chelsey',
//     balance: 4500,
//     online: false,
//   },
//   {
//     id: 'player-5',
//     skills: ['studing', 'Math', 'Biology'],
//     age: 47,
//     name: 'Anna',
//     balance: 2800,
//     online: false,
//   },
//   {
//     id: 'player-6',
//     skills: ['Math', 'playing football'],
//     age: 33,
//     name: 'Inna',
//     balance: 550,
//     online: false,
//   },
//   { id: 'player-7', skills: ['English'], age: 29, name: 'Sonia', balance: 900, online: true },
//   {
//     id: 'player-8',
//     skills: ['Biology', 'Math', 'css'],
//     age: 25,
//     name: 'Dania',
//     balance: 1100,
//     online: false,
//   },
// ];

// const getSortedUniqueSkills = users => {
//   return users
//     .reduce(function (allSkills, user) {
//       allSkills.push(...user.skills);
//       return allSkills;
//     }, [])
//     .filter((user, idx, arr) => arr.indexOf(user) !== idx);
//   // .sort();
// };

// console.log(getSortedUniqueSkills(users));

// const allSkills = users.reduce(function (allSkills, user) {
//   allSkills.push(...user.skills);
//   return allSkills;
// }, []);

// console.log(allSkills);

// console.log('hello world'.indexOf('o', 5));
