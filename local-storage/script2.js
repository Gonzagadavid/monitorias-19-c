const input = document.getElementById('input')
const list = document.getElementById('list')
const add = document.getElementById('add')
const save = document.getElementById('save')

const listSaveJson = localStorage.getItem('todo') 

const listSave = JSON.parse(listSaveJson)


function addSelect(event) {
  const old = document.querySelector('.select')
  if(old !== null) old.classList.remove('select')
  event.target.classList.add('select')
}

if (listSave !== null) {

  
  for (let i = 0; i < listSave.length; i += 1) {
    const li = document.createElement('li')
    li.addEventListener('click', addSelect)
    li.innerText = listSave[i].text
    li.className = listSave[i].className
    list.appendChild(li)
  }
  
}
function addItem() {
  const li = document.createElement('li')
  li.className = 'item'
  li.innerHTML = input.value
  li.addEventListener('click', addSelect)
  list.appendChild(li)
}

function saveList(event) {
  const items = [];
  const itemsList = document.querySelectorAll('li')

  for (let i = 0; i < itemsList.length; i += 1) {
    const li = itemsList[i]
    const objLi = { text: li.innerText , className: li.className }
    items.push(objLi)
  }


  localStorage.setItem('todo', JSON.stringify(items) )
}


add.addEventListener('click', addItem)
save.addEventListener('click', saveList)