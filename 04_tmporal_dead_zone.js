// The variable is in a TEMPORAL DEAD ZONE (TDZ)
// from the start of the block until the initialization is processed

if (true) { // TDZ starts
    const doSomething = function() {
        console.log(thing); // OK
    };
    doSomething(); // Reference error
    let thing = 'test'; // TDZ ends
    doSomething(); // Called outside TDZ!!
}