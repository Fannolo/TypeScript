interface Named {
  readonly name: string;
  outputName?: string;
}

interface Aged {
  readonly age: number;
}
interface Greetable extends Named, Aged {
  // readonly name: string;
  readonly greet: (phrase: string) => void;
}

interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn;

add = (a: number, b: number) => {
  return a + b;
};



class Person implements Greetable {
  age: number;
  name: string;
  constructor(n: string, a: number) {
    this.age = a;
    this.name = n;
  }
  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  }
}

let user1: Person = new Person("Max", 19);
user1.name = "Mcihele";
user1.greet("Buondì");
console.log(user1.age);
