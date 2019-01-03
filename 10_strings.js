// TEMPLATE LITERALS
// Template literal in ES6 is a new way to create a string
const name = 'marek';
// old way:
console.log('Hello, ' + name + '!'); // Hello, marek !
// ES6 template literals (with 'backticks')
console.log(`Hello, ${name}!`); 
// instead variable you can insert any js expression
const total = `The total price is ${price + shipping}`;

// To create multiline:
// old way:
console.log('first line\nsecond line');
//new way:
console.log(`first line
second line`);

// NEW STRING METHODS

// .startsWith()
const str = 'Learn JavaScript Deeply';

console.log(str.startsWith('Learn')); // true
console.log(str.startsWith('Java')); // false
console.log(str.startsWith('Deeply', 17)); // true

// .endsWith()
console.log(str.endsWith('Deeply')); // true
console.log(str.endsWith('Java')); // false
console.log(str.endsWith('JavaScript', 16)); // true (if 'J' is index 16 from end)

// .includes()

console.log(str.includes('Javascript')); // true
console.log(str.includes('Javascript')); // false - is case sensitive!
console.log(str.includes('PHP')); // false

// .repeat()
const str = 'Deeply';

console.log(str.repeat(3)); // DeeplyDeeplyDeeply
console.log(str.repeat(2.5)); // DeeplyDeeply - converts to int
console.log(str.repeat(-1)); // RangeError




