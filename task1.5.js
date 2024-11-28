function twoParametersOnly(param1, param2) {
    if (arguments.length !== 2) {
        throw new Error("The function accepts only 2 parameters.");
    }
    console.log("Parameters are:", param1, param2);
}

try {
    twoParametersOnly(1, 2);
    twoParametersOnly(1);    
    twoParametersOnly(1, 2, 3); 
} catch (error) {
    console.error(error.message);
}


