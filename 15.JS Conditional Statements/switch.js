//* JavaScript Switch Statement
//switch statement বিভিন্ন conditions উপর ভিত্তি করে বিভিন্ন actions সম্পাদন করতে ব্যবহৃত হয়। switch statement ব্যবহার করে অনেকগুলো কোড ব্লকের মধ্যে একটি নির্বাচন করতে হবে।
//Syntax: 
/**
 * switch(expression) {
    case x:
      // code block
      break;
    case y:
      // code block
      break;
    default:
      // code block
  }
 */

{
    let day;
    switch (new Date().getDay()) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
    }
    console.log(day);
}

//* The break Keyword
// এখানে break অর্থ হচ্ছে থেমে যাওয়া। অর্থাৎ কোন Block এর মধ্যে যদি break keyword থাকে, এই keyword এ পৌছানোর সাথে সাথে ওই switch block থেকে বের হয় যাবে। switch block এর শেষ Block এ break keyword ব্যবহার করতে হয় না। কারণ এটা যেকোন ভাবে break হয়ে যাবে। 

// The default Keyword
// কোন block match না করলে এর ভিতরের code run হবে। 
