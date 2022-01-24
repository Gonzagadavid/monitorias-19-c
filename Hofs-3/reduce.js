// const arrTech = ['javascript', 'node', 'html', 'css', 'react']


// console.log(arrTech.push('isso'))
// console.log(arr.reduce((acc, crr) => { 
//   if(typeof crr !== 'number') return acc
//   return acc + crr 
// }, 0));

function myReduceFor(arr, name) {
  const arrResp = []  
  for(let i = 0; i < arr.length; i++ ) {
    const obj = {}
    obj.tech = arr[i]
    obj.name = name
    arrResp.push(obj)
  }
  return arrResp
}


// console.log(myReduceFor(arrTech, 'Fulano'))

// function myReduce(arr, initialAcc, name) {
//   let acc = initialAcc  !== undefined ? initialAcc : arr[0]
//   const init = initialAcc !== undefined ? 0 : 1
//   for(let i = init; i < arr.length; i++ ) {
//     const obj = {}
//     obj.tech = arr[i]
//     obj.name = name
//     acc.push(obj)
//   }
//   return acc
// }

// console.log(myReduce(arrTech, [], 'Fulano'))

// const arrTech = ['javascript', 'node', 'html', 'css', 'react']

// function myReduce(arr, callback, initialAcc) {
//   let acc = initialAcc  !== undefined ? initialAcc : arr[0]
//   const init = initialAcc !== undefined ? 0 : 1
//   for(let i = init; i < arr.length; i++ ) {
//     acc = callback(acc, arr[i])
//   }
//   return acc
// }

// console.log(myReduce(arrTech, (acc, crr) => {
//   const obj = {}
//   obj.tech = crr
//   obj.name = 'Fulano'
//   acc.push(obj)
//   return acc
// }, []))

// function myReduce(arr, callback, initialAcc) {
//   let acc = initialAcc  !== undefined ? initialAcc : arr[0]
//   const init = initialAcc !== undefined ? 0 : 1
//   for(let i = init; i < arr.length; i++ ) {
//     acc = callback(acc, arr[i])
//   }
//   return acc
// }

console.log(myReduce(arr, (acc, crr) => [...acc, crr], []))
// myReduce(arr, (acc, crr) => acc + crr)
// console.log(arr.reduce((acc, crr) => acc + crr, 0))


function myReduce(arr, callback, initialAcc) {
  let acc = initialAcc  !== undefined ? initialAcc : arr[0]
  const init = initialAcc !== undefined ? 0 : 1
  for(let i = init; i < arr.length; i++ ) {
    acc = callback(acc, arr[i])
  }
  return acc
}


