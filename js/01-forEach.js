// --- Перебирающие методы массивов ------

// forEach -  просто перебирает массив, больше не делают ничего, альтернатива for...of; for ...
// тоже самое что и перебор for! Если не нужно доступа к счетчику, и если не надо увеличивать каждую операцию на 2, 3, 4 ...
// Ничего не возвращает

/**
 * Array.prototype(callback(currentValue, idx, arr), thisArgs)
 */

const numbers = [1, 2, 3, 4, 5];

numbers.forEach((number, idx, arr) => {
  console.log('number', number);
  // console.log('idx', idx);
  // console.log('arr', arr);

  if (number > 3) {
    console.log(number, 'Больше 3');
  } else {
    console.log(number, 'Меньше 3');
  }
});
