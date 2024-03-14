//first variable declaring
const x= 5;   //Allowed
console.log(x);


function number(){
    //Second variable declaring
      const x= 10;  //Allowed
      console.log(x);
}

number();

//Reassign Value
// x = 20; //Not Allowed

console.log(x);

if(true){
  //Third variable declaring
    const x = 150;    //Allowed
    console.log(x);
}

console.log(x);

//Redeclare Variable
//fourth variable declaring
// const x = 500; //Not Allowed
