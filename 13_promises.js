const url = 'https://the.cource.of.data.com';
const postsPromise = fetch(url);

console.log(postsPromise); // gives us a promise

postsPromise.then(data => console.log(data)); // gives us Response object

postsPromise.then(data => data.json()); // gives us another promise
postsPromise.then(data => data.json()).then(data => console.log(data)); // now we get our data!
// what we can write:
postsPromise
    .then(data => data.json())
    .then(data => console.log(data));

// and    
postsPromise
    .then(data => data.json())
    .then(data => console.log(data))
    .catch(err => console.error(err));

// we can build our own promises
const p = new Promise((resolve, reject) => {
    resolve('Learn JS Deeply');
});
p.then(data => console.log(data)); // Learn JS Deeply


const p = new Promise((resolve, reject) => {
    reject(Error('Error message'));
});
p.then(data => console.log(data)); // Uncaught (in promise) Error: Error message