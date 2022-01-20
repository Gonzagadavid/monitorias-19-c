const arrN = [2, 4, 6, 7, 8, 10];
const arrOdd = [1, 3, 5, 7, 9, 11];
const arrEven = [2, 4, 6, 8, 10];

// every se item não satisfazer false
// se não true

// function myEvery(array) {
//   for( let i = 0; i < array.length; i += 1) {
//     const item = array[i]
//     if(!(item % 2 === 0)) {
//       return false
//     }
//   }
//   return true
// }

function myEvery(array, callback) {
  for( let i = 0; i < array.length; i += 1) {
    const item = array[i]
    if(!(callback(item))) {
      return false
    }
  }
  return true
}

console.log('myEvery', myEvery(arrN, (item) => item % 2 === 0))
console.log('myEvery',myEvery(arrOdd, (item) => item % 2 === 0))
console.log('myEvery',myEvery(arrEven, (item) => item % 2 === 0))

console.log('every', arrN.every((item) => item % 2 === 0))
console.log('every', arrOdd.every((item) => item % 2 === 0))



console.log('every', arrEven.every((item) => arrEven.some((item) => item % 2 === 0)))


function myEvery(array, callback) {
  for( let i = 0; i < array.length; i += 1) {
    console.log(arrEven.some((item) => item % 2 === 0))
    // const item = array[i]
    // if(!(callback(item))) {
    //   return false
    // }
  }
  return true
}

myEvery(arrEven)
