//*Creating an Array
//Syntax: const variableName or arrayName = [item1, item2, ....];
const myArray = ["Apple", "Mango", "Banana", "Guava"];
console.log(myArray);

//* A declaration can span multiple lines. But don't use this
const myArray1 = [
     "Apple", 
     "Mango", 
     "Banana", 
     "Guava"
   ];
console.log(myArray);

//* Second Way to create an array
const myArray2 = [];
myArray2[0] = 'Apple';
myArray2[1] = 'Mango';
myArray2[2] = 'Banana';
myArray2[3] = 'Guava';

console.log(myArray2);

//*Accessing Array Elements.
//Array indexes start with 0.
//[0] is the first element. 
//[1] is the second element.
const fruits = ["Apple", "Mango", "Banana", "Guava"];

//* Accessing the First and Second Array Element
console.log(fruits[0]);
console.log(fruits[2]);

//* Array Length Property
console.log(fruits.length);

//* Accessing the Last Array Element
console.log(fruits[fruits.length-1]);

//* Access the Full Array
console.log(fruits);

//* Changing an Array Element
fruits[1] = 'Orange'
console.log(fruits);

//* Adding Array Elements without Methods:
fruits[fruits.length] = "Lemon";  // Adds "Lemon" to fruits
console.log(fruits);

//* Associative Arrays: When Array with named indexes are called Associative Array. 
// Many Programming Language support Associative Array. But Javascript does not support Associative Array. 
//In JavaScript, Arrays always use numbered indexes.
const person = [];
person["firstName"] = "Shahidul";
person["lastName"] = "Islam";
person["age"] = 46;
console.log(person.length); // Will return 0
console.log(person[0]);

//*Third way to create an Array. But avoid this way if do not need.
// JavaScript has a built-in array constructor new Array().
const myArray3 = new Array("Apple", "Mango", "Banana", "Guava")
console.log(myArray3);

// The new keyword can produce some unexpected results:
// Create an array with two elements:
const points = new Array(40, 100);
console.log(points);
// Create an array with one element ???
const point = new Array(4); 
console.log(point);

//compare array literal and array contractor
{
  const arr= [1,2,3];
  const arr3= [1,2,3];
  const arr1= new Array(1,2,3)
  const arr2= new Array(1,2,3)

  console.log(typeof arr);
  console.log(typeof arr1);
  console.log(typeof arr2);

  console.log(arr === arr3);
  console.log(arr === arr1);
  console.log(arr1 === arr2);
}
/**
 * const point = [40];   //Here, create an array with One Element.
 * const point = new Array(40);   //Here, create an array with 40 undefined Elements.
 */

//* How to Recognize an Array
//A common question is: How do I know if a variable is an array?
//Because when we use typeof operator to check an array its return "object"
console.log(typeof fruits)

//Solution 1(Array.isArray()) Method:
console.log(Array.isArray(fruits));

// Solution 2:
// The instanceof operator returns true if an object is created by a given constructor:
console.log(fruits instanceof Array);

//we can add all primitive value in array.
const myArr = ["Hello", "World", true, 20, undefined, null, {name: 'Shahid', age: 28}]
console.log(myArr);

