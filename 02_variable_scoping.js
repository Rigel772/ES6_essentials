// var is function scoped

if (true) {
    var foo = 'bar';
}

console.log( foo); // bar

// let and const are block scoped

if (true) {
    let foo = 'bar';
    const bar = 'foo';
}

console.log(foo); // Reference error
console.log(bar); // Reference error
// they does not 'leak' out of block scope

//let and const
let first = 'First string';
{
    let second = 'Second string';
    {
        let third = 'Third string';
    }
    // accessing third here -> Reference error
}
// accessing second here -> Reference error
// accessing third here -> Reference error 

// CONST - same scope:
const first = 'First string';
{
    const second = 'Second string';
    {
        const third = 'Third string';
    }
    // accessing third here -> Reference error
}
// accessing second here -> Reference error
// accessing third here -> Reference error 

// but CONST variables can only be asigned once
// it is NOT mutable
const foo = { bar: 1 };
foo = 'bar'; // "foo" is read only
// But you can change the properties
foo.bar = 2;
console.log(foo); // {bar: 2}

// Object.freeze() prevents changing the properties:
const foo2 = Object.freeze(foo);
foo2.bar = 3;
console.log(foo2.bar); // 2 (did not change)

//Object.seal() prevents changing the object structure.
Object.seal(foo);
foo.baz = false; // Type error