// Traditional function expression:
const addNumbers = function (num1, num2) {
    return num1 + num2;
}

// Arrow functions:
const addNumbers = (num1, num2) => {
    return num1 + num2;
}

// Arrow function expression with implicit return:
const addNumbers = (num1, num2) => num1 + num2;

// Arrow function without arguments:
const sayHello = () => console.log('hello');

// Arrow function with single argument:
const sayHello = name => console.log( 'Hello ' + name);
// or
const sayHello = name => console.log(`Hello ${name}`);

const sayHello = (fName, sName) => console.log(`Hello ${fName} ${sName}`);


//THIS

// The value of 'this' is picked up from its surroundings (lexical)
// Therefore you dont need bind(), that, self any more!

// old days:
function Person(){
    this.age = 0;

    setInterval(function() {
        this.age++; // 'this'refers to the Window
    }, 1000);
}
//prints nothing
// so we needed:
function Person(){
    var that = this;
    this.age = 0;

    setInterval(function() {
        that.age++; // works...
    }, 1000);
}
// but with Arrow function:
function Person(){
    this.age = 0;

    setInterval(() => {
        this.age++; // 'this'refers to Person object!!
    }, 1000);
}

//when we should not use Arrow functions:
const button = document.querySelector('#my-button');
button.addEventListener('click', () => {
    this.classList.toggle('on'); // 'this' refers to the Window - Window is the surrounding of block with 'this'
})