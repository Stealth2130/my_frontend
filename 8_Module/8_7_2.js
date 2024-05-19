// Задание 8.7.2
// Создайте функцию calculate, которая будет принимать три параметра: a, b и operator.
// Функция должна производить математическую операцию между a и b в зависимости от
// значения operator (может быть "+", "-", "*" или "/") и возвращать результат операции.
// Используйте метод apply, чтобы вызвать функцию calculate с передачей объекта со
// значениями a, b и operator в качестве первого аргумента и массива с тремя
// значениями [2, 3, "+"] в качестве второго аргумента.

function calculete(a, b, operator) {
    switch (operator) {
      case "+":
        return console.log(a + b);
      case "-":
        return console.log(a - b);
      case "*":
        return console.log(a * b);
      case "/":
        return console.log(a / b);
      default:
        return console.log('Введите символы в формате "+", "-", "*" или "/"');
    }
}

const arg1 = {
    a: 2,
    b: 6,
    operator: "*"
}

const arg2 = [2, 3, "+"]

calculete.apply(arg1, arg2)
