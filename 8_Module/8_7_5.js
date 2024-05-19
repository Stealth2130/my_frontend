// Задание 8.7.5
// Напишите функцию, которая принимает массив чисел и возвращает новый массив,
// содержащий только уникальные числа, отсортированные в порядке возрастания.

const array = [7, 2, 6, 5, 2, 1, 6];

function getUniqueArray(arr) {
  const ascendingArray = arr.sort((a, b) => a - b);
  const uniqueArray = Array.from(new Set(ascendingArray));
  return console.log(uniqueArray);
}

getUniqueArray(array);
