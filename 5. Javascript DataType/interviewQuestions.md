1. What is the difference between null and undefined in JavaScript?

2. What is the purpose of typeof operator in JavaScript?

3. What is the result of `typeof null` in JavaScript?

4. What are primitive data types in JavaScript?

5. Convert a string to a number?
let num = "10";
console.log(typeof +num);           // result number.
console.log(typeof Number(num));    // result number.

6. Convert a number to a string?
let num = 10;
console.log(typeof (num + "" ));    // result string.
console.log(typeof String(num));    // result string.

7. Explain the concept of truthy and falsy values in JavaScript. Provide example.
=> truthy values are treated as tru when used in conditions. Example:
 - true
 - Any non-empty string ("hello")
 - Any non-zero number(23)
 - Arrays and objects, even if they're not empty

 => Falsy values are treated as false in boolean context. Example:
 - false
 - 0(zero)
 - '' (an empty string)
 - null
 - undefined
 - NaN(Not a Number)

 8. To check if a non-empty string is truthy or falsy in JavaScript, we can use directly use if statement.   