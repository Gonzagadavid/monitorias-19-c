class Animal {
  constructor(nome, especie) {
    this.nome = nome
    this.especie = especie
  }

  comer() {
    console.log(`${this.nome} esta comendo`)
  }
}

const cachorro = new Animal('totó', 'cachorro')

const gato = new Animal('xena', 'gato')
console.log(cachorro)
console.log(gato)

// cachorro.comer()
// gato.comer()
