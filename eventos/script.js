const cont = document.getElementById('content')
const cont1 = document.getElementById('cont1')
const cont2 = document.getElementById('cont2')


cont.addEventListener('click', function(event) {
  // event.stopPropagation()
  event.target.style.backgroundColor = 'red'
})

// cont1.addEventListener('click', function(event) {
//   // event.stopPropagation()
//   event.currentTarget.style.backgroundColor = 'blue'
// })

// cont2.addEventListener('click', function(event) {
//   // event.stopPropagation()
//   console.log(event.currentTarget)
//   event.currentTarget.style.backgroundColor = 'green'
// })