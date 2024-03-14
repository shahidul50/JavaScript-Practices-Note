//first variable declaring
let x;   //Allowed
  x= 5;  //Allowed
console.log(x);


function number(){
    //Second variable declaring
      let x= 10;
      console.log(x);
}

number();

console.log(x);

//Reassign Value
 x = 30;   // Allowed

 console.log(x);

if(true){
   //third variable declaring
    let x = 150;
    console.log(x);
}

//Redeclare Variable
//fourth variable declaring
// let x = 500; //Not Allowed
console.log(x);
