//* Array Search Method(indexOf()):
//Syntax: array.indexOf(SearchItem, startPosition)
{
const fruits = ["Apple", "Orange", "Apple", "Mango"];
let position = fruits.indexOf("Mango");
console.log(position);

let position1 = fruits.indexOf("Guava");
console.log(position1);

let position2 = fruits.indexOf("Orange",1);
console.log(position2);

let position4 = fruits.indexOf("Orange",-3);
console.log(position4);
}

//* Array Search Method(lastIndexOf()):
//Syntax: array.lastIndexOf(SearchItem, startPosition)
{
const fruits = ["Apple", "Orange", "Mango", "Apple", 'Guava'];
let position = fruits.lastIndexOf("Apple");
console.log(position);

let position1 = fruits.lastIndexOf("Banana");
console.log(position1);

let position2 = fruits.lastIndexOf("Apple",2);
console.log(position2);

let position3 = fruits.lastIndexOf("Apple",-3);
console.log(position3);
}

//* Array Search Method(includes()):
//Syntax: array.includes(search-item, startPosition)
{
const fruits = ["Banana", "Orange", "Apple", "Mango", NaN];
let result = fruits.includes("Mango");
console.log(result)

let result1 = fruits.includes("Orange",2);
console.log(result1)

let result2 = fruits.includes("Orange",-3);
console.log(result2)

let result3 = fruits.includes(NaN);
console.log(result3)
}
//* Array Search Method(find()):
//array.find(function(currentValue, index, arr),thisValue)
{
const numbers = [4, 9, 16,22, 25, 29];
function myFunction(value, index, array) {
  return value > 18;
}
let result = numbers.find(myFunction);
console.log(result);

function myFunction1(value) {
  return value > 30;
}
let result1 = numbers.find(myFunction1);
console.log(result1);
}

//* Array Search Method(findIndex()):
//array.findIndex(function(currentValue, index, arr), thisValue)
{
const numbers = [4, 9, 16,22, 25, 29];
function myFunction(value, index, array) {
  return value > 18;
}
let result = numbers.findIndex(myFunction);
console.log(result);

function myFunction1(value) {
  return value > 30;
}
let result1 = numbers.findIndex(myFunction1);
console.log(result1);
}

//* Array Search Method(findLast()):
// array.findLast(function(currentValue, index, arr),thisValue)
{
const numbers = [27, 28, 30, 40, 29, 42, 35, 50];
function myFunction(value,index,arr) {
  return value > 30;
}
let result = numbers.findLast(myFunction);
console.log(result);

function myFunction1(value) {
  return value > 50;
}
let result1 = numbers.findLast(myFunction1);
console.log(result1);

}


//* Array Search Method(findLastIndex()):
// array.findLastIndex(function(currentValue, index, arr), thisValue)
{
  const numbers = [27, 28, 30, 40, 29, 42, 35, 50];
  function myFunction(value,index,arr) {
    return value > 30;
  }
  let result = numbers.findLastIndex(myFunction);
  console.log(result);
  
  function myFunction1(value) {
    return value > 50;
  }
  let result1 = numbers.findLastIndex(myFunction1);
  console.log(result1);
}