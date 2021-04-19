//Example of a Generic which is similar to string[]
const names: Array<string> = [];
names.push("ciao", "davide");
names[0].split(" ");

const promise: Promise<string> = new Promise((resolve) => {
  setTimeout(() => {
    resolve("this is done!");
  }, 2000);
});

promise.then((data) => data.split(""));

//Generic Functions
function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergeObject = merge({ name: "Pierino" }, { age: 2 });
console.log(mergeObject.name, mergeObject.age); //TypeScript can't know this
