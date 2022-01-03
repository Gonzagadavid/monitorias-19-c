const input = document.getElementById('input')
const list = document.getElementById('list')
const add = document.getElementById('add')
const save = document.getElementById('save')

const itensSave = localStorage.getItem('todo')
list.innerHTML = itensSave

function addItem() {
  const li = document.createElement('li')
  li.innerHTML = input.value
  list.appendChild(li)
}

function saveList(event) {
  const itensList = list.innerHTML
  localStorage.setItem('todo', itensList)
}


add.addEventListener('click', addItem)
save.addEventListener('click', saveList)
