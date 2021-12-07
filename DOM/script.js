const content = document.getElementById('content');
const numbers = document.getElementsByClassName('number')
const btn = document.getElementById('one')

const p = document.createElement('p')
p.className = 'number'
p.innerHTML = '10'
content.appendChild(p)


btn.addEventListener('click', function(event) {
  for(let i = numbers.length - 1; i >= 0 ; i -= 1) {
    numbers[i].className = ' outra class'
  }
})


const h1 = document.querySelector('#contet2 h1')
const h12 = document.querySelector('#contet3 h1')

h1.style.backgroundColor = 'blue'
h12.style.backgroundColor = 'red'