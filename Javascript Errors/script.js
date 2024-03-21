// JavaScript Errors Handling
// Javascript Code execute হওয়ার সময় বিভিন্ন ধরণের Error ঘটতে পারে। এই Error code করার সময় programmer এর দ্বারা হতে পারে বা wrong input এর মাধ্যমে হতে পারে, অথবা অপ্রত্যাশিত কোন কারণেও হতে পারে। এই Error এর কারণে আমাদের করা Application crush হতে পারে। আমরা চাইলে এই Error গুলোকে সুন্দরভাবে Handle করতে পারি। Javascript এ try, catch ,finally এবং throw statement এর মাধ্যমে আমরা Error কে সুন্দরভাবে Handle করতে পারি।

//* JavaScript try and catch
// try Statement: এই statement এর ভিতরে যে code টা error আসার সম্ভাবনা আছে সেটা রাখতে পারি। code ঠিকমত run করলে ত করল। যদি কোন Error আসে তাহলে এটা নিজে থেকেই error throw করবে।
// catch statement: এই statement এর ভিতরে আমরা try statement এ যে error throw করবে সেটা পাব। যদি কোন error না থাকে তাহলে এই block এর ভিতরের code কাজ করবে না। আমরা চাইলে এই error টাকে সুন্দরভাবে handle করে পারব। 
//? Syntax:
/*
try {
  Block of code to try
}
catch(err) {
  Block of code to handle errors
}
 */
{
  try {
    console.aula('this is an error')
  } catch (err) {
    console.log('Do anything here')
    console.log(err)
  }
}

//* The throw Statement
// এই statement এর মাধ্যমে আমরা চাইলে একটা custom error তৈরি করতে পারি। আমাদের code এ কোন condition এর উপর ভিত্তি করে আমরা custom error দেখাতে পারি। 
{
  let x = 2
  try {
    if (x == "") throw "is empty";
    if (isNaN(x)) throw "is not a number";
    x = Number(x);
    if (x > 10) throw "is too high";
    if (x < 5) throw "is too low";
  }
  catch (err) {
    console.log("Input " + err);
  }
}

//* The finally Statement
// এই statement এর ভিতরের code সবসময় run করবে, error হোক বা না হোক। 
//? Syntax: 
/*
try {
  Block of code to try
}
catch(err) {
  Block of code to handle errors
}
finally {
  Block of code to be executed regardless of the try / catch result
}
*/
{
  let x = 50
  try {
    if (x == "") throw "is empty";
    if (isNaN(x)) throw "is not a number";
    x = Number(x);
    if (x > 10) throw "is too high";
    if (x < 5) throw "is too low";
  }
  catch (err) {
    console.log("Input " + err);
  }
  finally {
    console.log('I will run always');
  }
}

//* The Error Object
// Javascript এ একটা Built-in error object আছে। আমরা new Error() contractor এর মাধ্যমে error object তৈরি করতে  পারি। আর এই object এর দুইটি useful properties আছে। সেগুলো হলঃ name(Sets or returns an error name) এবং message(Sets or returns an error message (a string))

{
  const age = 17;
  try {
    if (age < 18) {
      throw new Error('You are too Young')
    } else {
      console.log('you are adult');
    }
  } catch (err) {
    console.log(err.name);
    console.log(err.message);
    // console.log(err);
  }
}
//? Error Name Values
//* Range Error
{
  try {
    let num = 5;
    num.toPrecision(200)
  } catch (err) {
    console.log(err.name);
    console.log(err.message);
    // console.log(err);
  }
}

//* Reference Error
{
  let num = 5;
  try {
     num = x + 1;
  } catch (err) {
    console.log(err.name);
    console.log(err.message);
  }
}

//* Syntax Error
{
  try {
     eval("alert('hello)")
  } catch (err) {
    console.log(err.name);
    console.log(err.message);
  }
}

//* Type Error
{
  let num = 1
  try {
    num.toUpperCase();
 } catch (err) {
   console.log(err.name);
   console.log(err.message);
 }
}


//* URI (Uniform Resource Identifier) Error
{
  try {
    decodeURI("%%%")
 } catch (err) {
   console.log(err.name);
   console.log(err.message);
 }
}