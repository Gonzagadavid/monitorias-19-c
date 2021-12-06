const object = {key1: 'valor1', key2: 'valor2', key4: 'valor4', key3:'valor3'};

const arrayKeys = ['key1', 'key2', 'key4', 'key3']

for (let index = 0; index < arrayKeys.length; index += 1) {
   let chave = arrayKeys[index]
   console.log(chave)
}
  
  for(let chave in object) {
    console.log(chave)
  }