// Old way
function calculateTotal(subtotal, tax, shipping) {
    if (tax === undefined) {
        tax = 0.07;
    }
    if (shipping === undefined) {
        shipping = 10;
    }
    return subtotal + (subtotal * tax) + shipping; 
}

const total = calculateTotal(100);

// a bit better:

function calculateTotal(subtotal, tax, shipping) {
    tax = tax || 0.07;
    shipping = shipping || 10;
    return subtotal + (subtotal * tax) + shipping; 
}

const total = calculateTotal(100);


// ES6

function calculateTotal(subtotal, tax = 0.07, shipping = 10) {
   
    return subtotal + (subtotal * tax) + shipping; 
}

const total = calculateTotal(100);

// const total = calculateTotal(100, , 10) // we CANNOT do it
//but we can:
const total = calculateTotal(100, undefined, 10) // it is OK
const total = calculateTotal(100, 0.07) // it is OK

