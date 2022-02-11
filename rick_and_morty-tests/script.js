const content = document.getElementById('content')
const btnContainer = document.getElementById('btn-container')

// cria card dos personagem

const createCard = ({ name , image }) => {
  const div = document.createElement('div')
  div.className = 'card'
  const img = document.createElement('img')
  img.src = image
  const h3 = document.createElement('h3')
  h3.innerHTML = name
  div.appendChild(img)
  div.appendChild(h3)
  return div
}



// cria a pagina
const createPage = async (url='https://rickandmortyapi.com/api/character') => {
  const { results, info: { next, prev }} = await fetchApi(url)
  content.innerHTML = ''
  results.forEach((char) => {
    const card = createCard(char)
    content.appendChild(card)
  })

  // cira botão de próxima página
  const prevBtn = document.createElement('button')
  prevBtn.innerHTML = 'PREV'
  prevBtn.disabled = !prev
  prevBtn.addEventListener('click', () => { 
    content.innerHTML = ''
    btnContainer.innerHTML = ''
    setTimeout(() => {
      createPage(prev)
    }, 2000)
  })
  btnContainer.appendChild(prevBtn)
  
  // cria botão da pagina anterior
  const nextBtn = document.createElement('button')
  nextBtn.innerHTML = 'NEXT'
  nextBtn.disabled = !next
  nextBtn.addEventListener('click', () => { 
    content.innerHTML = '<h1>Loading...</h1>'
    btnContainer.innerHTML = ''
    setTimeout(() => {
      createPage(next)
    }, 2000)
  })

  btnContainer.appendChild(nextBtn)
 
}


createPage()
