let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]; 
//Utilizando for , descubra qual o maior valor contido no array e imprima-o; 

let max = numbers[0];

for (let index = 0; index < numbers.length; index += 1) {
  const item = numbers[index]
  console.log('max ',max)
  console.log('item ', item)
  console.log('if ', item > max)
  if (item > max) {
    max = item
  }
}

for(let item of numbers) {
  console.log('max ',max)
  console.log('item ', item)
  console.log('if ', item > max)
  if (item > max) {
    max = item
  }
}

console.log(max)

// const arr = []

// for (let index = 0; index < 25; index += 1) {
//   arr.push(index + 1)
// }

// console.log(arr)


