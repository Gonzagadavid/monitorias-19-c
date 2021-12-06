// const object = { key1: 0, chave: 'valorChave', key2:2, key3: { keyInt: { keyInt2: 'valor mais interno'}} };


// const keys = [ 'key1', 'key2', 'key3']



// for(let index = 0; index < keys.length; index += 1) {
//   let chave = keys[index]
//   // console.log(chave)
//   console.log(object.chave)
// }

const array = ['a', 'b', 'c', 'd', 'e'];

const param = 'alfabeto'
const arrResult = []

for(let index = 0; index < array.length; index += 1) {
  const item = array[index]
  const objectInt = { param, item}
  arrResult.push(objectInt)
}

console.log(arrResult)
// console.log(arrResult)
