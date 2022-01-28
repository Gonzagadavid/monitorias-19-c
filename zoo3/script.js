const{ list2, list1 } = require('./list')


const callback = (acc, crr) => {
  const continetKey = crr.continent
  if(!acc[continetKey]) {// { brazil: 2, china: 3, europe: 1}
    acc[continetKey] = 1
    return acc
  }
  
  acc[continetKey] += 1
  return acc
}

const callback = (acc, crr) => {
  const continetKey = crr.continent
  if(!acc[continetKey]) { //{ brazil: 2, china: 3, europe:}
    //{...obj}
    return {...acc, [continetKey]: 1}
  }
  

  return {...acc, [continetKey]: acc[continetKey] + 1}
}

const callback = (acc, { continent }) => !acc[continent] ?  {...acc, [continent]: 1} : {...acc, [continent]: acc[continent] + 1}


const result = list2.reduce(callback, {})

// console.log(result)

// { Americas: 2, Europe: 6, Asia: 2 }


// const devC = list1.find((dev) => dev.language === 'C');

const devC = list1.find(({ language }) => language === 'C');

// console.log(devC)

// const devMap = list1.map(({ language }) => language)

// const devMap = list1.map((dev) => dev.language === 'JavaScript' ? dev : 'outStack')

const devMap = list1.map(({ language, firstName }) => language === 'JavaScript' ? firstName : 'outStack')

// const devMap = list1.map(({ language, firstName }) => firstName || 'outStack')

console.log(devMap)

