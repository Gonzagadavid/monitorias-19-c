const date = document.getElementById('date');

function formatDate(event) {

  console.log(event.key)
  const numbers = '1234567890';
  let value = date.value
  const key = event.key;

  if (key === 'Backspace') return;

  if (!numbers.includes(key)) {
    date.value = value.replace(key, '')
  }
   
  if (value.length > 10) {
    date.value = value.slice(0, -1)
  }
   
  if( value.length === 2) {
    if (Number(value) > 31) {
      value = '31'
    }

    if (Number(value) < 1) {
      value = '01'
    }

    date.value = value + '/'
  }

  if( value.length === 5) {
    if (Number(value.slice(-2)) > 12) {
      value = value.slice(0, 3) + '12'
    }

    if (Number(value.slice(-2) < 1)) {
      value = value.slice(0, 3) + '01'
    }

    date.value = value + '/'
  }

  
}



date.addEventListener('keyup', formatDate )

// dd/mm/aaaa
