const string = 'skol 2l. 4.40 \n bhrama prom. 3.90 \n coca-cola 5.00'

const newString = string.replace(/(\d+)\.(\d{2})/g, 'R$$1,$2')

console.log(newString) 
//skol 2l. R$1,40 
// bhrama prom. R$1,90 
// coca-cola R$1,00


