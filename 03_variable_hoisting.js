// Hoisting is JavaScript mechanism where variables and function declarations are 
// moved to the top of their scope before execution

//so you can run a function before it is defined:
sayHello();
function sayHello() {
    console.log('Hello'); //Hello
}

console.log(foobar);
// undefined - var is histed and initiaized but asigned below
var foobar = 'Woot!'

// in ES6 classes, let and const variables are hoisted but they are not initialized yet unlike vars and functions

new Thing(); // Type error
class Thing{};

console.log(foo); // 'foo' was used before it was defined
let foo = true;

console.log(bar); // 'bar' was used before it was defined
const bar = true;