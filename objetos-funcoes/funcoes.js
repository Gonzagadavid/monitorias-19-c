const c = 4;
const d = 6;

function sum4And5 () {
  let a = 5
  let b = 4
  return a + b
}


const resultSum4And5 = sum4And5()
 
function sumArray (array) {

  let result = array[0]
  
  for (let index = 1; index < array.length; index += 1) {
    result += array[index]
    console.log(result)
  }
  
}

const result = sumArray([1, 2, 3, 4, 5, 6])
