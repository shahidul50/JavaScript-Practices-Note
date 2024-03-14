//* Array Method(toString()):
//this method converts an array to a string of(comma separated) array values
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.toString());

//* Array Method(join()):
//The join() method also joins all array elements into a string. It behaves just like toString(), but in addition you can specify the separator.
const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits1.join());
console.log(fruits1.join(' * '));
console.log(fruits1.join(' ! '));
console.log(fruits1.join(' ? '));

//* Array Method(at()):
const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits2.at(3));
console.log(fruits2.at(5));
console.log(fruits2.at(-3));

//* Array Method(push()):
//The push() method adds a new element to an array (at the end) and its return new array length
const array = ["Banana", "Apple"];
let newArrayLength = array.push('Guava','Mango')
console.log(array);
console.log(newArrayLength);

//* Array Method(pop()):
//The pop() method removes the last element from an array and its return removed value.
const array1 = [ "Banana", "Orange", "Apple", "Mango"];
let removeItem = array1.pop()
let removeItem2 = array1.pop()
console.log(array1);
console.log(removeItem);
console.log(removeItem2);

const array2 = [];
let removeItem3 = array2.pop()
console.log(array2);
console.log(removeItem3);

//* Array Method(shift()):
//The shift() method removes the first array element and "shifts" all other elements to a lower index and its return shifted out value.
const fruits3 = ["Banana", "Orange", "Apple", "Mango"];
let shiftedOutValue = fruits3.shift();
console.log(shiftedOutValue);
console.log(fruits3);

const fruits4 = [];
let shiftedOutValue1 = fruits4.shift()
console.log(fruits4);
console.log(shiftedOutValue1);

//* Array Method(unshift()):
//The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements and its return new array length.
const fruits5 = ["Banana", "Orange"];
let newArrayLength1 =  fruits5.unshift("Apple","Lemon");
console.log(fruits5);
console.log(newArrayLength1);

//* Array Method(fill()):
//Syntax: array.fill(value,startPosition, endPosition)
{
const arr = ["Banana", "Orange", "Apple", "Mango",'Guava'];
const q = arr.fill('Hello')
console.log(q);

const arr1 = ["Banana", "Orange", "Apple", "Mango",'Guava'];
arr1.fill('Hello',2)
console.log(arr1);
const arr2 = ["Banana", "Orange", "Apple", "Mango",'Guava'];
arr2.fill('Hello',2,4)
console.log(arr2);
}

//* Array Method(splice()):
//The splice() method can be used to add new items to an array an any position.
const fruits6 = ["Banana", "Orange", "Apple"];
let deletedItems = fruits6.splice(1, 0, "Lemon", "Mango");
console.log(fruits6);
console.log(deletedItems);

//*if we delete items then add items in array.
const fruits7 = ["Banana", "Orange", "Apple", "Mango"];
let deletedItems1 = fruits7.splice(2, 1, "Lemon", "Kiwi","Guava");
console.log(fruits7);
console.log(deletedItems1);
//* Using splice() to Remove Elements
const fruits8 = ["Banana", "Orange", "Apple", "Mango"];
let deletedItems2 = fruits8.splice(0, 1);
console.log(fruits8);
console.log(deletedItems2);

//* Array Method(toSpliced()):
//ai method splice() er motoi kaj kore. tobe aita akta noton array return kore thake.
{
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let newArr = fruits.toSpliced(2, 0, "Lemon", "Kiwi");
// console.log(fruits);
// console.log(newArr);

// //*if we delete items then add items in array.
// const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
// let newArr1 = fruits1.toSpliced(2, 1, "Lemon", "Kiwi","Guava");
// console.log(fruits1);
// console.log(newArr1);
// //* Using toSplice() to Remove Elements
// const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
// let newArr2 = fruits2.toSpliced(0, 1);
// console.log(fruits2);
// console.log(newArr2);
}

//* Array Method(delete()):
//Using delete() leaves undefined holes in the array.
{
const fruits = ["Banana", "Orange", "Apple", "Mango"];
delete fruits[0];
console.log(fruits);
let a = delete fruits[1];
console.log(a);
}

//* Array Method(concat()):
//The concat() method creates a new array by merging (concatenating) existing arrays.
{
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];
const myChildren = myGirls.concat(myBoys,['Hello','world']);
console.log(myChildren);
const arr = myChildren.concat('String')
console.log(arr);

}

//* Array Method(copyWithin()):
//The copyWithin() method copies array elements to another position in an array.
//?Syntax: array.copyWithin(target,start,end)
//target is required.
//Start defaults to 0.
//end default to array.length
//never changes array.length
//overwrites Original array.
//return modified array.
{
const arr = ["A", "B", "C", "D" ,"E"];
arr.copyWithin(2);
console.log(arr);

const arr1 = ["A", "B", "C", "D" ,"E"];
arr1.copyWithin(-3);
console.log(arr1);

const arr2 = ["A", "B", "C", "D" ,"E"];
arr2.copyWithin(2,3);
console.log(arr2);

const arr3 = ["A", "B", "C", "D" ,"E"];
arr3.copyWithin(-2,-3);
console.log(arr3);

const arr4 = ["A", "B", "C", "D" ,"E"];
arr4.copyWithin(1,-3,-1);
console.log(arr4);

const arr5 = ["A", "B", "C", "D" ,"E"];
arr5.copyWithin(3,1,2);
console.log(arr5);

}

//* Array Method(slice()):
//Slice Method array er akti ongsho k Slice kore new Array te return kore.
//Syntax: array.slice(start,end)
{
const fruits = ["A", "B", "C", "D", "E"];
const citrus = fruits.slice(2);
console.log(citrus);
console.log(fruits);

const citrus2 = fruits.slice(-2);
console.log(citrus2);

const citrus1 = fruits.slice(2, 4);
console.log(citrus1);

const citrus3 = fruits.slice(-4, -2);
console.log(citrus3);
}

//* Array Method(flat()):
//aita array er sathe songjukto sub array gulike akta nuton array te rupantor kore thake.
//Syntax: array.flat(depth)
//depth is Optional.
//By default it is 1.
{
const myArr = [[1,2],[3,4],[5,6]];
const newArr = myArr.flat();
console.log(newArr);
console.log(myArr);

const myArr1 = [[1,2],[3,[4,[5,6]]],[7,8]];
const newArr1 = myArr1.flat(3);
console.log(newArr1);

const newArr2 = myArr1.flat(Infinity);
console.log(newArr2);



}
