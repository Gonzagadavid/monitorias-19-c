// somente interação e não retorna nada

const students = [
  {
    name: 'Fulano',
    age: 30,
    rate: 5
  },
  {
    name: 'Cicrano',
    age: 17,
    rate: 8
  },
  {
    name: 'Beltrana',
    age: 23,
    rate: 10
  }
]


// const approved = students.forEach((student) => {
//   if(student.rate > 7) {
//     return students
//    }
// })

const approved = []

// function myForEach (array) {
//   for(let i = 0; i < array.length; i++) {
//     const student = array[i]
//       if(student.rate > 7) {
//       approved.push(student)
//     }
//   }
// }

function myForEach (array, callback) {
  for(let i = 0; i < array.length; i++) {
    callback(array[i])
  }
}

const cb = (student) => {
  if(student.rate > 7) {
    approved.push(student)
  }
}

// myForEach(students, cb)
students.forEach((student, index) => {
  if(student.rate > 7 && index !== 0) {
    approved.push(student)
  }
})

console.log(approved)



