const prompt = require("prompt-sync")(); // Please don't touch me :)

// The prompt method allows us to take an input from the user.
// Run the code to see how to use prompt.
// const name = prompt("What's your name? ");
// console.log(`Hi, I'm ${name}.`);

let num1 = prompt("Please enter the first number:");
let num2  = prompt("Please enter the second number:");
let operation  = prompt("Please choose the operation (+, -, /, *):");

        num1 = parseInt(num1);
        num2 = parseInt(num2);

        if ( Number.isInteger(num1)  && Number.isInteger(num2))
{
    if (operation === "+" )
    {console.log( num1+ num2)}
else if (operation === "-" )
{console.log(num1- num2)}
else if (operation === "/" )
console.log(num1 / num2)
else if (operation === "*" )
console.log( num1 * num2)
else (consol.log ("value not valid"))
}
else {console.log ("value invalid")}