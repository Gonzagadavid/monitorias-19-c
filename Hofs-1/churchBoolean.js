// valores booleanos

const bool = {}

// console.log(!!bool)

// if (Object.keys(bool).length) {
//   console.log('verdadeiro')
// } else {
//   console.log('falso')
// }

// ====================================================
// ternario
// let str = '';

// const random = Math.round(Math.random() * 10);

// console.log(random)

// if(random > 5 ) {
//   str = 'maior que 5'
// } else {
//   str = 'menor que 5'
// }
// console.log(str)

// str = random > 5 ?  'maior que 5' : 'menor que 5'

// console.log(str)

// ====================================================
// curto circuito
let str = '';

const random = Math.round(Math.random() * 10);

// console.log(random)

if(random > 5 ) {
  str = 'maior que 5'
} 

// console.log(str)

 //  true && true = true
 //  true && false = false
 // false && true = false
 // false && false = false
 
 // true || true = true
 // true || false = true
 // false || true = true
 // false || flase = false

str = random > 5 ?  'maior que 5' : ''

// console.log(str2)


let arr;


console.log(random)

if(random > 5 ) {
  arr = [random]
} 



console.log(arr && arr.length)

