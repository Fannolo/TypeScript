interface Named {
  readonly name: string;
}

interface Aged {
  readonly age: number;
}
interface Greetable extends Named, Aged {
  // readonly name: string;
  readonly greet: (phrase: string) => void;
}

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

let user1: Person = new Person("Max",19);
user1.name = "Mcihele";
user1.greet("Buondì");
console.log(user1.age);
