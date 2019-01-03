// if we want to asign variables to properties of an object
const first = 'Marek';
const last = 'Burek';
const age = 29;

const person = {
    first: first,
    last: last,
    age: age
};
// or
const person = {
    firstName: first,
    lastName: last,
    age
};

// we can also use a shorter syntax for method definitions on object initializers
var obj = {
    foo: function() {
        console.log('fo');
    },
    bar: function() {
        console.log('bar');
    }
};
// but now we dont need the function keyword:
var obj = {
    foo() {
        console.log('fo');
    },
    bar() {
        console.log('bar');
    }
};

// We can define keys that evaluate on runtime inside object literals:
let i = 0;
const a = {
    ['foo' + ++i]: i,
    ['foo' + ++i]: i,
    ['foo' + ++i]: i
};

console.log(a.foo1); // 1
console.log(a.foo2); // 2
console.log(a.foo3); // 3
// or with ES6 syntax:
let i = 0;
const a = {
    [`foo${++i}`]: i,
    [`foo${++i}`]: i,
    [`foo${++i}`]: i
};
