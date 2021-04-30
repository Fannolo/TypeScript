# Generics

# Generics

Generics is another way to guarantee the reusability of your code that is, being able to define a component that can work over a variety of types rather than a single one.

In the following example we used an Array that is a Generic in TypeScript and a Promise both of them are Generics and you can define the type it should aspect from the type passed in the angle brackets.

```tsx
//Example of a Generic which is similar to string[]
const names: Array<string> = [];
names.push("ciao", "davide");
names[0].split(" ");

const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("this is done!");
  }, 2000);
});

promise.then((data) => data.split(""));
```

# Creating a Generic function

As said before Generics offer a generalization when defining some functions or classes this guarantees us to avoid having unspecific object and letting TypeScript infers the types of those objects. E.g.

```tsx
//creating our own Generic passing T, U we are telling TypeScript that 
//often the two parameters passed to the merge function yield different types
//and by defining the generic TypeScript is able to infer the returning object
//and its properties.
function merge<T, U>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergeObject = merge({ name: "Pierino" }, { age: 2 });
console.log(mergeObject.name, mergeObject.age); //TypeScript infers the object
```

## Working with Constraints

Constraints are useful for furthermore restrain types that a Generic can be passed. It is defined through the keyword `extends` which allows you to define what you should expect from that generic type.

```tsx
//Generic Functions using the extends keyword to satisfy the minimum type required
function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergeObject = merge({ name: "Pierino" }, { age: 2 });
const mergeObject2 = merge({ name: "Pierino" }, 39); //not allowed because 39 is not a object

console.log(mergeObject.name, mergeObject.age); //TypeScript infers the type
```

## Another (more complex) Generic function

Generic functions can add a constraint as an interface, this guarantee a more specific description of the function

```tsx
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

console.log(countAndDescribe("Hi there!"));
```

## keyof

`keyof` is used together with the `extends` keyword to tell TypeScript that the object will have a key of that type:

```tsx
function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return "Value " + obj[key];
}

extractAndConvert({}, "name"); //this will generate an error because there is not such key inside name
extractAndConvert({ name: "louis" }, "name"); //this instead will recognize this to be valid
```

# Generic Classes

The idea behind generic classes is the same for the generic functions we give some level of flexibility to it but it is still very strictly typed, this way we can have a class that takes any type of input, but we still have some level of type checking inside of it.

```tsx
//Simple Generic Class for simple men
class DataStorage<T> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }
  getItems() {
    return [...this.data];
  }
}
//full flexibility, but we give some information to make it very flexible but still very strong typed
const stringStorage = new DataStorage<string>();
stringStorage.addItem("Max");
stringStorage.addItem("ciccio");
stringStorage.removeItem("Max");
console.log(stringStorage.getItems());
```

a more specialized versione of the code above to make it work only with primitive types this way we avoid encountering problems with obejcts

```tsx
class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

	removeItem<S extends T>(item: S) {
    this.data.splice(this.data.indexOf(item), 1); // remove 1 element at the index of item
  }
  getItems() {
    return [...this.data];
  }
}
//object in javascript are referenced which means they all point to a specific memory allocation
const objectStorage = new DataStorage<object>(); // throw an errorobjects are not allowed 
objectStorage.addItem({ name: "Max" });
objectStorage.addItem({ name: "ciccio" });
//...
objectStorage.removeItem({ name: "Max" });
console.log(objectStorage.getItems());
```

# Generic Utility Types

Some examples of how you can create generic utility types.

In the following example we are taking advantage of the partial keyword which means that we can initilalize the property at the beginning whatever value we want because in the end we know that object will conform to the inferface we are defining.

```tsx
//generic utility types
//can give you extra type safety or extra flexibility type
interface CourseGoal {
  title?: string;
  description?: string;
  completetUntil?: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  //we are taking advantage the partial keyword which means
  //that we can initialize the property at the beginning whatever
  //we want and eventually that will be an object of type CourseGoal
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completetUntil = date;
  //returning as a Type
  return courseGoal as CourseGoal;
}

const james: ReadonlyArray<string> = ["max", "mary"];

// james.push("max"); //can't do this it's readonly
// james.pop(); //can't do this it's readonly
```

# Useful resources & links

More on Generics: [https://www.typescriptlang.org/docs/handbook/generics.html](https://www.typescriptlang.org/docs/handbook/generics.html)