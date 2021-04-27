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

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "Descriptive text";
  if (element.length === 1) {
    descriptionText = "Element of length 1";
  } else if (element.length > 0) {
    descriptionText = "Got element of length: " + element.length;
  } else {
    descriptionText = "no elements?";
  }
  return [element, descriptionText];
}

console.log(countAndDescribe([]));

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return "Value " + obj[key];
}

// extractAndConvert({}, "name");
extractAndConvert({ name: "louis" }, "name"); //this instead will recognize this to be valid
