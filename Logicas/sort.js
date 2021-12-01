// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for (let index = 1; index < numbers.length; index += 1) {
//   console.log(numbers)
//   for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
//     console.log('index =', index, ' ', 'secondIndex =', secondIndex)
//     console.log(numbers[index], '<' ,numbers[secondIndex])
//     if (numbers[index] < numbers[secondIndex]) {
//       let position = numbers[index];
//       // console.log('numbers 1 = ', numbers)
//       // console.log('position =', position)

//       numbers[index] = numbers[secondIndex];
//       // console.log('numbers 2 = ', numbers)
      
//       numbers[secondIndex] = position;
//       // console.log('numbers 3 = ', numbers)
//     }
//   }
// }


let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for(let i = 0; i < numbers.length; i += 1) {
  let number = numbers[i]
  let number2 = numbers[i + 1]

  if( number > number2) {
    numbers[i] = number2
    numbers[i + 1] = number
    i = -1
  }
}

console.log(numbers)
