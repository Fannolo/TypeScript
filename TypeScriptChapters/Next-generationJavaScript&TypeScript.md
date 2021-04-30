# Next-generation: JavaScript & TypeScript

## Table of contents

# Introduction

this is a small chapter over the new features introduced to ES6 for JavaScript

ECMAScript is the language, whereas JavaScript, JScript, and even ActionScript 3 are called "dialects". [Wikipedia](http://en.wikipedia.org/wiki/ECMAScript) sheds some light on this

# Variables declaration: let & const

`let` has a local scope compare to previous `var` . `let` introduces a new concept called blocked scope which mean variables declared with `let` **inside a block is only available inside that block.**

```tsx
if(age>20){
	let isOld = true
}

console.log(isOld) //isOld is not accessible since it's declared inside the if statement
```

# Arrow functions

```tsx
const add = (a:number, b:number) => a+b;
```

Arrow functions a new thing in JavaScript that brings some enhancements to declaring functions. Instead the usual `function` keyword functions since ES6 can be declared using the following syntax `() => {}` .

# Default Function Parameters

We can assign default values to function parameters in case we don't have any value in some cases, the default value will be overwritten once we pass a new value to it:

```tsx
function add(a:number, b:number = 1):number{
	return a+b;
}

add(2) //this will return 3
add(2,5) //this will return 7
```

# Spread operator (...)

This operator is used on objects and arrays, and what it does is to tell JavaScript to "spread" each item.

This is usually done if we want to combine two data structures or add some information to the already existing data structures without encountering errors

```tsx
const hobbies = ['Sports', 'Cooking'];
const activeHobbier = ['Sleeping'];

activeHobbies.push(...hobbies); //or
const activeHobbier = ['Sleeping', ...hobbies];
```

Same goes with objects, usually when you want to copy something JavaScript using just the assigning operator is not enough because this tells JavaScript to point at the same memory allocation of the previous element which means if I change something in the new one this change will be reflected in the old one as well.

```tsx
const person = {
	name: 'Max',
	age: 30
}

const copiedPerson = person //this is not a real copy
const copiedPerson2 = { ...person } // this produces two different objects
```

# Rest parameters

rest parameters is a new concept in JavaScript that lets you pass as many parameters you want to a function using the spread operator `...` .

Setting the spread operator as parameter of the definition of a function actually tells JavaScript to put all the values into an array :

```tsx
const add = (...numbers: number[]) => numbers.reduce((a,b)=> a+b,0); // this returns a number

add(1,2,3,4,5,6) // numbers = 1,2,3,4,5,6
```

# Array and Objects Destructuring

Destructuring lets you access specific properties inside data structure with simply wrapping the variable around the braces defined for data structure from which you are getting it.

```tsx
const greetingObject = {
	greeting: "ciao",
}
const { greeting } = greetingsObject //greeting = ciao

const hobbies = ['sleeping', 'working', 'studying']

const [ hobby1, hobby2, hobby3 ] = hobbies //'sleeping', 'working', 'studying'
```

# Further reads

You can look at JavaScript official documents on MDN Web Docs [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript).