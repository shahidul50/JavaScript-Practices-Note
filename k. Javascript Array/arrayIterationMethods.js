//*Array Iteration Methods(forEach()):
//array.forEach(function(currentValue, index, arr), thisValue)
// return undefined
{
  const numbers = [45, 4, 9, 16, 25];
  function myFunction(value, index, array) {
    console.log(value);
    console.log(index);
    console.log(array);
  }
  numbers.forEach(myFunction);

  //Summation of Array Elements with forEach Method.
  let sum = 0;
  numbers.forEach(function (value) {
    sum += value;
  });
  console.log(sum);

  const nums = [65, 44, 12, 4];
  function myFunc(item, index, arr) {
    arr[index] = item * 10;
  }
  const result = nums.forEach(myFunc);
  console.log(nums);
  console.log(result);
}

//*Array Iteration Methods(map()):
//array.map(function(currentValue, index, arr), thisValue)
//this method does not modify Original Array. Its return a new Array.
{
  const numbers = [45, 4, 9, 16, 25];
  function myFunction1(value, index, array) {
    return value * 2;
  }
  const newArray = numbers.map(myFunction1);
  console.log(numbers);
  console.log(newArray);

  const persons = [
    { firstname: "Abdul", lastname: "Karim" },
    { firstname: "Shahidul", lastname: "Islam" },
    { firstname: "Arif", lastname: "Uddin" }
  ];
  function getFullName(item) {
    return [item.firstname, item.lastname].join(" ");
  }

  const newArr = persons.map(getFullName);
  console.log(newArr);
}

//*Array Iteration Methods(flatMap()):
//array.flatMap(function(currentValue, index, arr), thisValue)
//this method does not modify Original Array. Its return a new flat Array.
{
  const numbers = [1, 2, 3];
  const strs = ["One", "Two", "Three"];
  function myFunction(value, index, array) {
    return [value, strs[index]];
  }
  const newArray1 = numbers.flatMap(myFunction);
  console.log(numbers);
  console.log(newArray1);

  //আমরা চাইলে map() ও flat() Method একসাথে ব্যবহার করে flatMap() এর কাজটা করে ফেলতে পারি। 
  function myFunction1(value, index) {
    return [value, strs[index], ['hello', ['world']]];
  }
  const newArray2 = numbers.map(myFunction1).flat(Infinity);
  console.log(numbers);
  console.log(newArray2);

  //more Example:
  //with map() and flat() Method: 
  const arr = ['Welcome to', 'Javascript', 'programming language'];
  const newArr = arr.map(curentValue => curentValue.split(' '))
  const flatArr = newArr.flat();
  console.log(newArr);
  console.log(flatArr);

  //with flatMap() Method: 
  const flattenArray = arr.flatMap(cuurrentValue => cuurrentValue.split(' '))
  console.log(flattenArray);
}

//*Array Iteration Methods(filter()):
//array.filter(function(currentValue, index, arr), thisValue)
//this method does not modify Original Array. Its return a new Array. New Array filled with elements that pass a test provided by a function.
{
  const numbers = [45, 4, 9, 16, 25];
  function myFunction(value, index, array) {
    return value > 18;
  }
  const over18 = numbers.filter(myFunction);
  console.log(numbers);
  console.log(over18);

  const arr = [
    { name: 'A', age: 32, jobTitle: 'Senior Backend Developer', salary: 75000 },
    { name: 'B', age: 30, jobTitle: 'Senior Backend Developer', salary: 65000 },
    { name: 'C', age: 25, jobTitle: 'Junior Frontend Developer', salary: 30000 },
    { name: 'D', age: 28, jobTitle: 'Junior Backend Developer', salary: 50000 },
    { name: 'E', age: 27, jobTitle: 'Senior Frontend Developer', salary: 45000 }
  ];
  const newArray = arr.filter(currentValue => currentValue.salary >= 50000);
  console.log(newArray);
}

//*Array Iteration Methods(reduce()):
// The reduce() method works from left-to-right in the array
// Syntax:- array.reduce(callbackFunction,initialValue)
{
  const numbers = [45, 4, 9, 16, 25];
  function myFunction(total, value, index, array) {
    return total + value;
  }
  let sum = numbers.reduce(myFunction);
  console.log(sum);
  let sum2 = numbers.reduce(myFunction, 11);
  console.log(sum2);

  // const votes = ['Java', 'Python','Java', 'JavaScript', 'Python','JavaScript', 'JavaScript']
  // function myfunc(acc, cur){
  //       if(acc[cur]){
  //            acc[cur]++
  //       }else{
  //            acc[cur] = 1
  //       }
  //       return acc
  // }
  // const voteCusting = votes.reduce(myfunc,{})
  // console.log(voteCusting);
}

//*Array Iteration Methods(reduceRight()):
// The reduce() method works from right-to-left in the array.
{
  const string = ["d", "i", "h", "a", "h", "S"];
  function myFunction(acc, value, index, array) {
    return acc + value;
  }
  let myName = string.reduceRight(myFunction);
  console.log(myName);
}

//*Array Iteration Methods(every()):
//condition sobgulu match na hole aita false return kore.
{
  const numbers6 = [45, 4, 9, 16, 25];
  function myFunction11(value, index, array) {
    return value > 18;
  }
  let allOver18 = numbers6.every(myFunction11);
  console.log(allOver18);

  const numbers7 = [45, 40, 10, 16, 25];
  function myFunction12(value, index, array) {
    return value > 9;
  }
  let allOver9 = numbers7.every(myFunction12);
  console.log(allOver9);
}

//* Array Iteration Methods(some()):
//jekono akta value condition fillup korle aita true return kore.
{
  const num = [45, 4, 9, 16, 25];
  function myFunction(value, index, array) {
    return value > 18;
  }
  let someOver18 = num.some(myFunction);
  console.log(someOver18);
}

//* Array.from():
let x = Array.from("ABCDEFG");
console.log(x);

//* Array Method(keys()):
{
  const fruits = ["Banana", "Orange", "Apple", "Mango"];
  const keys = fruits.keys();
  console.log(Array.from(keys));
}
//*Array Method(entries()):
{
  const fruits = ["Banana", "Orange", "Apple", "Mango"];
  const iterObj = fruits.entries();
  console.log(Array.from(iterObj));
}
//* Array Method (with()):
{
  // const months = ["Januar", "Februar", "Mar", "April"];
  // const myMonths = months.with(2, "March");
}

//* Spread(...) Operator:
{
  const q1 = ["Jan", "Feb", "Mar"];
  const q2 = ["Apr", "May", "Jun"];
  const q3 = ["Jul", "Aug", "Sep"];
  const q4 = ["Oct", "Nov", "Dec"];

  const year = [...q1, ...q2, ...q3, ...q4];
  console.log(year);

  const numbers10 = [1, 2, 3, 4, 5];
  function calculate(a, b, c, d, e) {
    console.log("Sum is: " + (a + b + c + d + e));
  }
  calculate(...numbers10);
}
