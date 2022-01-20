const arrN = [1, 3, 5, 6, 9, 11];
const arrOdd = [1, 3, 5, 7, 9, 11];

// some retorna true se um item satisfazer a condição
// e false se não

// function mySome(array) {
//   for( let i = 0; i < array.length; i += 1) {
//     const item = array[i]
//     if(item % 2 === 0) {
//       return true
//     }
//   }
//   return false
// }

function mySome(array, callback) {
  let valorRetorna = false
  for( let i = 0; i < array.length; i += 1) {
    const item = array[i]
    if(callback(item)) {
      valorRetorna = true
    }
  }
  return valorRetorna
}

// const isEven = (item) => item % 2 === 0;

console.log('mySome', mySome(arrN, (item) =>{ 
  if(item % 2 === 0) return true
  return false
}))
console.log('mySome',mySome(arrOdd, (item) => item % 2 === 0))

console.log('some', arrN.some((item) => item % 2 === 0))
console.log('some', arrOdd.some((item) => item % 2 === 0))
