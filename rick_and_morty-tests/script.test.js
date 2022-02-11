const data = require('./mock/respApi');
const { fetchApi, fetchResp  } = require('./fetchApi');
const { expect } = require('@jest/globals');

global.fetch = jest.fn(async (url) => {
  if(url === 'https://rickandmortyapi.com/api/character') return { status: 200, ok: true, json: async () => data}
  return { status: 404, ok: false, json: async () => {}}
})

global.alert = jest.fn((message) => message )


describe('testa comportamento das funçoes', () => {
  it('testa a função fecthApi com async', async () => {
     const resp = await fetchApi('https://rickandmortyapi.com/api/character')
     expect(resp).toStrictEqual(data)

     await fetchApi('https://urlerrafa.com/api')
     expect(global.alert).toBeCalledWith('ocorreu um erro com a requisição')
  })


  it('testa com fetchApi com then', () => {
    fetchApi('https://rickandmortyapi.com/api/character').then((resp) => {
      expect(resp).toStrictEqual(data)
    })
  
    fetchApi('https://urlerrafa.com/api').then(() => {
      expect(global.alert).toBeCalledWith('ocorreu um erro com a requisição')
    })
  })

  it('testa fectApi com resolves', async() => {
    expect(fetchApi('https://rickandmortyapi.com/api/character')).resolves.toStrictEqual(data)
   
    await fetchApi('https://urlerrafa.com/api')
    expect(global.alert).toBeCalledWith('ocorreu um erro com a requisição')
  })

  it('testa a função fecthResp com async e try catch', async () => {
    const resp = await fetchResp({ status: 200, ok: true, json: async () => data})
    expect(resp).toStrictEqual(data)

    try {
      await fetchResp({ status: 404, ok: false, json: async () => {}})
    } catch (err) {
      expect(err.message).toBe('ocorreu um erro com a requisição')
    }
  })


  it('testa com fetchResp com then e catch', () => {
    fetchResp({ status: 200, ok: true, json: async () => data}).then((resp) => {
      expect(resp).toStrictEqual(data)
    })
  
    fetchResp({ status: 404, ok: false, json: async () => {}}).catch((err) => {
      expect(err.message).toBe('ocorreu um erro com a requisição')
    })
  })

  it('testa fetchResp com resolves', async() => {
    expect(fetchResp({ status: 200, ok: true, json: async () => data})).resolves.toStrictEqual(data)

    expect(fetchResp({ status: 404, ok: false, json: async () => {}}))
    .rejects.toThrow({ message: 'ocorreu um erro com a requisição'})
  })

})
