//*Javascript Boolean
//A JavaScript Boolean represents one of two values: true or false.
//Boolean value আমরা তখনই ব্যবহার করব যখন আমাদের দুইটা Value এর মধ্যে result লাগবে। যেমন হতে পারেঃ Yes/No, ON/OFF, TRUE/FALSE. 

// The Boolean() Function
//আমরা Boolean() function ব্যবহার করে কোন expression সত্য নাকে মিথ্যা সেটা বের করতে পারি। 
{
    console.log(Boolean(10>9));
    console.log(Boolean(10>90));
}

//* Javascript Truthy Value
// Everything With a "Value" is True
/**
 *  1
 *  3.14
 *  -15
 *  "Hello"
 *  7+1+3.14
 *  true
 */
//* Javascript Falsy Value
// Everything Without a "Value" is False
/**
 *   0
 *   -0
 *   ""(Empty String)
 *   undefined
 *   null
 *   false
 */

//* JavaScript Booleans as Objects
{
    let x = false
    let y = new Boolean(false);
    console.log(typeof x);
    console.log(typeof y);

    //Comparison
    console.log(x==y); 
    console.log(x===y); 
}