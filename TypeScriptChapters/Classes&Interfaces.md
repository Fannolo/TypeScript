# Classes & Interfaces

## Table of contents

# What's OOP

Object oriented programming is a programming technique that is very popular in other languages such as Java or C++.

The idea behind OOP is having objects that resembles as close as possible to real life objects or entities. And they have complex properties and methods.

## Classes & Instances

Classes are blueprint for objects. Classes dictates what properties what methods should an object have.

We call **Instance** of a class if an object is base on a class.

```tsx
class Department {
	name: string; // field of a class not a key & value pair.
	constructor(n: string){ // constructor is a reserved word
		//do some initialization for the object.
		this.name = n;
	}
}

//create an instance of Department
const giorgio = new Department("giorgio");
console.log(giorgio);
```

 

you can create your own function and access internal properties with the `this` keyword. 

```tsx
class Department {
	name: string; // field of a class not a key & value pair.
	constructor(n: string){ // constructor is a reserved word
		//do some initialization for the object.
		this.name = n;
	}

	describe(){
		console.log('Department: ' + this.name);
	}
  
  
}

//create an instance of Department
const giorgio = new Department("giorgio");
giorgio.describe(); // output will be 'Department: giorgio'

const copyOfGiorgio = { describe: giorgio.describe }
copyofGiorgio.describe(); // output will be 'Department: undefined'

		
```

`this` usually refers to the object that is calling the method. In the Example above `copyOfGiorgio` calls the method `describe()` but returns `undefined` this is because `copyOfGiorgio` is not an instance of the object `Department`.

TypeScript can solve the issue by specifying what `this` should be and this means that `copyOfGiorgio` will be marked with error.

```tsx
	describe(this: Department){ //we specify what this is
		console.log('Department: ' + this.name);
	}  
}

const copyOfGiorgio = { describe: giorgio.describe }
copyofGiorgio.describe(); // because we specified the type of this keyword this method will be signaled as error by TypeScript
```

## **private and public and readonly**

private and public defines the accesibility of the information stored inside the class. The use case is the following you want to unify the way of accessing an information inside the class and through custom ways:

```tsx
class Department {
	//name: string;
	//id : string;
	private employees: string[] = []; // private tells you that the value is accessible only through the class and not 
	constructor(private name: string, private id: string){ 
		//thi s.id = id;
		//this.name = n;
	}

	describe(){
		console.log('Department: ' + this.name);
	}

	addEmployee(employee: string) {
		this.employees.push(employee)
	}

	printEmployeeInformation(){
		console.log(this.employees);
	}
}

const accounting = new Department('Accounting')
accounting.addEmployee('Max');
accounting.addEmployee('Manu');

accounting.employees[2] = 'Anna' //can't do the employee is private

accounting.printEmployeeInformation(); // this prints all the information you need.
```

readonly create a deeper level of safety around some variables that you don't want to change in that case the keyword is readonly which specifically says that it's not modifiable you can only read it.

# Classes properties

## Inheritance

In JavaScript we can inherit properties and methods of other classes by using the keyword `extends` which allows you to add new properties or methods and inherit the ones declared before for instance.

## Static Methods

Static methods are useful to access properties without instanciating the whole class. You can access static properties and methods just like the `Math` library which allows you to call properties and methods without calling `new Math` first.

In order to add the static property just add the `static` keyword in front of the method or property that you need to make static.

## Getters and Setters

Getters and setters are defined using the keywords `set` and `get` which allows you to get some information from the class or just 

## Abstract Classes

Just exists to enforce the inherited classes to implement that abstract method

## Private and Singleton pattern

Singleton pattern is something you have in object oriented programming and is a pattern that makes sure that you only have instance of a class.

To declare a singleton class you need to use the `private` keyword on the constructor of the class. And to make sure you only have an instance you need to declare a static instance of the class directly inside the class.

```tsx
class AccountingDepartment extends Department{
	private static instance: AccountingDepartment;
	private constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
    this.lastReport = reports[0];
  }

	//public method to access the instance of AccountingDepartment
	getInstance(){
		if(this.instance){
			return this.instance
		}
		this.instance = new AccountingDepartment("d2", []);
		return this.instance
	}
}
```

# Interface

interfaces are used to describe how an object should look like, so it basically describes the structure of an object.

to declare an interface use the `interface` keyword, which only exists in TypeScript.

```tsx
interface Person {
  name: string;
  age: number;
  greet: (phrase: string) => void;
}

let user1: Person = {
  name: "Max",
  age: 20,
  greet(phrase: string) {
    console.log(`${phrase} ${this.name}`);
  },
};

user1.greet("ciao");
```

what's the difference between a type and interface

```tsx
//spoilers this compiles fine
type Person = {
  name: string;
  age: number;

  greet: (phrase: string) => void;
}

let user1: Person = {
  name: "Max",
  age: 20,
  greet(phrase: string) {
    console.log(`${phrase} ${this.name}`);
  },
};

user1.greet("ciao");
```

You can use them interchangeably for objects, but the silver lining of using interfaces is that it makes everything clearer at the point of view of the developers. 

Interfaces also allows you to implement them in classes. You can use interfaces to make classes to adhere to it as if it's a contract for the class to comply with it.

## Inheritance

Interfaces allow you to inherit from more than one interface, this is different from classes which allows you to inherit only from another class.

```tsx
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
```

## Interfaces as function types

You can use inferaces as custom function types:

```tsx
interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn;

add = (a: number, b: number) => {
  return a + b;
};
```

## Optional Parameters & Properties

you can define optional parameters by placing a ? at the definition of a property

```tsx
interface AddFn {
  (a?: number, b?: number): number; // a and b are optional and may require some control before using them
}

let add: AddFn;

add = (a: number, b: number) => {
  return a + b;
};
```

## Compiling Interfaces

at compilation we don't see any interfaces because they only exists in TypeScript and therefore when compiled into JavaScript these definition are not present. There will never be any traces of interfaces in your code they will only be used for checking at compilation and then they will be dumped.

## Useful links

More on (JS) Classes: [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)

More on TS Interfaces: [https://www.typescriptlang.org/docs/handbook/interfaces.html](https://www.typescriptlang.org/docs/handbook/interfaces.html)