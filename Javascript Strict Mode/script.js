"use strict"
//* JavaScript Use Strict
// Javascript একটা High Level Programming Language, সাথে সাথে এটা অনেক Smart Language ও বটে। যার কারণে অনেক কাজ এটা নিজে থেকে করে থাকে। এইজন্য অনেক সময় Bad Syntax এ Code লিখলেও সেগুলো Execute হয়ে থাকে। কোন প্রকার Error প্রদান করে না। এই সমস্যাটা সমাধান করার জন্য অর্থাৎ Bad Syntax এ Code লিখলে যাতে বাধা প্রদান করে তার জন্য আমরা এই Strict Mode ব্যবহার করব। Strict Mode কে Directive ও বলা হয়ে থাকে। এটা ECMAScript Version 5 এ Add করা হয়।  

//* Why Strict Mode?
// Javascript এ এগুলো error na, কিন্তু code execute করতে দেয়, কিন্তু করা উচিত না। কারণ এভাবে code লিখলে সেটা bad syntax এ code লিখা হবে। আমাদের code যাতে bad syntax এ লিখতে না হয় সেজন্য Strict Mode ব্যবহার করা হয়। Strict mode আমাদের "secure" javascript code লিখতেও সাহায্য করে। Strict Mode 'Bad syntax' কে real error এ রুপান্তর করে থাকে। 

//* Declaring Strict Mode
// Strict Mode declared করা হয় "use strict" Add করার মধ্যে দিয়ে। এটা কোন Script এর শুরুতে বা কোন function এর শুরুতে ব্যবহার করা হয়। এটা কোন Statement না। এটা একটা Literal Expression হয়ে থাকে। যদি এটা কোন script এর শুরুতে ব্যবহার করা হয় তাহলে এইটা global scope হয়ে থাকে। অর্থাৎ সম্পূর্ণ script এর code strict mode এ execute হবে। 
{
   // "use strict";
  //  x = 3.14;       // এটা error প্রদান করবে কারন x declared করা হয়নি। 
}
// আর যদি এইটা কোন function এর শুরুতে ব্যবহার করা হয় তাহলে এইটা local scope হয়ে থাকে। অর্থাৎ function এর ভিতরে code সম্পূর্ণ strict mode execute হবে।
{
    // x = 3.14;       // This will not cause an error.
    // myFunction();
    
    // function myFunction() {
    //   "use strict";
    //   y = 3.14;   // This will cause an error
    // }
}

//? Strict Mode এ যেই বিষয়গুলো allowed না সেগুলো হল:
//* variable declare না করে ব্যবহার করা। 

{
    // x = 3.14;   // This will cause an error 
    // console.log(x);  
}
//* delete keyword ব্যবহার করে কোন variable বা function delete করা। 
{
    // let x = 3.14;
    // delete x;

    // function x(p1, p2) { };
    // delete x;                // This will cause an error 
}
//* numeric literals এ Octal Number ব্যবহার করা।
{
    // let x = 010;       // This will cause an error
}
//* function এর মধ্যে duplicate parameter ব্যবহার করা।
{
    // function x(p1, p1) {};   // This will cause an error
}
//* Octal escape characters ব্যবহার করা।
{
    // let x = "\010";            // This will cause an error
}
//* Writing to a read-only property
{
    // const obj = {};
    // Object.defineProperty(obj, "x", {value:0, writable:false});
    
    // obj.x = 3.14;            // This will cause an error
}
//* Writing to a get-only property
{
    // const obj = {get x() {return 0} };

    // obj.x = 3.14;            // This will cause an error
}
//* Deleting an undeletable property
{
    // delete Object.prototype; // This will cause an error
}
//* eval keyword নামে কোন variable ব্যবহার করা।
{
    // let eval = 3.14;         // This will cause an error
}
//* arguments keyword নামে কোন variable ব্যবহার করা।
{
    // let arguments = 3.14;    // This will cause an error
}
//* with statement এর দ্বারা কিছু লেখা। 
{
    // with (Math){x = cos(2)}; // This will cause an error
}
//* eval() এর মধ্যে variable তৈরি করা।
{
    // eval ("x = 2");
    // alert (x);      // This will cause an error
}
//* কিছু future reserved keyword(implements,interface, package,public, private, protected, static, yield) এগুলো ব্যবহার করা।
{
   // let public = 1500;      // This will cause an error
}


