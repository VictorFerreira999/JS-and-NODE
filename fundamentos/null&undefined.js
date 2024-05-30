// undefined é atribuído automaticamente pelo JavaScript.
// null é atribuído explicitamente pelo programador.

//undefined
let a;
console.log(a); // undefined

const obj = {};
console.log(obj.property); // undefined

function noReturn() {}
console.log(noReturn()); // undefined

//null
let b = null;
console.log(b); // null

let obj1 = { key: 'value' };
obj1 = null;
console.log(obj1); // null

let data = null;
// Data will be assigned later
data = fetchData();
