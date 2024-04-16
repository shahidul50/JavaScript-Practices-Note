//* JavaScript Arrow Function
// Arrow Function introduce করা হয় Javascript version ES6 এ । Arrow function এর মাধ্যমে আমরা shorter function syntax লিখতে পারি। 

//Normal Function Example:
{
    let myFunction = function () {
        return 'Hello World';
    }

    console.log(myFunction());
}

//Arrow Function Example:
{
    let myFunction = () => {
        return 'Hello World';
    }
    console.log(myFunction());
}

//যেহেতু এখানে একটা statement সেহেতু আমরা চাইলে এটাকে আরও short করে লিখতে পারি। এখানে Brackets এবং return keyword আমরা remove করে দিতে পারি। এক্ষেত্রে return value by default হয়ে থাকে। মনে রাখতে হবে এইটা শুধু single statement এর ক্ষেত্রে কাজ করবে। 
{
    let myFunction = () => 'Hello World';
    console.log(myFunction());
}

//Arrow function with Parameter:
{
   let  myFunction = (val) => "Hello " + val;

   console.log(myFunction('Shahidul'));
}

//আসলে যদি একটা parameter হয় তাহলে আমরা parentheses কে skip করতে পারি। তবে কোন parameters না থাকলে অবশ্যই parentheses দিতে হবে।
{
    let  myFunction = val => "Hello " + val;

    console.log(myFunction('Shahidul'));
}

//* This in Arrow Function
// Regular function এর তুলনায় Arrow function এর মধ্যে this এর value handle করা একটু different । সংক্ষেপে বলতে গেলে arrow function এ this binding হয় না। আমরা দেখেছিলাম regular function এ this binding হয়ে যাচ্ছে কোন একটা object এর সাথে। this যখন function এর মধ্যে ব্যবহার করেছিলাম তখন হয় সেই function টাকে যে call করেছিল ডট(.) দিয়ে সেটাই this এর value হয়ে যাচ্ছিল। তারমানে এখানে Automatic binding হয়ে যাচ্ছিল। সেটা Arrow function এর ক্ষেত্রে হবে না।  
 
// regular function এর ক্ষেত্রে this keyword represent করে সেই object কে যেটা দ্বারা ওই function টা call করা হয়েছিল। সেটা যেকোন কিছু হতে পারে window, the document, a button ইত্যাদি। 
//Arrow function এর ক্ষেত্রে this keyword সবসময় represent করে সেই object কে যেটা এই Arrow function কে defined করে থাকে। 

