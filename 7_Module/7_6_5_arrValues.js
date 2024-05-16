const obj = {
  some: "some",
  dom: "text",
  arr: [1, 2, 3, 4, 5],
  tom: "there",
};

const arrValues = [];

for (let key in obj) {
  if (obj[key] instanceof Array) {
    for (let value of obj[key]) {
      arrValues.push(value);
    }
  }
  else {
    arrValues.push(obj[key]);
  }
}

console.log(arrValues);

