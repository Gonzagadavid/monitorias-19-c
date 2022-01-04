const input = document.getElementById('input')
const list = document.getElementById('list')
const add = document.getElementById('add')
const save = document.getElementById('save')

const listSave = localStorage.getItem('todo')

list.innerHTML = listSave

function addItem() {
  const li = document.createElement('li')
  li.className = 'item'
  li.innerHTML = input.value
  list.appendChild(li)
}

function saveList(event) {
  localStorage.setItem('todo', list.innerHTML)
}


add.addEventListener('click', addItem)
save.addEventListener('click', saveList)
