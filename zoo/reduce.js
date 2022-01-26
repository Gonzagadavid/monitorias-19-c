function isSameLanguage(list) {
 let check = true
  for(let i = 0; i < list.length; i++) {
    for(let j = 0; j < list.length; j++) {
      if(list[i].language !== list[j].language) {
        check = false
      }
    }
  }
  return check
}

function isSameLanguage(list) {
  let check = list.reduce((acc, crr)=> {
    if(!acc) return acc
    return list.every(({ language }) => crr.language === language )
  } , true)

  return check
}


function isSameLanguage(list) {
  let check = list.reduce((acc, crr) => acc && list.every(({ language }) => crr.language === language , true))
  return check
}

function isSameLanguage(list) {
  return list.reduce((acc, crr) => acc && list.every(({ language }) => crr.language === language , true))
}


const isSameLanguage = (list) => list.reduce((acc, crr) => acc && list.every(({ language }) => crr.language === language , true))


describe("Tests", () => {
  it("test", () => {
var list1 = [
  { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'JavaScript' },
  { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'JavaScript' },
  { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 65, language: 'JavaScript' },
];

var list2 = [
  { firstName: 'Mariami', lastName: 'G.', country: 'Georgia', continent: 'Europe', age: 29, language: 'Python' },
  { firstName: 'Mia', lastName: 'H.', country: 'Germany', continent: 'Europe', age: 39, language: 'Ruby' },
  { firstName: 'Maria', lastName: 'I.', country: 'Greece', continent: 'Europe', age: 32, language: 'C' },
];

Test.assertEquals(isSameLanguage(list1), true);
Test.assertEquals(isSameLanguage(list2), false);
  });
});
