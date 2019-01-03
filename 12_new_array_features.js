// Array.from()

const headers = document.querySelectorAll('h1');

// const titles = headers.map(h1 => h1.textContent); 
//we cannot do it here as querySelector return NodeList not an array, so
const headersArray = [...headers];
const titles = headers.map(h1 => h1.textContent); // now is fine!!
// and easier to read is
const headersArray = Array.from(headers);
const titles = headers.map(h1 => h1.textContent);
// Array.form() as argument takes any array-like object
// and we can write it like:
const titles = Array.from(headers, h1 => { // h1 is a callback, second parameter 
    return h1.textContent;
});
//and we can write it shorter:
const titles = Array.from(document.querySelectorAll('h1'), h1 => { return h1.textContent});
// and even shorter:
const titles = Array.from(document.querySelectorAll('h1'), h1 => h1.textContent);
// or easier to read for me:
const headers = document.querySelectorAll('h1');
const titles = Array.from(headers, header => header.text.Content);
// it gives us array of all titles!! 

// Array.of()

const values = Array.of(123, 456, 789);
console.log(values); // [123, 456, 789]

// Array.find()

const posts = [
    {
        id: 1,
        title: 'Hello world'
    },
    {
        id: 2,
        title: 'Learn JS Deeply'
    }
]
// to get second object in array:
const post = posts.find(post => post.id === 2);

console.log(post); // { id:2, title: 'Learn JS Deeply'}

// Array.findIndex()
const posts = [
    {
        id: 1,
        title: 'Hello world'
    },
    {
        id: 2,
        title: 'Learn JS Deeply'
    }
]

const post = posts.findIndex(post => post.id === 2);

console.log(post); // 1