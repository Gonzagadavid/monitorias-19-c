const objeto = {
  key1: {
    keyInt: [1 ,2, 3, 4, 5]
  },
  key2: 'item 1',
  key3: 'item 2',
  key4: 'item 3',
}

// console.log(objeto.key1.keyInt[3])

const objetoInt = objeto.key1

const arr = objetoInt.keyInt

const item = arr[3]


const objeto2 = {
  key1: 'outro item',
  key2: 'item 1',
  key3: 'item 2',
  key4: 'item 3',
}

const objeto3 = {
  key1: 'item',
  key2: 'item 1',
  key3: 'item 2',
  key4: 'item 3',
}

const chave = 'key1';

console.log(objeto2['key1'])
console.log(objeto3['key1'])