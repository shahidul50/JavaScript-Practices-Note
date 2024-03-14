// JavaScript Get Date Methods
// JavaScript এ কিছু Get Method রয়েছে যেগুলোর মাধ্যমে বিভিন্ন date বা time Get করতে পারি। 
//* Local Time Get Methods গুলো হলঃ 
/**
 * getFullYear()
 * getMonth()
 * getDate()
 * getDay()
 * getHours()
 * getMinutes()
 * getSeconds()
 * getMilliseconds()
 * getTime()
 */

//* The getFullYear() Method:
//এটি Date object থেকে four digit number year কে return করে থাকে। 
{
    const date = new Date();
    console.log(date.getFullYear());
}

//* The getMonth() Method:
//এটি একটি Date object থেকে Month কে একটি Number(0-11) হিসাবে প্রদান করে।
{
    const date = new Date();
    console.log(date.getMonth());
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    console.log(months[date.getMonth()]);
}

//* The getDate() Method
//এটি একটি Date object থেকে date কে একটি Number(1-31) হিসাবে প্রদান করে।
{
    const date = new Date();
    console.log(date.getDate()); 
}

//* The getDay() Method
//এটি একটি Date object থেকে day কে একটি Number(0-6) হিসাবে প্রদান করে। jJavaScript এ Day count শুরু হয় Sunday থেকে। 
{
    const date = new Date();
    console.log(date.getDay()); 
    const days = ['Sunday','Monday', 'Tuesday','Wednesday','Thursday','Friday','Saturday']
    console.log(days[date.getDay()]);
}

//* The getHours() Method
//এটি একটি Date object থেকে hour কে একটি Number(0-23) হিসাবে প্রদান করে।
{
    const date = new Date();
    console.log(date.getHours()); 
}

//* The getMinutes() Method
//এটি একটি Date object থেকে minute কে একটি Number(0-59) হিসাবে প্রদান করে।
{
    const date = new Date();
    console.log(date.getMinutes()); 
}

//* The getSeconds() Method
//এটি একটি Date object থেকে second কে একটি Number(0-59) হিসাবে প্রদান করে।
{
    const date = new Date();
    console.log(date.getSeconds()); 
}

//* The getMilliseconds() Method
//এটি একটি Date object থেকে millisecond কে একটি Number(0-999) হিসাবে প্রদান করে।
{
    const date = new Date();
    console.log(date.getMilliseconds()); 
}

//* The getTime() Method
//এটি January 1, 1970 থেকে আজকের Date পর্যন্ত milliseconds এর সংখ্যাকে প্রদান করে। 
{
    const date = new Date();
    console.log(date.getTime()); 
}

//* The Date.now() Method
//এটিও January 1, 1970 থেকে আজকের Date পর্যন্ত milliseconds এর সংখ্যাকে প্রদান করে। 
//এটি Date object এর একটি Static Method. এটাকে আমরা কখনো (myDate.now()) এভাবে লিখতে পারব না। এটার Syntax হচ্ছে Date.now()
{
    console.log(Date.now());
}

//* The getYear() Method
//Old Javascript Code এ এই Non-Standard Method ব্যবহার করা হত। এটা 2-digit year return করে থাকে। বর্তমানে এটা ব্যবহার করা হয় না। 
{
    const date = new Date("Mar 25 2000");
    console.log(date.getYear());
}

//* The getTimezoneOffset() Method
//এটি Local Time এবং UTC Time এর মধ্যে পার্থক্য(in minutes) প্রধান করে থাকে। 
{
    const date = new Date()
    let diff = date.getTimezoneOffset();
    console.log(diff);
}

//* UTC Time Get Methods গুলো হলঃ 
/**
 * getUTCFullYear()
 * getUTCMonth()
 * getUTCDate()
 * getUTCDay()
 * getUTCHours()
 * getUTCMinutes()
 * getUTCSeconds()
 * getUTCMilliseconds()
 */

//Local Time Vs UTC Time
{
    const date = new Date()
    const localTime = date.getHours()
    console.log(localTime);
    const utcTime = date.getUTCHours()
    console.log(utcTime);
}

//* The getUTCFullYear() Method:
//এটি Date object থেকে four digit number year কে return করে থাকে। 
{
    const date = new Date();
    console.log(date.getUTCFullYear());
}

//* The getUTCMonth() Method:
//এটি একটি Date object থেকে Month কে একটি Number(0-11) হিসাবে প্রদান করে।
{
    const date = new Date();
    console.log(date.getUTCMonth());
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    console.log(months[date.getUTCMonth()]);
}

//* The getUTCDate() Method
//এটি একটি Date object থেকে date কে একটি Number(1-31) হিসাবে প্রদান করে।
{
    const date = new Date();
    console.log(date.getUTCDate()); 
}

//* The getUTCDay() Method
//এটি একটি Date object থেকে day কে একটি Number(0-6) হিসাবে প্রদান করে। jJavaScript এ Day count শুরু হয় Sunday থেকে। 
{
    const date = new Date();
    console.log(date.getUTCDay()); 
    const days = ['Sunday','Monday', 'Tuesday','Wednesday','Thursday','Friday','Saturday']
    console.log(days[date.getUTCDay()]);
}

//* The getUTCHours() Method
//এটি একটি Date object থেকে hour কে একটি Number(0-23) হিসাবে প্রদান করে।
{
    const date = new Date();
    console.log(date.getUTCHours()); 
}

//* The getUTCMinutes() Method
//এটি একটি Date object থেকে minute কে একটি Number(0-59) হিসাবে প্রদান করে।
{
    const date = new Date();
    console.log(date.getUTCMinutes()); 
}

//* The getUTCSeconds() Method
//এটি একটি Date object থেকে second কে একটি Number(0-59) হিসাবে প্রদান করে।
{
    const date = new Date();
    console.log(date.getUTCSeconds()); 
}

//* The getUTCMilliseconds() Method
//এটি একটি Date object থেকে millisecond কে একটি Number(0-999) হিসাবে প্রদান করে।
{
    const date = new Date();
    console.log(date.getUTCMilliseconds()); 
}



