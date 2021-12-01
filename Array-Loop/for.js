const limit = 10
let  count = 0

for(let index = 0; index < limit; index += 1) {
  console.log('inicio ',index)
  if (index === 5 && count < 2 ) {
    index = 0
    count += 1
  }
  // console.log('final ',index)
}

for (let index = 1; index < 10; index += 1) {
  console.log('for de fora')
  for (let secondIndex = 0; secondIndex < 10; secondIndex += 1) {
    console.log('for de dentro')
  }
}


// for (let index = 1; index < 10; index += 1) {
//   console.log('for de fora')
//   for (let secondIndex = 0; secondIndex < 10; secondIndex += 1) {
//     console.log('for de dentro')
//   }
// }
