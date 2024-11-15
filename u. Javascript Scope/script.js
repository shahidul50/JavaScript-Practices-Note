//* JavaScript Scope.
// এখানে Scope বলেতে বুঝাছে, আমরা যখন variable তৈরি করি তখন এই variable গুলো Access করার কিছু নির্দিষ্ট Boundary আছে যার বাহিরে আমরা variable গুলোকে আর access করতে পারি না। 
//Javascript এ three type Scope আছে। সেগুলো হলঃ 
// Block Scope
// Function Scope
// Global Scope

//* Block Scope
// Javascript variable এ ES6(2015) এর আগে শুধুমাত্র দুইটা Scope ছিল। Global Scope এবং Function Scope । ES6 এ দুইটা keywords এর সাথে আমরা পরিচিত হয়। এই keywords দুইটা হচ্ছে let এবং const । এই keywords দুইটা হচ্ছে Block Scope. অর্থাৎ ({...}) এই Bracket এর ভিতরে আমরা let এবং const দিয়ে কোন variable Declare করলে সেটা এর বাহিরে কোনভাবে access করা যাবে না।
{

    {
        let x = 2;
        console.log(x);
    }
    //x এখানে ব্যবহার করা যাবে না।
    // console.log(x);

    {
        const a = 2;
        console.log(a);
    }
    //a এখানে ব্যবহার করা যাবে না।
    // console.log(a);
}
// কিন্তু var keyword এর মাধ্যমে কোন variable declare করলে সেটা block Scope হবে না। অর্থাৎ  ({...}) এই Bracket এর ভিতরে আমরা var দিয়ে কোন variable declare করলে সেটা এর বাহিরে access করা যাবে। 
{
    {
        var x = 2;
        console.log(x);
    }
    //x এখানে ব্যবহার করা যাবে। 
    console.log(x);
}

//* Function Scope
//Function এর ভিতরে কোন variable declared করা হলে সেটা ওই function এর local variable হয়ে থাকে। আর local variable এর Function Scope হয়ে থাকে। অর্থাৎ এটার access শুধুমাত্র এর ভিতরেই করা যাবে বাহিরে থেকে access করা যাবে না। যেহেতু local variable গুলি শুধুমাত্র তাদের function এর মধ্যে স্বীকৃত হয়, তাই একই নামের variable গুলি বিভিন্ন function এ ব্যবহার করা যেতে পারে। এছাড়া একটা function start হলে local variable তৈরি করা হয় আর function completed হলে সেটা delete করে দেওয়া হয়।
{
    // code here can NOT use username
    function myFunction() {
        let username = "Shahidul";
        // code here can use username
        console.log(username);
    }
    myFunction()
    // code here can NOT use username
    //console.log(username);


    function myFunction1() {
        var username = 'Shahidul';
        // code here can use username
        console.log(username);
    }
    myFunction1()
    // code here can NOT use username
    // console.log(username);
}

//* Global Scope
//function এর বাহিরে কোন variable declared করা হলে সেটা global variable হয়ে থাকে। আর global variable এর global Scope হয়ে থাকে। global variable কে javascript program এর সব জায়গা থেকে access করা যায়। Javascript এ variable declare করা সকল keyword এর global Scope আছে।
{
    let carName = "Volvo";
    // code here can use carName
    console.log(carName);

    function myFunction() {
        // code here can also use carName
        console.log(carName);
    }
    myFunction()
    // code here can also use carName
    console.log(carName);
}

//* Automatically Global
// আমরা যদি declared করা হয়নি এমন একটি variable এর জন্য একটি value নির্ধারণ করি তবে এটি স্বয়ংক্রিয়ভাবে একটি Global variable হয়ে যাবে। এমনকি যদি একটি function এর ভিতরে মানটি assigned করা হয়।
{
    myFunction();

    // code here can use carName
    console.log(carName);

    function myFunction() {
        carName = "Volvo";
    }
}

//* Global Variables in HTML
// Html বা browser এর মধ্যে global scope হচ্ছে window object.
// var keyword দিয়ে সংজ্ঞায়িত global variable window object এর অন্তর্গত.
// let keyword দিয়ে সংজ্ঞায়িত global variable window object এর অন্তর্গত নয়.
//! Note: দরকার না থাকলে global variable তৈরি করা উচিত না।

//* Strict Mode
//'Strict Mode' এ undeclared variable automatically global হয় না। 

//* The Lifetime of JavaScript Variables
// Javascript variable এর lifetime শুরু হয় যখন এটা declear করা হয় তখন।
// Function বা Local variable delete হয়ে যায় তখন যখন function এর কাজ completed হয়ে যায়। 
// Web Browser এ Global variable delete হয়ে যায় তখন, যখন browser window(tab) close হয়ে যায়।

//* Function Arguments
//Function arguments(parameters) function এর মধ্যে local Variable হিসেবে কাজ করে।  