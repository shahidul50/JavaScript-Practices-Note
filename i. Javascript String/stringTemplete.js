//String Templates or
//Template Strings or
//Template Literals
//Back-Tics Syntax:
let text = `Hello World`
console.log(text);

// Quotes Inside Strings
let text1 = `He's often called "Johnny"`;
console.log(text1);

//Multiline Strings
let text3 =
`The quick
brown fox
jumps over
the lazy dog`;
console.log(text3);

//Variable Substitutions with Interpolation. 
let firstName = "Shahidul";
let lastName = "Islam";

let text4 = `Welcome, ${firstName} ${lastName}!`;
console.log(text4);

//Expression Substitution
let price = 10;
let qty = 5;

let total = `Total: ${(price * qty)}`;
console.log(total);