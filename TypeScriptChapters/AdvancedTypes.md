# Advanced Types

# Intersection types

intersection uses the `&` keyword to intersect two types the concepts are very similar to interfaces but the main difference is that types are cleaner to read and also can be used for single variables instead of objects

```tsx
type Admin = {
  name: string;
  priviledges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

//example of an object implementing the intersected types
const el: ElevatedEmployee = {
  name: "Manu",
  priviledges: ["create-server"],
  startDate: new Date(),
};

//example of a combinable intersection
type Combinable = string | number;
type Numeric = boolean | number;
type Universal = Combinable & Numeric;

```

# Type guarding

> In general type guarding is the name for the idea of checking the type of a property or if a property or a method exists before trying to use it.

The statement above is true especially for codes that are very flexible and implements the flexibility given by union types. 

type guards are extremely useful for making sure that the values you are passing are the correct ones. This is especially true when you are dealing with a very flexible code with a bunch of Union Types in it.

```tsx
//example of type guarding
type Combinable = string | number;
type Numeric = boolean | number;
type Universal = Combinable & Numeric;

//typeguard with typeof
function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}
```

The above is using the `typeof` keyword for type guarding, but in more complex cases we might not be able to use it for example when we need to type guarding a custom type which is not built in JavaScript type.

```tsx
type Admin = {
  name: string;
  priviledges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

//intersection between Admin and Employee types
type ElevatedEmployee = Admin & Employee;

//el is an object of ElevatedEmployee which can have the properties of Admin and Employee
const el: ElevatedEmployee = {
  name: "Manu",
  priviledges: ["create-server"],
  startDate: new Date(),
};

//This is a UnionType of Employee or Admin type we're not sure.
type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log("Employee's name: ", emp.name);
	//type guarding with the "in" keyword
  if ("priviledges" in emp) {
    console.log("Employee's privileges: ", emp.priviledges);
  }
	//type guarding with the "in" keyword
  if ("startDate" in emp) {
    console.log("Employee start date: ", emp.startDate);
  }
}

printEmployeeInformation(el);
```

## instanceof

instanceof is used in case we need to type guarding a class it is a built in JavaScript function. Even though JavaScript knows nothing about custom types in the end it looks at the constructor of the class.

```tsx
class Car {
  drive() {
    console.log("driving a car");
  }
}

class Truck {
  drive() {
    console.log("driving truck");
  }

  loadCargo(amount: number) {
    console.log("Loading cargo: ", amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}
useVehicle(v1);
useVehicle(v2);
```

# Discriminated Union

Discriminated Union is a pattern for type guarding knowing properties we know there must be inside the object we are manipulating

```tsx
type Bird = {
  type: "bird";
  flyingSpeed: number;
};

type Horse = {
  type: "horse";
  runningSpeed: number;
};

type Animal = Horse | Bird;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
    case "horse":
      speed = animal.runningSpeed;
  }
  console.log("Moving animal at speed " + speed);
}

moveAnimal({ type: "horse", runningSpeed: 10 });
moveAnimal({ type: "bird", flyingSpeed: 10 });
```

# Type casting

Casting is useful when we are retrieving an element that TypeScript is not 

```tsx
const paragraph = document.getElementById(
  "message-output"
)! as HTMLInputElement;
const userInputElement = <HTMLInputElement>(
  document.getElementById("user-input-element")!
);

const userInputElemen2 = document.getElementById("user-input-element2");

paragraph.value = "ciao";
userInputElement.value = "Hi there";

if (userInputElemen2) {
  (userInputElemen2 as HTMLInputElement).value = "Hello there again!";
}
```

# Function overload

function overload is a TypeScript feature that allows you to define multiple function signatures. This matters because in a function that accepts multiple types the returning type is not clear and this does not allow you to do any kind of operation of the result.

For example the following code does not work because TypeScript is not correctly inferring the type of the returning element therefore is not capable to decide if you can call split on the result.

```tsx
function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result = add("Max ", "Mara");

result.split(" "); //throwing an error because TypeScript is not finding the error
```

But with function overloads we are telling TypeScript for which input expect this returning type and therefore when we call split on result will not give us an error anymore

```tsx
function add(a: number, b: number): number; //Function overload
function add(a: number, b: string): string; //Function overload
function add(a: string, b: string): string; //Function overload
function add(a: string, b: number): string; //Function overload
function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result = add("Max ", "Mara");

result.split(" ");
```

# Optional Chaining

use ?. accessing properties of the object you are not sure that exists.

```tsx
const fetchUserData = {
  id: "ul",
  name: "Max",
//   job: { title: "pipe constructor" },
};

console.log(fetchUserData?.job?.title);
```

# Nullish coalescing

```tsx
const someVariable = undefined;
const storedSomeVariable = someVariable ?? "DEFAULT";
console.log(storedSomeVariable);
```

# Useful resources & links

More on Advanced Types: [https://www.typescriptlang.org/docs/handbook/advanced-types.html](https://www.typescriptlang.org/docs/handbook/advanced-types.html)