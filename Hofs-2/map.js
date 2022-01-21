// retorna um novo array, com mesma quantidade porém tranformado de acordo com a callback passada!!

const students = [
  {
    name: 'Fulano',
    age: 30,
    rate: 5,
    discount: 0,
  },
  {
    name: 'Cicrano',
    age: 17,
    rate: 8,
    discount: 0,
  },
  {
    name: 'Beltrana',
    age: 23,
    rate: 10,
    discount: 0,
  }
]


// const approveds = students.map((student) => {
//   if(student.rate > 7) {
//     student.discount = 0.2
//     return student
//    }
//   return student
// })

// function myMap (array) {
//   const approved = []
//   for(let i = 0; i < array.length; i++) {
//     const student = array[i]
//     if(student.rate > 7) {
//       student.discount = 0.2
//       approved.push(student)
//       continue;
//     }
//     approved.push(student)
//   }

//   return approved
// }

function myMap (array, callback) {
  const newArray = []
  for(let i = 0; i < array.length; i++) {
    const item = array[i]
    newArray.push(callback(item)) 
  }

  return newArray
}

const cb = (student) => {
  if(student.rate > 7) {
    student.discount = 0.2
    return student
  }
  return student
}

const approveds = myMap(students, cb)

console.log(approveds)