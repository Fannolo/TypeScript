type Person = { name: string; age: number };

function createPerson(input1: string, input2: number): Person {
  return {
    name: input1,
    age: input2,
  };
}

function add(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

let combineValues: (a: number, b: number, c: (num: number) => void) => void;

combineValues = add;
console.log(combineValues(2, 3, addAndHandle));
function addAndHandle(num: number) {
  console.log("pippo", num + 123);
  return num + 123;
}

console.log(add(1, 2, addAndHandle));
