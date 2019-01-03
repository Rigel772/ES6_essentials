// NAMED EXPORTS

// file mathlib.js

export function square(x) {
    return x * x;
}
export function add(x, y) {
    return x * y;
}

// file main.js
 import {square, add} from mathlib;

 console.log(square(2)); // 4
 console.log(add(33, 11)); // 44

 //SINGLE DEFAULT EXPORTS

 //foo.js

 export default function() {
     console.log('Foo !!!');
 }

 // main.js

 import foo from 'foo';

 foo(); // Foo !!!
