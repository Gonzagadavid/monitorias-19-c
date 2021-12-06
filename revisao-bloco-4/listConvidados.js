const listaConvidados = [
  { name: 'Fulano', idade: 20},
  { name: 'Fulana', idade: 25},
  { name: 'Beltrano', idade: 35},
  { name: 'Beltrana', idade: 30},
  { name: 'Cicrano', idade: 45},
  { name: 'Cicrana', idade: 46},
]

const novaList =  {}
for(let index = 0; index < listaConvidados.length; index += 1) {
  const convidado = listaConvidados[index];
  if (convidado.name !== 'Beltrano') {
    novaList[convidado.name] = convidado
  }
  
}


// for(let index = 0; index < novaList.length; index += 1) {
//   const convidado = novaList[index];
//   convidado.vip = true
// }
console.log(novaList)
// console.log(listaConvidados)
