const objeto2 = {
  key1: 'item',
  key3: 'item 2',
  key2: 'item 1',
  key4: 'item 3',
  // key5: 'a mais'
}

const objeto3 = {
  key1: 'item',
  key2: 'item 1',
  key3: '0555',
  key4: 'item 3',
}

// const arrayKeys = Object.keys(objeto2)

// console.log(arrayKeys)

// for (let index = 0; index < arrayKeys.length; index += 1) {
//    let chave = arrayKeys[index]
//    console.log(objeto2[chave])
//    console.log(objeto3[chave])
// }

for( let chave in objeto2) {                      
  console.log(chave)
  console.log(objeto2[chave])                                                                                                                                                                                                                                                                                                             
  console.log(objeto3[chave])
  
}