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

function sayMyName(name) {
  console.log('antes de executar a função callback')

  name()

  console.log('depois de executar a callback')
}

sayMyName(
  () => {
    console.log('estou em uma callback')
  }
)