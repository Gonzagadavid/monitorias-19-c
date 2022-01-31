const { expect } = require('@jest/globals');

describe('testa assincrono', () => {
  it('teste 1', (done) => {
    setTimeout(() => {
      try {
        // expect(5 + 5).toBe(8)
        if(5 + 5 !== 8 ) throw new Error('error')
        done()
      } catch (err) {
        expect(err.message).toBe('erro')
        done()
      }
    }, 1000);
  })
})