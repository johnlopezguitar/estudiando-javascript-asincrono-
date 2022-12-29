// es una declaracion que define una funcion asincrona la cual devuleve un objeto

const fnAsync = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve("Async!!"), 2000)
      : reject(new Error("error"));
  });
};

const anotherFn = async () => {
  const somethig = await fnAsync();
  console.log(somethig);
  console.log("hello");
};

console.log("before");
anotherFn();
console.log("after");
