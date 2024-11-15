
//* Global এ this এর value:
window.console.log("Global এ this এর value:",this);  //result: [object Window]
console.log("Global এ this এর value:", this); //result: [object Window]
//* এখানে globally,সবকিছু By default window object দ্বারা call হয়ে থাকে। এক্ষেত্রে window দিয়ে না লিখলেও Javascript By default এটাকে window দ্বারাই call করে থাকে। তাই এখানে আমরা this এর value window object ই পাব। কারণ আমরা জানি this refer করে সেই object কে যেটা দ্বারা this কে call করা হয়েছে।

//* Normal function এ this এর value:
function myFunc() {
  console.log("-------------");
  console.log("(Normal function এ (this) এর value:", this);  //result: [window object]
}
myFunc();

//* Arrow function এ this এর value:
const myFunction = () => {
  console.log("-------------");
  console.log("Arrow function এ (this) এর value:", this); //result: [window object]
};
myFunction();

//* Custom Object এ Normal method এর মধ্যে this এর value:
const myObj = {
  firstName: "Shahidul",
  lastName: "Islam",
  fullName: function () {
    console.log("-------------");
    console.log("Custom Object এ Normal method এর মধ্যে (this) এর value:", this); //result: myObj Object
  },
};
myObj.fullName();

//* Custom Object এ nested Object এর normal method এর মধ্যে this এর value:
const myObj1 = {
  firstName: "Shahidul",
  lastName: "Islam",
  nestedMethod: {
    firstName: "Karim",
    lastName: "Khan",
    fullName: function () {
      console.log("-------------");
      console.log("Custom Object এ nested Object এর normal method এর মধ্যে this এর value:", this); //result: nestedMethod Object
    },
  },
};
myObj1.nestedMethod.fullName();

//* Custom Object এ normal method এর মধ্যে normal function এ this এর value:
const myObj2 = {
  firstName: "Shahidul",
  lastName: "Islam",
  fullName: function () {
    console.log("-------*------");
    console.log("FullName Function = " + this.firstName +" "+ this.lastName);  //result: Shahidul Islam
    console.log("Custom Object এ normal method এর মধ্যে this এর value:", this);   //result: myObj2 Object
    function abc() {
      console.log("-------*------");
      console.log("abc Function = " + this.firstName +" "+ this.lastName);   //result: undefined undefined
      console.log("Custom Object এ normal method এর মধ্যে normal function এ this এর value:", this);  //result: [window Object]
    }
    abc();
  },
};
myObj2.fullName();

//? Arrow Method 

//* Custom Object এ arrow method এর মধ্যে this এর value:
const obj = {
  firstName: "Shahidul",
  lastName: "Islam",
  fullName: () => {
    console.log("-------------");
    console.log("Custom Object এ arrow method এর মধ্যে this এর value:", this); //result: [window object]
  },
};
obj.fullName();

//* Custom Object এ nested Object এর arrow method এর মধ্যে this এর value:
const obj1 = {
    firstName: "Shahidul",
    lastName: "Islam",
    nestedMethod: {
      firstName: "Karim",
      lastName: "Khan",
      fullName: () => {
        console.log("-------------");
        console.log("Custom Object এ nested Object এর arrow method এর মধ্যে this এর value:", this); //result: [window object]
      },
    },
  };
  obj1.nestedMethod.fullName();

//* Custom Object এ normal method এর মধ্যে arrow function এ this এর value:
const obj2 = {
  firstName: "Shahidul",
  lastName: "Islam",
  fullName: function () {
    console.log("-------*------");
    console.log("FullName Function = " + this.firstName +" "+ this.lastName);  //result: Shahidul Islam
    console.log("Custom Object এ normal method এর মধ্যে this এর value:", this);   //result: obj2 Object
    const abc = () => {
      console.log("-------*------");
      console.log("abc Function = " + this.firstName +" "+ this.lastName);   //result: Shahidul Islam
      console.log("Custom Object এ normal method এর মধ্যে arrow function এ this এর value:", this);  //result: obj2 Object
    }
    abc();
  },
};
obj2.fullName();

//* Custom Object এ arrow method এর মধ্যে arrow function এ this এর value:
const obj3 = {
  firstName: "Shahidul",
  lastName: "Islam",
  fullName: () => {
    console.log("-------*------");
    console.log("FullName Function = " + this.firstName +" "+ this.lastName);  //result: undefined undefined
    console.log("Custom Object এ arrow method এর মধ্যে this এর value:", this);   //result: [window object]
    const abc = () => {
      console.log("-------*------");
      console.log("abc Function = " + this.firstName +" "+ this.lastName);   //result: undefined undefined
      console.log("Custom Object এ arrow method এর মধ্যে arrow function এ this এর value:", this);  //result: [window object]
    }
    abc();
  },
};
obj3.fullName();



//? For Html Event

//* Normal Function:
const hello = function () {
  document.getElementById("demo").innerHTML += this;
};

// The window object calls the function:
window.addEventListener("load", hello); ////result: [object Window]

// A button object calls the function:
document.getElementById("btn").addEventListener("click", hello); //result: [object Html Button Element]

//* Arrow Function:
const hello1 = () => {
  document.getElementById("demo1").innerHTML += this;
};

// The window object calls the function:
window.addEventListener("load", hello1); //result: [object Window]

// A button object calls the function:
document.getElementById("btn1").addEventListener("click", hello1); //result: [object Window]
