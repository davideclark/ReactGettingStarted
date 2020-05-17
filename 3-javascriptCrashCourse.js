//Modern Java script crash course
// https://jscomplete.com/playground/s493589


// variables and block scope


// arrow function demo
const square = a => a * a;

let s = square(10);
display.log(s) 

let m = [1, 2, 3, 4, 5].map(a => a * a)
display.log(m) 

const InverseOfPi = 1 / Math.PI;

// Object Literal demo

const mystery = 'answer';
const obj = {
  p1 : 10,
  p2 : 20,
  f1(m) {display.log(m)},  // normal function def
  f2: () => {},   // arrow syntax
  [mystery]: 42,
  InverseOfPi, // adds property called InverseOfPi which equals InverseOfPi
}

obj.f1('test');
obj.f1(obj.answer);
obj.f1(InverseOfPi);

// Destructuring and Rest / Spread demo...

// instead of ...
// const PI = Math.PI;
// const E = Math.E;
// const SQRT2 = Math.SQRT2;
// instead we can do this..
const {PI, E, SQRT2} = Math  //this is Destructuring
display.log('PI = ' + PI)

const circle = {
  label: 'circleX',
  radius : 2,
}
// precision is optional with default value of 2,  = {}  makes it optional
const circleArea = ({radius}, {precision = 2} = {} ) => 
(PI * radius * radius).toFixed(precision);
display.log(circleArea(circle))
display.log(circleArea(circle, {precision:5}))


// Destructuring array example
const [first,second,,forth] = [10,20,30,40]
display.log(second)

const [ItemOne, ...restOfItems]= [10,20,30,40]
display.log(ItemOne)
display.log(restOfItems)

// we can also do this with  objets
const data = {
  temp1: '001',
  temp2: '002',
  firstName :'dave',
  lastname : 'Doe'
}

const {temp1,temp2, ...person} = data;
display.log(temp1);
display.log(temp2);
display.log(person);

// we can also spread an array into a new array
const newArray = [...restOfItems];
display.log(newArray);


// Template string
const h = `<div>${Math.random()}</div>`;
display.log(h);

// .mountNode > div {
//   border: 1px solid #ccc;
//   margin: 1em;
//   padding: 1em;
// }

// .mountNode input {
//   display: block;
//   margin: 1rem 0;
// }

// .mountNode pre {
//   background-color: white;
// }