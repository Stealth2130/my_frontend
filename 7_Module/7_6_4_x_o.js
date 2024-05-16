
const field = Array.from({ length: 3 }, () => Array.from(Array(3), () => ""));
const type = {
  0: 'X',
  1: 'O'
}

for (let i = 0; i < field.length; i += 1) {
  for (let j = 0; j < field[i].length; j += 1) {
    const random = Math.round(Math.random())

    field[i][j] = `${type[random]}`
  }
}
for (const row of field) {
  console.log(row.join(''));
}

