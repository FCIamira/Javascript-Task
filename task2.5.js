function addNumbersOnly() {
    if (arguments.length === 0) {
        throw new Error("No parameters passed. Please provide numbers to add.");
    }
    for (var i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] !== "number") {
            throw new Error("All parameters must be numbers.");
        }
    }
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}
try {
    console.log(addNumbersOnly(1, 2, 3)); 
    console.log(addNumbersOnly()); 
    console.log(addNumbersOnly(1, "a", 3)); 
} catch (error) {
    console.error(error.message);
}