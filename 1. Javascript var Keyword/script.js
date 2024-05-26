//mutable
//first variable declaring
var x; //Allowed
x= 5;  //Allowed
console.log(x);


function number(){
     //Second variable declaring
       var x= 10;  //Allowed
      console.log(x);
}

number();

console.log(x);

//Reassign Value
x = 30;   // Allowed

console.log(x);

if(true){
    //Third variable declaring
    var x = 150; //Allowed
    console.log(x);
}


console.log(x);

//Redeclare Variable
//fourth variable declaring
var x = 100;  //Allowed

console.log(x);
