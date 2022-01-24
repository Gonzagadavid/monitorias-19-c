

const students = [
  {
    name: 'Fulano',
    age: 30,
    materia: [
      { nome: 'matematica', nota: 10},
      { nome: 'portugues', nota: 5},
      { nome: 'ciencia', nota: 8},
      { nome: 'historia', nota: 6},
    ],
    rate: 5,
    discount: 0,
  },
  {
    name: 'Cicrano',
    age: 17,
    materia: [
      { nome: 'matematica', nota: 4},
      { nome: 'portugues', nota: 9},
      { nome: 'ciencia', nota: 8},
      { nome: 'historia', nota: 6},
    ],
    rate: 8,
    discount: 0,
  },
  {
    name: 'Beltrana',
    materia: [
      { nome: 'matematica', nota: 8},
      { nome: 'portugues', nota: 5},
      { nome: 'ciencia', nota: 9},
      { nome: 'historia', nota: 7},
    ],
    age: 23,
    rate: 10,
    discount: 0,
  }
]


function myMap (array, callback) {
  const newArray = []
  for(let i = 0; i < array.length; i++) {
    const item = array[i]
    newArray.push(callback(item)) 
  }

  return newArray
}

function myReduce(arr, callback, initialAcc) {
  let acc = initialAcc  !== undefined ? initialAcc : arr[0]
  const init = initialAcc !== undefined ? 0 : 1
  for(let i = init; i < arr.length; i++ ) {
    acc = callback(acc, arr[i])
  }
  return acc
}

// function bestNota (arrayMateria){
//   let melhor = arrayMateria[0]
//   for(let i = 1; i < arrayMateria.length; i++) {
//     if(melhor.nota < arrayMateria[i].nota) melhor = arrayMateria[i]
//   }

//   return melhor.nome
// }

// function bestNota (arrayMateria){
//   const melhor = arrayMateria.reduce((acc, crr) => {
//     if(acc.nota < crr.nota)  return crr
//     return acc
//   })
//   return melhor.nome
// }

// function bestNota (arrayMateria){
//   const melhor = arrayMateria.reduce((acc, crr) =>  acc.nota < crr.nota ? crr : acc)
//   return melhor.nome
// }

// function bestNota (arrayMateria){
//   return arrayMateria.reduce((acc, crr) =>  acc.nota < crr.nota ? crr : acc).nome
// }

const bestNota = (arrayMateria) => arrayMateria.reduce((acc, crr) =>  acc.nota < crr.nota ? crr : acc).nome

function final(alunos) {
  return alunos.map((aluno) => {
    const newAluno = {}
    newAluno.name = aluno.name
    newAluno.materia = bestNota(aluno.materia)
    return newAluno
  })

}

console.log(final(students))