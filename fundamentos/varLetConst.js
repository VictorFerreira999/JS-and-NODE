/*
Escopo
   var tem escopo de função, o que significa que uma variável declarada com var é 
   visível em toda a função em que é declarada.
   Se var for declarada fora de uma função, terá escopo global.
Hoisting
   As declarações de var são "içadas" (hoisted) para o topo do seu escopo, 
   mas a inicialização não é içada. Isso significa que você pode usar a variável 
   antes de sua declaração sem causar um erro, mas o valor será undefined até a linha de inicialização.
Reassociação
   Você pode reassociar e redeclarar uma variável declarada com var dentro do mesmo escopo.*/

console.log(x); // undefined (hoisting)
var x = 5;
console.log(x); // 5

function example() {
  var y = 10;
  if (true) {
    var y = 20; // mesma variável
    console.log(y); // 20
  }
  console.log(y); // 20
}
example();

/*2. let
Escopo
   let tem escopo de bloco, o que significa que uma variável declarada com let é 
   visível apenas dentro do bloco {} em que foi declarada.
Hoisting
   As declarações de let são içadas para o topo do bloco, mas diferentemente de var,
   a inicialização não é içada e você não pode acessar a variável antes da linha de declaração.
Reassociação
    Você pode reassociar uma variável declarada com let, mas não pode redeclarar dentro do mesmo escopo.*/

console.log(a); // ReferenceError
let a = 5;
console.log(a); // 5

function exampleLet() {
  let b = 10;
  if (true) {
    let b = 20; // variável diferente
    console.log(b); // 20
  }
  console.log(b); // 10
}
exampleLet();

/*3. const
Escopo
   const também tem escopo de bloco, como let.
Hoisting
   As declarações de const são içadas para o topo do bloco, mas, novamente,
   você não pode usar a variável antes da linha de declaração.
Reassociação
   Você não pode reassociar nem redeclarar uma variável declarada com const.
   O valor deve ser atribuído na declaração e não pode ser alterado depois.*/

console.log(c); // ReferenceError
const c = 5;
console.log(c); // 5

function exampleConst() {
  const d = 10;
  if (true) {
    const d = 20; // variável diferente
    console.log(d); // 20
  }
  console.log(d); // 10
}
exampleConst();

const e = 30;
// e = 40; // TypeError: Assignment to constant variable.
