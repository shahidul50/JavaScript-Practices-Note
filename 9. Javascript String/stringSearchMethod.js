//*String Search Method(indexOf())
let text = "Please locate where 'locate' occurs!";
let index = text.indexOf("locate");
console.log(index);
let index1 = text.indexOf("Locate");
console.log(index1);
let index2 = text.indexOf("locate",15);
console.log(index2);

//*String Search Method(lastIndexOf())
let text1 = "Please locate where 'locate' occurs!";
let index3 = text.lastIndexOf("locate");
console.log(index3);
let index4 = text.lastIndexOf("Locate");
console.log(index4);
let index5 = text.lastIndexOf("locate",15);
console.log(index5);

//*String Search Method(search())
let txt = "Please locate where 'locate' occurs! 15";
console.log(txt.search('locate'));
console.log(txt.search(15));
console.log(txt.search('hello'));
console.log(txt.search(/locate/));      //Regular Expretion

//*String Search Method(match())
let text2 = "The rain in SPAIN stays mainly in the plain";
let myArr =text2.match("ain");
console.log(myArr);
console.log(myArr[0]);
console.log(myArr.index);
console.log(myArr.length);
let myArr2 =text2.match("hello");
console.log(myArr2);
//with regular expression
let myArr3 =text2.match(/ain/g);
console.log(myArr3);
console.log(myArr3.length);
console.log(myArr3.index); 

//*String Search Method(matchAll())
let text3 = "The rain in SPAIN stays mainly in the rain";
let iterator  = text3.matchAll("ain");
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

let text4 = "The rain in SPAIN stays mainly in the rain";
let iterator3  = text4.matchAll("ain");
let result = Array.from(iterator3);
console.log(result);
console.log(result.length);
console.log(result[0]);
console.log(result[1]);
console.log(result[2]);
console.log(result[3]);
console.log(result[0].index);
let iterator1  = text3.matchAll("w");
let result1 = Array.from(iterator1);
console.log(result1);
//with regular expression
let iterator2  = text3.matchAll(/ain/g);
let result2 = Array.from(iterator2);
console.log(result2);
console.log(result2.length);
console.log(result2[0].index);
// let iterator2  = text3.matchAll(/ain/);  // without g flag its Give an error. 


//*String Search Method(includes())
let myText = "Hello world, welcome to the universe.";
console.log(myText.includes("world"));
console.log(myText.includes("world", 12));
console.log(myText.includes("their"));

//*String Search Method(startWith())
let myText1 = "Hello world, welcome to the universe.";
console.log(myText1.startsWith("Hello"));
console.log(myText1.startsWith("world"));
console.log(myText1.startsWith("world",5));
console.log(myText1.startsWith("world",6));

//*String Search Method(endsWith())
let myText2 = "Hello world, welcome to the universe.";
console.log(myText2.endsWith("universe."));
console.log(myText2.endsWith("the"));
console.log(myText2.endsWith("to",23));
