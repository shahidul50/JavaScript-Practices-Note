//* Global এ this এর value:
console.log("Global এ this এর value:", this);  //result: Empty Object {}

//* Normal function এ this এর value:
const myFunc = function () {
    console.log("Normal function এ this এর value:", this);  //result: global Object
};
myFunc();

//* Arrow function এ this এর value:
const myFunction = () => {
    console.log("Arrow function এ this এর value:", this);   //result: Empty Object {}
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
  
  //* Custom Object এ inner Object এর normal method এর মধ্যে this এর value:
  const myObj1 = {
    firstName: "Shahidul",
    lastName: "Islam",
    innerMethod: {
      firstName: "Karim",
      lastName: "Khan",
      fullName: function () {
        console.log("-------------");
        console.log("Custom Object এ nested Object এর normal method এর মধ্যে this এর value:", this); //result: innerMethod Object
      },
    },
  };
  myObj1.innerMethod.fullName();
  
  //* Custom Object এ normal method এর মধ্যে normal function এ this এর value:
  const myObj2 = {
    firstName: "Shahidul",
    lastName: "Islam",
    fullName: function () {
      console.log("-------*------");
      console.log("Custom Object এ normal method এর মধ্যে this এর value:", this);   //result: myObj2 Object
      console.log("FullName Function = " + this.firstName +" "+ this.lastName);  //result: Shahidul Islam
      function abc() {
        console.log("-------*------");
        console.log("Custom Object এ normal method এর মধ্যে normal function এ this এর value:", this);  //result: [global object]
        console.log("abc Function = " + this.firstName +" "+ this.lastName);   //result: undefined undefined
      }
      abc();  //globally call
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
      console.log("Custom Object এ arrow method এর মধ্যে this এর value:", this); //result: Empty Object {}
    },
  };
  obj.fullName();
  
  //* Custom Object এ inner Object এর arrow method এর মধ্যে this এর value:
  const obj1 = {
      firstName: "Shahidul",
      lastName: "Islam",
      innerMethod: {
        firstName: "Karim",
        lastName: "Khan",
        fullName: () => {
          console.log("-------------");
          console.log("Custom Object এ nested Object এর arrow method এর মধ্যে this এর value:", this); //result: Empty Object {}
        },
      },
    };
    obj1.innerMethod.fullName();
  
  //* Custom Object এ normal method এর মধ্যে arrow function এ this এর value:
  const obj2 = {
    firstName: "Shahidul",
    lastName: "Islam",
    fullName: function () {
      console.log("-------*------");
      console.log("Custom Object এ normal method এর মধ্যে this এর value:", this);   //result: obj2 Object
      console.log("FullName Function = " + this.firstName +" "+ this.lastName);  //result: Shahidul Islam
      const abc = () => {
        console.log("-------*------");
        console.log("Custom Object এ normal method এর মধ্যে arrow function এ this এর value:", this);  //result: obj2 Object
        console.log("abc Function = " + this.firstName +" "+ this.lastName);   //result: Shahidul Islam
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
      console.log("Custom Object এ arrow method এর মধ্যে this এর value:", this);   //result: Empty Object {}
      console.log("FullName Function = " + this.firstName +" "+ this.lastName);  //result: undefined undefined
      const abc = () => {
        console.log("-------*------");
        console.log("Custom Object এ arrow method এর মধ্যে arrow function এ this এর value:", this);  //result: Empty Object {}
        console.log("abc Function = " + this.firstName +" "+ this.lastName);   //result: undefined undefined
      }
      abc();
    },
  };
  obj3.fullName();