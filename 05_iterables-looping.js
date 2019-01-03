for (var i = 0; i < 3; i++) {
    setTimeout ( function() {
      console.log(i)
    }, 1000);
  }

// prints 3 three times

for (let i = 0; i < 3; i++) {
    setTimeout ( function() {
      console.log(i)
    }, 1000);
  }
  
// prints 0, 1, 2

// ES6 also gives us a new way to loop over iterables:

const iterable = [1, 2, 3];
for (const value of iterable) {
    console.log(value);
}
// 1
// 2 
// 3

// you can loop like this over querySelector results:

const articleParagraphs = document.querySelectorAll('article > p');

for (const paragraph of articleParagraphs) {
    paragraph.classList.add('read');
}

// you can loop over strings:
const foo = 'bar';
for (const letter of foo) {
    console.log(letter);
}
// b
// a
// r