const numberPromise = require('./numberPromise')

describe('testa a função numberPromise', () => {
  it('testa bom', async () => {
    const result = await numberPromise(6)
    expect(result).toBe('numero bom')
  })
  
  it('testa ruin try catch', async () => {
    try {
    await numberPromise(5)
      
    } catch(err) {
      expect(err.message).toBe('Muito pouco')
    }
  })
  it('testa bom then', () => {
    numberPromise(6).then((result) => {
      expect(result).toBe('numero bom')
    })
  })
  
  it('testa ruin catch', () => {
    numberPromise(5).catch((err) => {
      expect(err).toEqual(new Error('Muito pouco'))
    })
  })

  it('testando com resolves', () => {
    expect(numberPromise(6)).resolves.toBe('numero bom')
  })
  it('testando com rejects', () => {
    expect(numberPromise(5)).rejects.toThrow( {message: 'Muito pouco'})
  })
})