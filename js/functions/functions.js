// Função é um liquidificador

/*function fazerSuco(fruta1, fruta2) {
  return fruta1 + fruta2
}

const copo = fazerSuco('banana', 'maçã')

console.log(copo)*/


// function scope
/*let subject = 'create video'

function createThink(subject) {
  subject = 'study'
  return subject
}

console.log(subject)
console.log(createThink(subject))*/

// function hoisting

/*sayMyName();

function sayMyName() {
  console.log('Glauber')
}*/

// arrow function

/*const sayMyName = (name) => {
  console.log(name)
}

sayMayName('Glauber')*/

// callback function

/*function sayMyName(name) {
  console.log('antes de executar a função callback')

  name()

  console.log('depois de executar a callback')
}

sayMyName(
  () => {
    console.log('estou em uma callback')
  }
)*/

// function constructor

/*
  Function() constructor

    * expressão new
    * criar um novo objeto
    * this keyword
*/

function Person(name) {
  this.name = name  
  this.walk = function() {
    return this.name + " está andando" 
  }
}

const glauber = new Person("Glauber")
const joao = new Person("João")
console.log(glauber.walk())
console.log(joao.walk())
