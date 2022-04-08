/*
for (let index = 1; index < array.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (array[index] < array[secondIndex]) {
        let position = array[index];
        array[index] = array[secondIndex];
        array[secondIndex] = position;
      }
    }
  }
  for (let index = 0; index < numbers.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (numbers[index] < numbers[secondIndex]) {
        let position = numbers[index];
        numbers[index] = numbers[secondIndex];
        numbers[secondIndex] = position;
      }
    }
  }
  console.log(numbers)
 
  */
 console.log('Ordene o array numbers em ordem crescente e imprima seus valores;');
 let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

 for (let index = 1; index < numbers.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (numbers[index] < numbers[secondIndex]) {
        let position = numbers[index];
        numbers[index] = numbers[secondIndex];
        numbers[secondIndex] = position;
      }
    }
  }
  
  console.log(numbers);
console.log('');
  console.log('Ordene o array numbers em ordem decrescente e imprima seus valores;');
for (let index = 1; index < numbers.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (numbers[index] > numbers[secondIndex]) {
      let position = numbers[index];
      numbers[index] = numbers[secondIndex];
      numbers[secondIndex] = position;
    }
  }
}

console.log(numbers);

console.log('');
console.log('Agora crie um novo array a partir do array numbers , sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte.');
let multiplicaPeloSeguinte = [];

for (let index = 0; index < numbers.length; index += 1) {
  if (index + 1 < numbers.length) {
    multiplicaPeloSeguinte.push(numbers[index] * numbers[index + 1]);
  } else {
    multiplicaPeloSeguinte.push(numbers[index] * 2);
  }
}

console.log(multiplicaPeloSeguinte);

