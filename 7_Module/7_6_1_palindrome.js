// Проверка первого слова

const word = "Довод";
let wordReverse = "";

for (let i = word.length - 1; i >= 0; i -= 1) {
  wordReverse += word[i];
}

if (word.toLowerCase() === wordReverse.toLowerCase()) {
  console.log(`Слово ${word} является палиндромом`);
} else {
  console.log(`Слово ${word} не является палиндромом`);
}

// Проверка второго слова

const wordTwo = "Сантимент";
let wordReverseTwo = "";

for (let i = wordTwo.length - 1; i >= 0; i -= 1) {
  wordReverse += word[i];
}

if (wordTwo.toLowerCase() === wordReverseTwo.toLowerCase()) {
  console.log(`Слово ${wordTwo} является палиндромом`);
} else {
  console.log(`Слово ${wordTwo} не является палиндромом`);
}
