// before ES6 we would run .apply() to pass in an array of arguments
function doSometning (x, y, z) {
    console.log(x, y, z);
}
let args = [0, 1, 2];
//call the function passing args
doSometning.apply(null, args);

// or we can call the function without .apply() passing args with the spread operator:
doSometning(...args);

// we can use spread to combine arrays:
let array1 = [ 'one', 'two', 'three'];
let array2 = [ 'four', 'five'];

array1.push(...array2); // adds array2 items to end of array
array1.unshift(...array2); // adds array2 items to beginning of array

//or we can
let array1 = [ 'one', 'two', 'three'];
let array2 = [ ...array1, 'four', 'five'];

// We can use the spread operator to copy arrays:
let array1 = [1, 2, 3];
let array2 = [...array1]; // like array1.slice()
array2.push(4)

console.log(array1); //[1, 2, 3]
console.log(array2); // [1,2,3,4] we have two independent arays, not reference!

// We can use the spread operator with destructuring arays:
const players = [ 'adam', 'tomek', 'marek', 'kuba', 'jarek'];

const [first, second, third, ...others] = players;

console.log(first); // adam
console.log(second); // tomek
console.log(third); // marek
console.log(others); // ['kuba', 'jarek']

// We can use the spread operator with destructuring objects:
const { x, y, ...z } = { x:1, y:2, a:3, b:4 };

console.log(x); // 1
console.log(y); // 2 
console.log(z); // { a:3, b:4 }

// We can use the spread operator to expand a NodeList
const elements = [...document.querySelectorAll('div')];

console.log(elements); // Lists all the divs on the page

// REST OPERATOR - is oposite to spread
// allows us to more easily handle variable number of function parameters
function doMath(operator, ...numbers) {
    console.log(operator); // add
    console.log(numbers); // [1, 2, 3]
}

doMath('add', 1, 2, 3); // you can substitute numbers with any number of parameters