// JavaScript if, else, and else if
//* Conditional Statements: Code করার সময় আমাদের অনেক ক্ষেত্রে বিভিন্ন সিদ্ধান্তের জন্য বিভিন্ন actions নিতে হয়। এই ক্ষত্রে আমারা Conditional Statement ব্যবহার করতে পারি। 
// Javascript এ চার ধরণের conditional statements আছে। যথাঃ 
/**
 *  if
 *  else
 *  else if
 *  switch
 */

//* The if Statement
//Syntax: 
//  if (condition) {
//  block of code to be executed if the condition is true
//  }
{
    let mark = 60;
    if (mark >= 40) {
        console.log('You are passed');
    }
}

//* The else Statement
//Syntax: 
//  if (condition) {
//  block of code to be executed if the condition is true
//  }else {
//  block of code to be executed if the condition is false
//}
{
    let mark = 30;
    if (mark >= 40) {
        console.log('You are passed');
    } else {
        console.log('You are failed');
    }
}

//* The else if Statement
//Use the else if statement to specify a new condition if the first condition is false.
//Syntax: 
//if (condition1) {
//  block of code to be executed if condition1 is true
//  } else if (condition2) {
//  block of code to be executed if the condition1 is false and condition2 is true
//  } else {
//  block of code to be executed if the condition1 is false and condition2 is false
//  }
{
    let mark = 80;
    if (mark >= 80) {
        console.log('You result are excellent');
    } else if(mark >= 40){
         console.log('You result are good');
    }else {
        console.log('You are failed');
    }
}