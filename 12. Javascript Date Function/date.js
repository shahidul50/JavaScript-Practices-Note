//JavaScript Date Objects
//JavaScript Date Object আমাদেরকে Date নিয়ে কাজ করতে দেয়। 
// UTC: UTC means Universal Time Coordinated. 
// GMT: Greenwich Mean Time. 
//UTC same as GMT

//* Creating Date Objects:
//আমরা new Date() constructor এর মাধ্যমে Date objects তৈরি করতে পারি। 
/** আমরা ৯ ভাবে একটা Date object তৈরি করতে পারি।
 * ১. new Date()
 * ২. new Date(date string)
 * ৩. new Date(year,month)
 * ৪. new Date(year,month,day)
 * ৫. new Date(year,month,day,hours)
 * ৬. new Date(year,month,day,hours,minutes)
 * ৭. new Date(year,month,day,hours,minutes,seconds)
 * ৮. new Date(year,month,day,hours,minutes,seconds,ms)
 * ৯. new Date(milliseconds) 
 */

//Javascript new Date(): current date এবং time নিয়ে একটা date object তৈরি করে থাকে। 
{
    const date = new Date()
    console.log(date);
    console.log(typeof date);
}

//Javascript new Date(date string): এটা date string থেকে একটা date object তৈরি করে থাকে। 
{
    const date = new Date("October 13, 2014 11:13:00");
    console.log(date);

    const date1 = new Date("2022-03-25");
    console.log(date1);
}

//* Javascript new Date(year,month,day,hours,minutes,seconds,ms): এইক্ষেত্রে serial অনুযায়ী year, month, hours, minutes,seconds, millisecond দিয়ে দিতে পারি। new Date(year, month, ...) আমাদেরকে এই মান অনুযায়ী একটা  specific date object তৈরি করে দিবে। এখানে year, month parameter কিন্তু অব্যশই দিতে হবে। আর বাকিগুলো হচ্ছে Optional. মনে রাখতে হবে এখানে month গণ্না শুরু হয় 0 থেকে। অথাৎ January = 0, December = 11 । 
//with two Parameters
{
    const date = new Date(2018,11);
    console.log(date);
}
//with three Parameters
{
    const date = new Date(2018, 5, 24);
    console.log(date);
}
//with four Parameters
{
    const date = new Date(2018, 5, 24, 10);
    console.log(date);
}
//with five Parameters
{
    const date = new Date(2018, 5, 24, 10, 33);
    console.log(date);
}
//with six Parameters
{
    const date = new Date(2018, 5, 24, 10, 33, 30);
    console.log(date);
}
//with seven Parameters
{
    const date = new Date(2018, 11, 24, 10, 33, 30, 0);
    console.log(date);
}

// এখানে আমরা 11-এর থেকে বেশি মাস উল্লেখ করলে, কোনো্ error হবে না কিন্তু পরবর্তী বছরে overflow যোগ হবে। 
{
    const date = new Date(2018, 15, 24, 12, 33, 30);
    console.log(date);
 // এটা same as : const date = new Date(2019, 3, 24, 10, 33, 30);
}
//এছাড়া দিনের ক্ষেত্রেও সেইম বিষয়টা হয়ে থাকে। 
{
    const date = new Date(2018, 5, 35, 10, 33, 30);
    console.log(date);
 // এটা same as : const date = new Date(2018, 6, 5, 10, 33, 30);
}

//* new Date(milliseconds): এটাতে আমরা যেই Millisecond দিব সেই অনুসারে আমাদেরকে একটা date object তৈরি করে দিবে। এখানে milliseconds count শুরু হয় January 01, 1970 00:00:00 UTC time থেকে। 
// 1 millisecond = 1000s.
// One day (24 hours) is 86400000 milliseconds(24 * 60 * 60 * 1000).
{
    const date = new Date(100000000000);
    console.log(date); 

    const date1 = new Date(0);
    console.log(date1); 

    const date2 = new Date(-100000000000);
    console.log(date2); 
}

//* the Date.UTC() Method:
//এই Method January 1, 1970 থেকে আজকের Date পর্যন্ত DateTime কে Milliseconds(UTC Time অনুসারে) এ return করে থাকে। 
//Syntax: Date.UTC(year, month, day, hours, minutes, seconds, milliseconds)
{
    const uDate = Date.UTC(2020, 2, 30);
    console.log(uDate);
}