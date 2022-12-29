//promesas o promise

/*una promesa tiene estados pendientes, 
cumplido, rechazado */

const Promise = new Promise(function (resolve, reject) {
  resolve("hey todo esta correcto ");
});

// otro ejemplo mas complejo de promesa

const cows = 15;

const countcows = new Promise(function (resolve, reject) {
  if (cows > 10) {
    resolve(`We have ${cows} on the farm  `);
  } else {
    reject("there is no cows on the farm ");
  }
});

countcows
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(console.log("finally"));
