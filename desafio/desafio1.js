// function countDevelopers(list) {
//   const cb = ({ continent, language }) => continent === 'Europe' && language === 'JavaScript'
//   const result = list.filter(cb).length;
//   return result
// }

// function countDevelopers(list) {
//   const cb = (dev) => dev.continent === 'Europe' && dev.language === 'JavaScript'
//   const result = list.filter(cb).length;
//   return result
// }

// function countDevelopers(list) {
//   const cb = (dev) => {
//     const { continent, language } = dev
//     return continent === 'Europe' && language === 'JavaScript'
//   }
//   const result = list.filter(cb).length;
//   return result
// }

// function countDevelopers(list) {
//   let count = 0;
  
//   for(let i = 0; i < list.length; i++) {
//     const dev = list[i]
//     const { continent, language } = dev;
//     if (continent === 'Europe' && language ===  'JavaScript') count++
//   }
  
//   return count
// }

// function countDevelopers(list) {
//   const contador  = list.reduce((count, dev) => {
//     const { continent, language } = dev;
//     if (continent === 'Europe' && language ===  'JavaScript') count++
//     return count
//   }, 0)
//   return contador
// }

// function countDevelopers(list) {
//   const contador  = list.reduce((count, { continent, language }) => {
//     if (continent === 'Europe' && language ===  'JavaScript') count++
//     return count
//   }, 0)
//   return contador
// }

const countDevelopers = (list) => (
  list.reduce((count, { continent, language }) => continent === 'Europe' && language ===  'JavaScript' ? count + 1 : count , 0)
)


describe("Tests", () => {
  it("test", () => {
var list1 = [
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
  { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
  { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
  { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
];

var list2 = [
  { firstName: 'Oliver', lastName: 'Q.', country: 'Australia', continent: 'Oceania', age: 19, language: 'HTML' },
  { firstName: 'Lukas', lastName: 'R.', country: 'Austria', continent: 'Europe', age: 89, language: 'HTML' }
];

Test.assertEquals(countDevelopers(list1), 1);
Test.assertEquals(countDevelopers(list2), 0);
  });
});
