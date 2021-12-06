const object = {key1: 'valor1', key2: 'valor2'};

const objectCopy = object 

objectCopy.key4 = 'valor4'


const obj = { ...object }

obj.key5 = 'outrovalor'

console.log(obj)
// console.log(object)