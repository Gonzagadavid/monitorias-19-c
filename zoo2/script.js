function myFind (array, callback) {
  let result;
  for(let  i = 0; i < array.length; i += 1) {
    const paramOfCallback = array[i]
    if(callback(paramOfCallback)) {
      result = paramOfCallback;
      break;
    }
  }

  return result
}


const peoples = [
  {
    name: 'fulano',
    age: 10
  },
  {
    name: 'Cicrano',
    age: 18
  },
  {
    name: 'Beltrana',
    age: 20
  },
  {
    name: 'Cicrana',
    age: 40
  }
]

const callback = (paramOfCallback) => paramOfCallback.age > 18;

console.log(myFind(peoples, callback)) // { name: 'Beltrana', age: 20 }

console.log(peoples.find(callback)) // { name: 'Beltrana', age: 20 }

