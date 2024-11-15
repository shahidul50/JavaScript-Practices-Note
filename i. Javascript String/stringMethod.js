//String Property(length)
let myName = "Shahidul Islam";
console.log(myName.length);

//** Extracting String Characters(4 methods): 
//! String Method(at(position))
console.log(myName.at(1))
console.log(myName.at(-3))

//! String Method(charAt(position))
console.log(myName.charAt(2));
// let zx = myName.charAt(-2);
// console.log(zx);
// console.log(myName.charAt(-1));  //negative value not allow

//! String Method(using property access.))
console.log(myName[2]);
// console.log(myName);
// myName[2] = "Asddddd";
// console.log(myName);

//! String Method(charCodeAt(position))
console.log(myName.charCodeAt(2));

//Now we can Use this
console.log(myName.at(-3));
// for
console.log(myName.charAt(myName.length-3));


//* Extracting String Parts(3 Methods):
//! String Method(slice(start, end))
let text = "Apple, Banana, Kiwi";

let part = text.slice(7);
console.log(part);
let part1 = text.slice(7, 13);
console.log(part1);

let part2 = text.slice(-12);
console.log(part2);
let part3 = text.slice(-12, -6);
console.log(part3);

//! String Method(substring(start, end))
let str = "Apple, Banana, Kiwi";

let part0 = str.substring(7);
console.log(part0);
let part11 = str.substring(7, 13);
console.log(part11);

// let part12 = str.substring(-14);
// console.log(part12);
let part13 = str.substring(-12, 5);
console.log(part13);

//! String Method(substr(start, length))
let str0 = "Apple, Banana, Kiwi";

let part15 = str0.substr(7);
console.log(part15);
let part16 = str0.substr(7,6);
console.log(part16);

let part17 = str0.substr(-12);
console.log(part17);
let part18 = str0.substr(-12,6);
console.log(part18);


//* Converting to Upper and Lower Case
let text1 = "Hello World";
let text2 = text1.toUpperCase();
console.log(text2);
let text3 = text1.toLowerCase();
console.log(text3);

//Concat two String with String Method(concat())

let txt = "Hello";
let txt2 = "Mr.";
console.log(txt.concat(" ",txt2," ","World"));

// Remove Both side whitespace of String with String Method(trim())
let username = "     Shahidul        ";
console.log(username); 
console.log(username.trim());

// Remove  whitespace only from the start of String with String Method(trimStart())
console.log(username.trimStart());
// Remove  whitespace only from the end of String with String Method(trimEnd())
console.log(username.trimEnd());

//Javascript String Method(PadStart(),padEnd()) of add Padding start or end of String. 
let num= "5";
let padstart = num.padStart(4,"0");
console.log(padstart);
let padend = num.padEnd(4,"0");
console.log(padend);


//JavaScript String Method(repeat()) for copies of a String.
// Syntax: string.repeat(count)
let a = "Shahidul";
let result = a.repeat(2);
console.log(result);

//JavaScript String Method(replace()) for replace a specified value with another value in a String.
// Syntax: string.replace(replaceWord, changeWord)
let myText = "I am Shahidul.";
let newText = myText.replace('Shahidul', "Karim");
console.log(newText);
console.log(myText);

//JavaScript String Method(replaceAll()) for replace all specified value with another value in a String.
// Syntax: string.replaceAll(replaceWord, changeWord)
let myText1 = "I love cats. Cats are very easy to love. Cats are very popular.";
let newText1 = myText1.replaceAll('Cats', "Dogs");
 newText1 = newText1.replaceAll('cats', "dogs");
console.log(newText1);
console.log(myText1);

//JavaScript String Method(split()) for converted a string into an array.
let myText2 = "Hello World";
let myArray = myText2.split(" ")
console.log(myArray);
console.log(myText2);
