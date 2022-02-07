const email = document.getElementById('email');
const btn = document.getElementById('enter-btn')


const validateEmail = (event) =>  {
  const text = email.value
  const validated = /^[a-z.\-_\d]+@[a-z]+\.com(\.br)?$/.test(text)
  email.style.borderColor = validated ? 'green' : 'red'
  btn.disabled = !validated
}

email.addEventListener('input', validateEmail)
