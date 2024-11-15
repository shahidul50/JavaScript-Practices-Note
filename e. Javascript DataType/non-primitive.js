//Non-Primitive Datatype(Array)
let arr1 = [1,2,3,4,5];  //Declaring a Array variable 
let arr2 = arr1;     // Declaring a variable and assigning arr1 this variable.

console.log(arr1);
console.log(arr2);

arr2[3] = 10;

console.log(arr1);
console.log(arr2);


let arr3 = arr2;

console.log(arr1);
console.log(arr2);
console.log(arr3);

arr3[4] = 50;

console.log(arr1);
console.log(arr2);
console.log(arr3);


//Non-Primitive Datatype(Object)

let obj1 = {
    number: 100
}

let obj2 = obj1;

console.log(obj1.number);
console.log(obj2.number);

obj2.number = 500

console.log(obj1.number);
console.log(obj2.number);

let obj3 = obj2;

console.log(obj1.number);
console.log(obj2.number);
console.log(obj3.number);

obj3.number = 800

console.log(obj1.number);
console.log(obj2.number);
console.log(obj3.number);


//Non-Primitive Datatype Comparison 

let aObj = {
    number: 100
}

let bObj = {
    number: 100
}

console.log(aObj === bObj)

console.log(obj1 === obj2)

