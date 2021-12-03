const arr = [1, 2, 3, 4];

// console.log(arr)
 const  array = []
const copy = arr

// console.log(copy)

copy.push(7)

// console.log(copy)
// console.log(arr)

const  obj = {
  key: '3', 
  key2: '4', 
  key3: '5'
}

const objCopy = {...obj};

objCopy.key5 = {key: 'isso'}

console.log(objCopy)
console.log(obj)


const arr3 = [2, 3, 4,]

const arr4 = [1, ...arr3, 5]

const arr3Copy = [...arr3] 

arr3Copy.push('9')

// console.log(arr3Copy )
// console.log(arr3 )