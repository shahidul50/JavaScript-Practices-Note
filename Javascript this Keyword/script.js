//* The JavaScript this Keyword
//Javascript এ this keyword refer করে একটা object কে। কোন object সেটা নির্ভর করে this কে কিভাবে call করা হচ্ছে সেটার উপর। অর্থাৎ this keyword ব্যবহার এর উপর নির্ভর করে বিভিন্ন object কে refer করে থাকে। যেমন:

// object এর Method এর মধ্যে this refer করে object কে। 
// একা অবস্থায় this refer করে global object কে। (Browser এর ক্ষেত্রে এটা window object হয়ে থাকে।)
// একটা function এর মধ্যে this refer করে global object কে। তবে Strict Mode এ this 'undefined' হয়ে থাকে।
// একটা event এর মধ্যে this refer করে সেই element কে যেটা event এর মাধ্যমে received করা হয়েছে।
// call(), apply() এবং bind() method এর ক্ষেত্রে this refer করে যেকোন object কে। 
//! Note: this কিন্তু কোন variable না। এটা একটা keyword ।

//* this in a Method
//object এর Method এর মধ্যে this refer করে ওই object কে। 
{
    const person = {
        firstName: "Shahidul",
        lastName: "Islam",
        age: 28,
        fullName: function () {
            return this.firstName + " " + this.lastName;
        }
    }
    console.log(person.fullName());
}

// আমরা যদি person object এর ভিতরে anotherPerson নামে আরেকটা object define করি এবং তার ভিতরে যদি this ব্যবহার করি তাহলে এই this কাকে refer করবে? এই this অবশ্যই তার কাছের object কেই refer করবে। অর্থাৎ anotherPerson কে refer করবে।
{
    const person = {
        firstName: "Shahidul",
        lastName: "Islam",
        age: 28,
        anotherPerson: {
            firstName: "Karim",
            lastName: "Ahamed",
            fullName: function () {
                return this.firstName + " " + this.lastName;
            }
        }
    }
    console.log(person.anotherPerson.fullName());
}

//* this in Alone
//একা অবস্থায় this refer করে global object কে। কারন this global scope এ run করে থাকে। আর Browser এর মধ্যে global object হবে[object Window] অর্থাৎ browser এর global object হচ্ছে window object. Strict Mode এর ক্ষেত্রেও Same হয়ে থাকে। Node js এর ক্ষেত্রে global object কেই refer করে থাকে। 
{
    let x = this;
    console.log(x);
}

//* this in a Function (Default)
//function এর মধ্যে this refer করে global object কে। আর Browser এর মধ্যে global object হল[object Window].
{
    function myFunction() {
        return this;
    }
    let a = myFunction();
    console.log(a);
}

//* this in a Function (Strict)
//Strict Mode এ this 'undefined' হয়ে থাকে। কারণ Strict Mode এ default binding Allow করে না। এই strict mode আসলে এসেছে Bad Practice Avoid করার জন্য। Javascript এ অনেক কিছু নিয়ম এর বাহিরে পড়ে যায়। function এর ভিতরে আমরা this keyword ব্যবহার করে Accidentally global variable তৈরি করে ফেলতে পারি। কিন্তু Strict Mode এ এটা সম্ভব হয় না। এই জন্য Strict Mode এ আমরা 'undefined' দেখছি। 
{
    "use strict";
    function myFunction() {
        return this;
    }
    let a = myFunction();
    console.log(a);
}

//* Object Method Binding
// একটা function কে কিভাবে call করা হচ্ছে সেটার উপর নির্ভর করে this এর value নির্দিষ্ট হয়। যেমন default mode এ এটা global object কে refer করে। Strict Mode এ this এর value 'undefined' থাকে। কোন custom object এর ভিতরে method এর মধ্যে this এর value সেই custom object কে refer করে থাকে। 
{
    const person = {
        firstName  : "Shahidul",
        lastName   : "Islam",
        id         : 5566,
        myFunction : function() {
          return this;
        }
      };

      console.log(person.myFunction());
}

//* this in Event Handlers
// একটা event এর মধ্যে this refer করে সেই element কে যেটা event এর মাধ্যমে received করা হয়েছে।
{
    // <button onclick="this.style.display='none'">Click to Remove Me!</button>
}

//* Explicit Function Binding
// call(), apply() এবং bind() method এর ক্ষেত্রে this refer করে যেকোন object কে। এগুলো Javascript এর predefined Methods. এই Methods গুলোর মাধ্যমে আমরা বাহিরে থেকে this এর value কি হবে সেটা নির্ধারণ করে দিতে পারি। 
{
    const person1 = {
        fullName: function() {
          return this.firstName + " " + this.lastName;
        }
      }
      
      const person2 = {
        firstName:"Shahidul",
        lastName: "Islam",
      }
      
      // Return "Shahidul Islam":
      console.log(person1.fullName.call(person2));
}
//উপরের Example এ আমরা call() method এর মাধ্যমে person1.fullName এর মধ্যে person2 কে argument হিসেবে পাঠিয়ে দিয়েছি। এক্ষেত্রে fullName person1 এর Method হলেও এটার this refer করবে person2 কে। 

//? Function Borrowing
//bind() method এর মাধ্যমে একটি object another object থাকে method borrow করে নিতে পারে। নিচের example এ person এবং member নামে দুইটি object আছে। member object, person object থেকে fullName Method কে borrow করে। 
{
    const person = {
        firstName:"Shahidul",
        lastName: "Islam",
        fullName: function () {
          return this.firstName + " " + this.lastName;
        }
      }
      
      const member = {
        firstName:"Karim",
        lastName: "Ahamed",
      }
      
      let fullName = person.fullName.bind(member);
      console.log(fullName());
}

//! Note: call(), apply(), bind() Methods গুলো নিয়ে সামনে আরও বিস্তারিত আলোচনা করা হবে। 

//* This Precedence
// To determine which object this refers to; use the following precedence of order.
// Precedence	Object
// 1	        bind()
// 2	        apply() and call()
// 3	        Object method
// 4	        Global scope
