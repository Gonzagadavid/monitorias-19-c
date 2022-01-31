
// const peoples = [
//   {name: 'Fulana', age: 20, id: 1},
//   {name: 'Cicrano', age: 30, id: 2},
//   {name: 'Beltrano', age: 25, id: 3},
//   {name: 'Cicrana', age: 16, id: 4},
//   {name: 'Fulano', age: 40, id: 5},
// ]

// const { setInterval } = require('timers/promises');

// let result = 'not found'

// const findPeople = (idPeople) => peoples.find(({id}) => id = idPeople)

// const service  = (callback, param) => {
//   setTimeout(() => {
//     result = callback(param)
//   }, 10000)
// }

// const peopleNice = () => {
//   service(findPeople, 2)
//   setTimeout(() => {
//     console.log(`${result.name} tem ${result.age} de idade`)
//   },20000)
// }


// peopleNice()

let count = 10

setInterval(() => {
  count--
  console.log(count)
  // if (count === 0) clearInterval(interval)
},1000 )
