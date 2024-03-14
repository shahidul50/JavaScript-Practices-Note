//JavaScript Set Date Methods:
//Ser Date Methods এর মাধ্যমে আমরা Date Object এ date values(years, months, days, hours, minutes, seconds, milliseconds) এ Set করতে পারি।
//* Local Time Set Methods গুলো হলঃ 
/**
 * setFullYear()
 * setMonth()
 * setDate()
 * setHours()
 * setMinutes()
 * setSeconds()
 * setMilliseconds()
 * setTime()
 */

//* The setFullYear() Method
//এই Method এর মাধ্যমে Date object এর মধ্যে Year Set করা যায়। 
{
    const date = new Date()
    console.log(date);
    date.setFullYear(2020)
    console.log(date);
    //এটাতে Optionally month ও day Set করতে পারি। 
    date.setFullYear(2020,11,3)
    console.log(date);
}

//* The setMonth() Method
//এই Method এর মাধ্যমে Date object এর মধ্যে Month(0-11) Set করা যায়। 
{
    const date = new Date()
    console.log(date);
    date.setMonth(11)
    console.log(date);
}

//* The setDate() Method
//এই Method এর মাধ্যমে Date object এর মধ্যে date(1-31) Set করা যায়। 
{
    const date = new Date()
    console.log(date);
    date.setDate(15)
    console.log(date);
    // 
}

//* The setHours() Method
//এই Method এর মাধ্যমে Date object এর মধ্যে hours(0-23) Set করা যায়। 
{
    const date = new Date()
    console.log(date);
    date.setHours(13)
    console.log(date);
}

//* The setMinutes() Method
//এই Method এর মাধ্যমে Date object এর মধ্যে minutes(0-59) Set করা যায়। 
{
    const date = new Date()
    console.log(date);
    date.setMinutes(20)
    console.log(date);
}

//* The setSeconds() Method
//এই Method এর মাধ্যমে Date object এর মধ্যে seconds(0-59) Set করা যায়। 
{
    const date = new Date()
    console.log(date);
    date.setSeconds(30)
    console.log(date);
}

//* The setMilliseconds() Method
//এই Method এর মাধ্যমে Date object এর মধ্যে milliseconds Set করা যায়। 
{
    const date = new Date()
    console.log(date);
    date.setMilliseconds(3000000)
    console.log(date);
}

//* The setTime() Method

// setTime() পদ্ধতিটি 1 জানুয়ারী, 1970 মধ্যরাত থেকে/ থেকে নির্দিষ্ট সংখ্যক মিলিসেকেন্ড যোগ বা বিয়োগ করে একটি তারিখ এবং সময় সেট করে।
{
    const date = new Date()
    console.log(date);
    date.setTime(10000000)
    console.log(date);
}

//* UTC Time Set Methods গুলো হলঃ 
/**
    setUTCDate()
    setUTCFullYear()
    setUTCHours()
    setUTCMilliseconds()
    setUTCMinutes()
    setUTCMonth()
    setUTCSeconds()
 */

//* The setUTCDate() Method
//The setUTCDate() method sets the day of a Date object, according to UTC.
//Syntax: date.setUTCDate(day)
{
    const date = new Date();
    console.log(date);
    date.setUTCDate(0);
    console.log(date)
}

//* The setUTCFullYear() Method
//The setUTCFullYear() method sets the year of a date object, according to UTC.
//Syntax: date.setUTCFullYear(year, month, day)
{
    const date = new Date();
    console.log(date);
    date.setUTCFullYear(2015);
    console.log(date);

    date.setUTCFullYear(2020, 10, 0);
    console.log(date);
}

//* The setUTCHours() Method
//The setUTCHours() method sets the hour of a date object, according to UTC.
//Syntax: date.setUTCHours(hour, min, sec, millisec)
{
    const date =  new Date()
    console.log(date);
    date.setUTCHours(15);
    console.log(date);
    date.setUTCHours(15, 35, 1);
    console.log(date);
}

//* The setUTCMilliseconds() Method
//The setUTCMilliseconds() method sets the milliseconds (from 0 to 999) of a date object, according to UTC.
//Syntax: date.setUTCMilliseconds(millisec)
{
    const date =  new Date()
    console.log(date);
    date.setUTCMilliseconds(192000);
    console.log(date);
}

//* The setUTCMinutes() Method
//The setUTCMinutes() method sets the minutes of a date object, according to UTC.
//Syntax: date.setUTCMinutes(min, sec, millisec)
{
    const date =  new Date()
    console.log(date);
    date.setUTCMinutes(17);
    console.log(date);
}

//* The setUTCMonth() Method
//The setUTCMonth() method sets the month (from 0 to 11) of a date object, according to UTC.
//Syntax: date.setUTCMonth(month, day)
{
    const date =  new Date()
    console.log(date);
    date.setUTCMonth(4);
    console.log(date);
}

//* The setUTCSeconds() Method
//The setUTCSeconds() method sets the seconds of a date object, according to UTC.
//Syntax: date.setUTCSeconds(sec, millisec)
{
    const date =  new Date()
    console.log(date);
    date.setUTCSeconds(35);
    console.log(date);
    date.setUTCSeconds(35, 8025);
    console.log(date);
}