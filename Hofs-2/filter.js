// filter retorna um novo array, com os item que atendem a condição passada na callback

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


// const approveds = students.filter((student) => {
//   if(student.rate > 7) {
//     return students
//    }
// })


// function myFilter (array) {
//   const approved = []
//   for(let i = 0; i < array.length; i++) {
//     const student = array[i]
//       if(student.rate > 7) {
//       approved.push(student)
//     }
//   }

//   return approved
// }



function myFilter (array ,callback) {
  const newArray = []
  for(let i = 0; i < array.length; i++) {
    const item = array[i]
      if(callback(item)) {
      newArray.push(student)
    }
  }

  return newArray
}

const cb = (student)  =>  student.rate > 7

// const approveds = students.filter((student) => {
//   if(student.rate > 7) {
//     return true
//   }
//   false
// })

const approveds = students
  .filter((student) => student.rate > 7)
  .map((appr) => {
    appr.average = appr.rate / 4
    return appr 
  })


// console.log(myFilter(students, cb))
console.log(approveds)