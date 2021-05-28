function Logger(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

function WithTemplate(template: string, hookId: string) {
  return function (constructor: any) {
    const person = new constructor();

    const element = document.getElementById(hookId);
    if (element) {
      element.innerHTML = template;
      element.querySelector("h1")!.textContent = person.name;
    }
  };
}

@WithTemplate("<h1>My Person Object</h1>", "app")
class Person {
  name = "Daniele";
  constructor() {
    console.log("creating a person object with name: " + this.name);
  }
}
const pers = new Person();
console.log(pers);
