const functions = require('./functions.js')

describe('verifica as funções de functions', () => {
  it('verifica funcionamento da função de preOp', () => {
    expect(functions.preOp('2 + 2')).toStrictEqual([2, '+', 2])
    expect(() => { functions.preOp('a + b')} ).toThrow()
    expect(() => { functions.preOp('a + b')} ).toThrowError('somente numeros')
  })

  // it('verifica funcionamento da função de sum', () => {
  //   expect(functions.sumArray([6, 5, 4])).toBe(15)
  // })
})