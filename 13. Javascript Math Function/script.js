// JavaScript Math Object: এটি আমাদেরকে Number এর উপর কাজ সম্পাদন করতে সাহায্য করে।
// অন্যান্য Object এর মত, Math Object এর কোন constructor নেই। এটি Static Object. Math Object create না করে আমরা এর সকল methods এবং properties ব্যবহার করতে পারব।
//Property Syntax: Math.property.
//Method Syntax: Math.method(number)

//Math.PI Properties
{
    const PI = Math.PI;
    console.log(PI);
}

//Round Number to Integer
//There are 4 common methods to round a number to an integer.
//* The Math.round() Method:
//এটা কাছাকাছি Integer Value কে return করে।
//Syntax: round(x)
{
    const number1 = Math.round(4.4)
    console.log(number1);
    const number2 = Math.round(4.5)
    console.log(number2);
    const number3 = Math.round(4.6)
    console.log(number3);
}

//* The Math.ceil() Method:
//এটা কাছাকাছি উপরের Integer Value কে return করে।
//Syntax: ceil(x)
{
    const number1 = Math.ceil(4.2)
    console.log(number1);
    const number2 = Math.ceil(4.4)
    console.log(number2);
    const number3 = Math.ceil(4.7)
    console.log(number3);
    const number4 = Math.ceil(-4.2)
    console.log(number4);
}

//* The Math.floor() Method:
//এটা কাছাকাছি নিচের Integer Value কে return করে।
//Syntax: floor(x)
{
    const number1 = Math.floor(4.2)
    console.log(number1);
    const number2 = Math.floor(4.4)
    console.log(number2);
    const number3 = Math.floor(4.7)
    console.log(number3);
    const number4 = Math.floor(-4.2)
    console.log(number4);
}

//* The Math.trunc() Method:
//এটা Integer Value কে return করে।
//Syntax: trunc(x)
{
    const number1 = Math.trunc(4.2)
    console.log(number1);
    const number2 = Math.trunc(4.4)
    console.log(number2);
    const number3 = Math.trunc(4.7)
    console.log(number3);
    const number4 = Math.trunc(-4.2)
    console.log(number4);
}

//* The Math.sign() Method:
//এটাতে পাস করা Value Positive হলে 1, negative হলে -1 এবং Null হলে 0 return করে।
//Syntax: sign(x)
{
    const number1 = Math.sign(4)
    console.log(number1);
    const number2 = Math.sign(0)
    console.log(number2);
    const number3 = Math.sign(-4)
    console.log(number3);

}

//* The Math.pow() Method:
//Syntax: pow(x,y)
//এটার মাধ্যমে আমরা কোন Value এর Power নির্ণেয় করতে পারি। এখানে x হচ্ছে value আর y হচ্ছে Value এর power ।
{
    const number1 = Math.pow(4,2)
    console.log(number1);
}

//* The Math.sqrt() Method:
//Syntax: sqrt(x)
//এটার মাধ্যমে আমরা কোন Value এর Square Root নির্ণেয় করতে পারি।
{
    const number1 = Math.sqrt(64)
    console.log(number1);
}

//* The Math.abs() Method:
//Syntax: abs(x)
//এটার মাধ্যমে আমরা কোন Value এর Positive Absolute মান নির্ণেয় করতে পারি।
{
    const number1 = Math.abs(-64.236)
    console.log(number1);
}

//* The Math.min() Method:
//Syntax: min(x,...)
//এটার মাধ্যমে আমরা কোন list of Values থেকে সর্বনিম্ন মান নির্ণেয় করতে পারি।
{
    const number1 = Math.min(0, 150, 30, 20, -8, -200)
    console.log(number1);
}

//* The Math.max() Method:
//Syntax: max(x,....)
//এটার মাধ্যমে আমরা কোন list of Values থেকে সর্বোচ্চ মান নির্ণেয় করতে পারি।
{
    const number1 = Math.max(0, 150, 30, 20, -8, -200)
    console.log(number1);
}

//* The Math.random() Method:
//Syntax: random()
//এটার মাধ্যমে আমরা 0 এবং 1 এর মধ্যে random value নির্ণেয় করতে পারি।
{
    const number1 = Math.random()
    console.log(number1);
}
// JavaScript Random Integers
//আমরা যদি নির্দিষ্ট একটা Range এর মধ্যে Integer Random Number পেতে চাই তাহলে Math.random() এর result কে সর্বোচ্চ সংখ্যা দ্বারা গুণ করতে হবে এবং সম্পুর্ণ Result কে Math.floor() এর মধ্যে দিইয়ে পাস করে দিতে হবে।
// Returns a random integer from 0 to 9:
{
    const rNumber = Math.floor(Math.random()*10);
    console.log(rNumber);
}
// Returns a random integer from 0 to 10:
{
    const rNumber = Math.floor(Math.random()*11);
    console.log(rNumber);
}
// Returns a random integer from 0 to 100:
{
    const rNumber = Math.floor(Math.random()*101);
    console.log(rNumber);
}
//? Or
// Returns a random integer from 0 to 10:
{
    const rNumber = Math.floor(Math.random()*10)+1;
    console.log(rNumber);
}
// Returns a random integer from 0 to 100:
{
    const rNumber = Math.floor(Math.random()*100)+1;
    console.log(rNumber);
}

// A Proper Random Function
//এছাড়া আমরা চাইলে একটা Random Function ব্যবহার করতে পারি।
//এই Javascript Function একটি random Number return করে between min(included) এবং max(excluded) । 
{
    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min) ) + min;
    }
    const result = getRndInteger(10,20);
    console.log(result);
}

//এই Javascript Function একটি random Number return করে between min(included) এবং max(included) । 
{
    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }
    const result = getRndInteger(10,20);
    console.log(result);
}
