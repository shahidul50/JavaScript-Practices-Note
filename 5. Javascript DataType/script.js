
//*Primitive Datatype(Primitive type are defined by Javascript)
// 1. Number  //10, 4.5
// 2. String //"Hello"
// 3. Boolean // true or false
// 4. undefined
// 5. null 
// 6. Symbol
// 7. BigInt


//*Non Primitive Or Reference Datatype or Object Datatype(Reference or Object types are User defined Datatype)
// 1. Array
// 2. Object
// 4. Date

//*Primitive Datatypes:
//Number => Represemts numeric values, including integers and floating-point numbers.
let num1 = 20;
console.log(typeof num1);
let num2 = 20.45;
console.log(typeof num2);

//String => Represents a sequence of characters enclosed in single or double quotes. 
let string1 = "Shahidul Islam";
console.log(typeof string1);
let string2 = "";
console.log(typeof string2);

//Boolean => Represents a logical entity with two values: true or false.
let boolean1 = true;
console.log(typeof boolean1);
let boolean2 = false;
console.log(typeof boolean2);

//Undefined  => Represents the absence of a value or an uninitialized variable. 
let username;
console.log(typeof username);
let car = undefined; 
console.log(typeof car);

//Null => Represents the absence of a value. It is often used to explicitly indicate that a variable or object property has no assigned value.
let temperature = null;
console.log(typeof temperature);

//Symbol
let id = Symbol('123');
console.log(typeof id);
let id2 = Symbol('123');
console.log(id === id2)

//BigInt
let a = BigInt("123456789012345678901234567890");
console.log(typeof a);


//*Reference Datatypes:
// Array
let fruits = ['Apple','Banana', 'Mango'];
console.log(typeof fruits);
let mixed = ['Hello',200, true];
console.log(typeof mixed);

//Object
let obj = {
    id: 123,
    username: 'shahid',
    'date of birth': '01/15/1996'
}

console.log(typeof obj);

//Date
let today = new Date();

console.log(typeof today);