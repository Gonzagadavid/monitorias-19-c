const digits = '0123456789'

const preOp = (string) => {
  const arrStr = string.split(' ')

  if(!digits.includes(arrStr[0]) || !digits.includes(arrStr[2])) throw new Error('somente numeros')

  return [Number(arrStr[0]), arrStr[1], Number(arrStr[2])]
}

// '2 + 2' = 4
// '4 * 4' = 16

// '2 + 2'

const calc = (string) => {
  
}

const sum = (a, b) => a + b
const mult = (a, b) => a * b

function exec(n1, n2, callback){
  const result =  callback(n1, n2)
  console.log(result)
}

exec(4, 4, sum)
exec(4, 4, mult)

module.exports = {
 preOp
} 
