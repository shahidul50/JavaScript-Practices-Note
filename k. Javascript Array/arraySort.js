//?Alphabetic Sort
//*Array Sort Method(sort()):
//*Ascending: 
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const sorted = fruits.sort();
console.log(fruits);
console.log(sorted);

//*Array Method(reverse()):
{
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const x = fruits.reverse()
console.log(x);
}
//*Descending: 
{
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const x= fruits.sort().reverse();
console.log(x);
console.log(fruits);
}
//*Array Sort Method(toSorted()):
{
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const newArray = fruits.toSorted();
// console.log(fruits);
// console.log(newArray);
}
//*Array Method(toReversed()):
{
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const newArray = fruits.toReversed();
// console.log(fruits);
// console.log(newArray);
}

//* Shorting Object Array:
const cars = [
        {type:"Volvo", year:2016},
        {type:"Saab", year:2001},
        {type:"BMW", year:2010}
      ];
//* Numerically Sort: 
cars.sort(function(a, b){return a.year - b.year});
console.log(cars);
//* Alphabetically Sort:
cars.sort(function(a, b){
    let x = a.type.toLowerCase();
    let y = b.type.toLowerCase();
    if (x < y) {return -1;}
    if (x > y) {return 1;}
    return 0;
  });
  console.log(cars);

//?Numeric Sort
//* Ascending: 
{
    const points = [40, 100, 1, 5, 25, 10];
    const x = points.sort(function(a, b){return a - b});
    console.log(points);
    console.log(x);
}
//* Descending: 
{
    const points = [40, 100, 1, 5, 25, 10];
    points.sort(function(a, b){return b - a});
    console.log(points);
}