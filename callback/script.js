// '2 + 2' return 4
// '2 - 2' return 0
// '2 / 2' return 2



const preOp = (str) => {
  const arr = str.split(' ')
  const number1 = Number(arr[0])
  const number2 = Number(arr[2])
  const operation = arr[1]

  return { number1, number2, operation }
}

const sum = (a , b) => a + b
const sub = (a , b) => a - b
const div = (a , b) => a / b
const mult = (a , b) => a * b

const checkOP = (strSignal) => {
  switch(strSignal) {
    case '+': return sum;

    case '-': return sub;

    case '/': return div;

    default: return mult;
  }
}

const exec = (n1, n2, callback) => {
  console.log(callback(n1, n2))
}

const calc = (strOp) => {
  const objOperation = preOp(strOp); // { number1, number2, operation}
  const callback = checkOP(objOperation.operation)
  exec(objOperation.number1, objOperation.number2, callback)

}


calc('2 + 4') // 6
calc('2 * 4') // 8
calc('100 / 4') // 25
calc('20 - 4') // 16
