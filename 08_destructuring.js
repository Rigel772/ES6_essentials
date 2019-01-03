const person = {
    first: "Marek",
    last: "Burek",
    location: {
        city: "Krakow",
        state: "Malopolskie"
    }
};
// to create a variables:
const first = person.first;
const last =  person.last;

// with destructuring we can do this:
const {first, last} = person; // we have variables: first, last
const { city, state } = person.location; // we have variables: city, state

// we can also rename variables from destructured object:
const { first: fName, last: lName } = person; // we have variables: fName, lName
const { city: locationCity, state: locationState } = person.location; // we have variables: locationCity, locationState

// if we want to destructure a property that does not exist 
const settings = { color: 'white', height: 500 };

const {width, height, color } = settings;
console.log(width); // undefined
console.log(height); // 500
console.log(color); // white

// you can set defaults in destructuring
const settings = { color: 'white', height: 500 };

const { width = 200, height = 200, color = 'black'} = settings;
console.log(width); // 200
console.log(height); // 500
console.log(color); // white

// you can destructure arrays (eg. data from API)
const details = ['Marek', 'Burek', 'marek.com'];

const [ first, last, website ] = details; // we need to know the order
