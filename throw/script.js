const input = document.getElementById('input1')
const input2 = document.getElementById('input2')
const input3 = document.getElementById('input3')
const input4 = document.getElementById('input4')
const result = document.getElementById('result')
const btn = document.getElementById('btn')


const sum = (a, b) => {
  if (Number.isNaN(Number(a)) || Number.isNaN(Number(b))) throw new Error('somente numeros em soma')
  return Number(a) + Number(b)
}

const mult = (a, b) => {
  if (Number.isNaN(Number(a)) || Number.isNaN(Number(b))) throw new Error('somente numeros em multiplicação')
  return Number(a) * Number(b)
}

const div = (a, b) => {
  if (Number.isNaN(Number(a)) || Number.isNaN(Number(b))) throw new Error('somente numeros divisão')
  return Number(a) / Number(b)
}

const exec = () => {
  try {
    const response = sum(input.value, input2.value)
    const response2 = mult(input3.value, input4.value)
    const value = div(response2, response)
    result.innerHTML = value
  } catch(err) {
    
    result.innerHTML = `${input.value} ${input2.value} ${input3.value} ${input4.value}`
  }
}

btn.addEventListener('click', exec)

