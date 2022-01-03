const input = document.getElementById('input')
const list = document.getElementById('list')
const add = document.getElementById('add')
const save = document.getElementById('save')

const itensSaveJson = localStorage.getItem('todo')
const itensJS = JSON.parse(itensSaveJson)

function addClass (event) {
  const oldElement = document.querySelector('.select')
  oldElement.classList.remove('select')
  event.target.classList.toggle('select')
}


for(let i = 0; i < itensJS.length; i++) {
  const li = document.createElement('li')
  li.addEventListener('click', addClass)
  li.innerHTML = itensJS[i].text
  li.className = itensJS[i].className
  list.appendChild(li)
}

function addItem() {
  const li = document.createElement('li')
  li.addEventListener('click', addClass)
  li.className = 'item'
  li.innerHTML = input.value
  list.appendChild(li)
}

function saveList(event) {
  const itens = []
  const itensList = document.getElementsByTagName('li')
  for(let i = 0; i < itensList.length; i++) {
    const text = itensList[i].innerHTML
    const className = itensList[i].className
    const objItem = { text, className }
    itens.push(objItem)

  }

  const itensJson = JSON.stringify(itens)


  localStorage.setItem('todo', itensJson)
}


add.addEventListener('click', addItem)
save.addEventListener('click', saveList)