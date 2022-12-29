//callback

// es una funcion que pasa como argumento otra funcion

// -- sumar dos elementos
function sum(num1, num2) {
  return num1 + num2;
}

function calc(num1, num2, callback) {
  return callback(num1, num2);
}

console.log(calc(2, 2, sum));

/*ejemplo 2 de callback setTimeout
por si misma ya es un callback*/

setTimeout(function () {
  console.log("hola javascript");
}, 2000);

// tercer ejemplo  de como hacer un callback
function gretting(name) {
  console.log(`hola ${name}`);
}
setTimeout(gretting, 5000, "John");
