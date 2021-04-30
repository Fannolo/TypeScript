# Getting Started: Core

## Table of contents

# Core types

This are the core types of TypeScript from JavaScript the main difference is the letter case (TypeScript lower and JavaScript upper).

 G**o**o**d to** k**no**w**:**

- numbers contains any kind of number such as integers, floats, negatives ...
- booleans are just true and false no [truthy or falsy value](https://www.notion.so/Truthy-and-Falsy-When-All-is-Not-Equal-in-JavaScript-0a5a370175d4450da6025516c9eb16c6)

```jsx
number      1,5.3,-10      
string      "Hi"
boolean     true,false
```

## Example using core types

This is an example of using core types for defining the parameters of a `function add` that takes two numbers. The following code will throw an error at compilation because TypeScript detects that `number1` is a `string` and not a `number` .

TypeScript's type system only helps you during development, it doesn't change how JavaScript works at runtime.

```tsx
function add(n1: number,n2: number){
	return n1 + n2
}

const number1 = '5';
const number2 = 2.8
//TypeScript will launch an error
const result = add(number1, number2)
```

This is useful because in plain JavaScript the `function add` will return the concatenation of a `string` and `number` which in our case the code will return a `52.8` instead of `7.8` .

## TypeScript Types vs JavaScript Types.

The main difference: is JavaScript has "dynamic types" ( resolved at runtime ), while TypeScript uses "static types" ( set during development )

# Advanced Types

types that are bit more complex than single normal types.

## Object Types

Object types are declared as **key type** **pairs** instead of key value pairs like any JavaScript would be declared.

```tsx
/*
Inferred type from TypeScript:

const person:{
	name: string;
	age: number;
}
*/

const person = {
	name: 'Maximilian',
	age: 30,
}
```

We could write down explicitly the type of the properties of the object as it follows:

```tsx
const person: {
	name: string;
	age: number;
} = {
	name: 'Maximilian',
	age: 30,
};
```

## Array Types

Array Types are declared as the type of the elements it will contain and square brackets `[]` 

```tsx
// this array will only contain strings
const array: string[]
array = 'Sports' // error single string instead of string[]
array = ['Sports', 1] // error contains a number
array = ['Sports'] // valid

//if we want to support an array with mixed values we can use the Type any[]
const array: any[];
array = ['Sports', 1]; //valid
array = ['Sports']; // valid
array = 'Sports' // error not an array
```

## Working with Tuples

Commonly JavaScript doesn't support tuples, in TypeScript though it is, and has the following structure: 

```tsx
//Tuple
[1,2]
```

it's basically a fixend lenght array of two elements which the first one is usually a numerical and the second is usually a string. This is useful because if you know in advance that you need a fixed amount array and the types of the elements you can restrict further more the object.

```tsx
const person:{
	name: string;
	role: [number, string];
} = {
	name: 'Massimo',
	role: [1,'author']
}
```

## Working with Enums

**Definition:** enum is a custom type and assigns labels to numbers.

**Conventions**: the first letter of the enum in uppercase, and everything inside curly brackets in uppercase.

`enum {NEW, OLD}`

```tsx
enum Role {ADMIN, READ_ONLY, AUTHOR}; // {0,1,2}

const person = {
	role: Role.ADMIN
}
//this will infer
```

## **Union Types**

union types basically lets you declare that a value could be either one or another `string | number` giving you more flexibility over the declaration of types.

```tsx
function combine( p1: number | string, p2: number | string)
```

## Literal Types

Literal types are used in case you know what value exactly that a variable should hold.

```tsx
function combine(p1: 'as-number' | 'as-text')
```

in the example p1 can either be of value `'as-number'` or `'as-text'` .

## Custom Types

we can declare our custom types as the following:

```tsx
type Combinable = number | string

function combine(p1: Combinable, p2: Combinable){
	return p1 + p2;
}
```

Examples:

You can simplify the following

```tsx
function greet(user: { name: string; age: number }) {
  console.log('Hi, I am ' + user.name);
}
 
function isOlder(user: { name: string; age: number }, checkAge: number) {
  return checkAge > user.age;
}
```

to

```tsx
type User = { name: string; age: number };
 
function greet(user: User) {
  console.log('Hi, I am ' + user.name);
}
 
function isOlder(user: User, checkAge: number) {
  return checkAge > user.age;
}
```

# Functions

## Return Types & Void

it is better to let TypeScript infer the type of the returning value of a function

```tsx
/*
function add(n1: number, n2: number): number
*/
function add(n1: number, n2: number){
	return n1 + n2
}
```

you can also explicitly declare the type of the return

```tsx
function add(n1: number, n2:number): number {
}
```

Another Type that doesn't exist in JavaScript is the white type `:void` which means that the function doesn't return any particular value in the return statement.

```tsx
function add(n1: number, n2:number): void {
	console.log(n1 + n2)
}

//function add(n1: number, n2: number) : void
function add(n1: number, n2:number) {
	console.log(n1 + n2)
}
```

## Function as Types

```tsx
function add(n1: number, n2:number): number {
	return(n1 + n2)
}
//generalized declaration of the type
let combineValues: Function;
//more specified declaration of the type for more granularity
let combineValues: (a:number, b:number)=>number;
combineValues = add;
console.log(combineValues(8,9)); //expected 17
```

### Callbacks

```tsx
type Callback = (a:number,b:number)=>void;
function add(n1:number, n2: number, cb: Callback){
  console.log(n1+n2);
  cb(n1,n2);
}

add(1,2,(a,b)=>console.log(a+b))
```

## Unknown Type

the unknown type is used when you don't know what the value will be so in some ways is very similar to any because it lets you assign any kind of value to the variable since it's unknown, but it's a bit more restricted:

```tsx
let userinput: unknown;
let username: string;

userinput = 5;
userinput = "Max";

if(typeof userinput === 'string'){
  username = userinput;
}
```

Any is the most flexible type and disables all kind of type checking

```tsx
let userinput: any;
let username: string;
userinput = 5;
userinput = "Max";

username = userinput
```

## The Never Type

The never type is used in case of function never returning any type of value just like in case of throwing error for errors handling:

```tsx
function generateError(message:string, code: number):never{
  throw { message:message, errorCode: code};
}
//this function crashes part of the script because it throws an error
generateError("An error occurred", 500); //this never return anything not even undefined
```

# Further reads

You can find the documentation to TypeScript basic types [here](https://www.typescriptlang.org/docs/handbook/basic-types.html).