const arrN = [{ a: 1 } , { a: 5 }, {a: 7} ,{a: 2 }, {a: 100} ]
// const arrS = ['1', '5', '10', '20']
const arrAlph = [{a: 'b' }, { a: 'a' },{a: 'z' }, {a: 'b'} , {a: 'B'}, { a: 'A'}]

const order = (c, b) => b.a - c.a
const order2 = (c, b) => c.a.toLowerCase() > b.a.toLowerCase() ? 1 : c.a.toLowerCase() < b.a.toLowerCase() ? -1 : 0 

console.log(arrN.sort(order))
// console.log(arrS.sort())
// console.log(arrAlph.sort(order2))

// console.log('a'.charCodeAt())

// console.log('abacaxi'.toUpperCase())