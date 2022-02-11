// trata erro do fetch
async function fetchResp (resp) {
  if(!resp.ok) throw new Error('ocorreu um erro com a requisição')
  const respApi = await resp.json();
  return respApi
}

//função de requisição da api utilizando o then
// function fetchApi () {
//   return fetch('https://rickandmortyapi.com/api/character')
//     .then((resp) => fetchResp(resp))
//     .then((resp) => console.log(resp))
//     .catch((err) => console.log(err))
// }

// console.log(fetchApi())

// requisição da api utitilizando o async await
const fetchApi = async (url) => {
  try {
    const resp = await fetch(url);
    const respApi = await fetchResp(resp)
    return respApi
  }catch(err) {
    alert(err.message)
  }
}


if (typeof module !== undefined) {

  module.exports = {
    fetchApi,
    fetchResp,
  }
  
}
