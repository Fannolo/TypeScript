interface Greetable {
  readonly name: string;
  readonly greet: (phrase: string) => void;
}

class Person implements Greetable {
  public static age = 30;
  constructor(readonly name: string) {}
  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  }
  get age() {
    return Person.age;
  }
  set age(i: number) {
    Person.age = i;
  }
}

let user1: Person = new Person("Max");
user1.name = "Ciccio panzella"
user1.greet("ciccio bello ciao");
user1.age = 20;
console.log(user1.age);
