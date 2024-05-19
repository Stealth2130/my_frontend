// Задание 8.7.4
// Создайте функцию setFullName, которая будет устанавливать свойство fullName
// у переданного ей объекта. Используйте метод bind, чтобы создать новую функцию
// setPersonFullName, которая будет устанавливать fullName для объекта person из
// предыдущего примера. Вызовите setPersonFullName с параметром "John Smith" и
// убедитесь, что свойство fullName объекта person было изменено соответствующим
// образом.

const persons = { age: 21, fullName: "John"};

function setFullName(name) {
    this.fullName = name
}

const setPersonFullName = setFullName.bind(persons);

setPersonFullName("John Smith")

console.log(persons);

// ИЛИ второй вариант!!


const person = { age: 21, firstName: "John" };

function setFullName2(name) {
  this.fullName = name;
}

const setPersonFullName2 = setFullName2.bind(person);

setPersonFullName2("John Smith");

console.log(person);

