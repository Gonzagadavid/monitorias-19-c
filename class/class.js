// class Animal {
//   constructor(especie, nome) {
//     this.especie = especie
//     this.nome = nome
//   }

//   comer() {
//     return `${this.nome} está comendo!`
//   }
// }

// const rex = new Animal('cachorro', 'rex')

// const xena = new Animal('gato', 'xena')

// console.log(rex.comer())

// console.log(xena.comer())


///////////////////////////////////////////////////////////////

class Animal {
  constructor(especie, nome) {
    this.especie = especie
    this.nome = nome
    this.locacao = 'America do Sul'
  }

  info() {
    return `${this.nome} é da especie ${this.especie}`
  }

  comer() {
    return `${this.nome} está comendo!`
  }
}

class Cachorro extends Animal {
  constructor(nome, raca){
    super('cachorro', nome)
    this.raca = raca
  }

  getRaca() {
    return `${this.nome} possui a raça ${this.raca}`
  }
  
  latir() {
    return `${this.nome} está latindo`
  }
}

class PastorAlemao extends Cachorro {
   constructor(nome) {
     super(nome, 'Pastor alemão')
   }

   getSpecie() {
     return this.info()
   }
  
}

class Dono extends cachorro {
  
}

class Gato extends Animal {
  constructor(nome) {
    super('gato', nome)
  }

  miar() {
    return `${this.nome} está miando`
  }

  briga() {
    return `${this.name} está brigando com ${new Cachorro('Rex')}`
  }
}

const rex = new Cachorro('rex', 'vira-lata')

const thor = new Cachorro('Thor', 'pit-bull')

const xena = new Gato('xena')

// console.log(rex.latir())

// console.log(xena.miar())

// console.log(thor.latir())

const raika = new PastorAlemao('Raika')

console.log(Cachorro.getRaca())
