//* JavaScript Date Input:
//Javascript এ Date Input format সাধারণত ৩ ধরণের হয়ে থাকে। 
/**
 * ISO Date Format: "2015-03-25" (The International Standard)
 * Short Date: "03/25/2015"
 * Long Date: "Mar 25 2015" or "25 Mar 2015"
 */
// Javascript এ ISO format একটা Strict Standard follow করে থাকে। অর্থাৎ আমরা ISO Formate ব্যবহার করলে সব জায়গায় একটা Standard অনুসারে Date পাব। আর অন্যান্য formate ব্যবহার করলে browsers অনুসারে এটা Change হতে পারে। অর্থাৎ Browser এ যে format থাকবে সেই format এ display করবে। 

//* JavaScript Date Output
//By default javascript String formate এ date output দিয়ে থাকে। 
//Example: Sat Mar 09 2024 13:03:29 GMT+0600 (Bangladesh Standard Time)

//* JavaScript ISO Dates
//ISO 8601 Date এবং Time উপস্থাপনের জন্য আন্তর্জাতিক মানদণ্ড। The ISO 8601 syntax (YYYY-MM-DD) । এছাড়াও preferred JavaScript date format হচ্ছে এটা। এই Date টা Time Zone এর সাথে Relative হয়ে থাকে। তাই এটা Deferent Time Zone এ  Different (time and date) দিয়ে থাকে। 
{
    const date = new Date("2015-03-25");
    console.log(date);
}

//* ISO Dates (Year and Month)
// ISO Dates, Day নির্দিষ্ট না করে লেখা যেতে পারে এই format এ:(YYYY-MM)
{
    const date = new Date("2015-03");
    console.log(date);
}

//* ISO Dates (Only Year)
//ISO Dates, Day এবং month নির্দিষ্ট না করে লেখা যেতে পারে এই format এ:(YYYY)
{
    const date = new Date("2015");
    console.log(date);
}

//* ISO Dates (Date-Time)
// ISO Dates এর সাথে hours, minutes এবং seconds যোগ করেও লেখা যেতে পারে এই Format এ:(YYYY-MM-DDTHH:MM:SSZ)
// Date এবং time Capital (T) এর মাধ্যেমে আলাদা করা হয়।
//এখানে UTC Time (Z) দ্বারা define করা হয়। 
//UTC Time এর সাপেক্ষে Time change করতে চাইলে (Z) সরিয়ে দিয়ে এর পরিবর্তে +HH:MM বা -HH:MM Add করতে হবে। 
{
    const date = new Date("2015-03-25T09:00:00");
    console.log(date);

    const date0 = new Date("2015-03-25T09:00:00Z");
    console.log(date0);

    const date1 = new Date("2015-03-25T10:00:00+06:30");
    console.log(date1);

    const date2 = new Date("2015-03-25T09:00:00-06:00");
    console.log(date2);
}

const date = new Date();
console.log(date.toISOString());

{
    const date = new Date("2024-03-10T03:10:00");
    console.log(date);

    const date0 = new Date("2024-03-10T03:10:00Z");
    console.log(date0);

    const date1 = new Date("2024-03-10T09:10:00+06:00");
    console.log(date1);

    const date2 = new Date("2024-03-10T09:10:00-06:00");
    console.log(date2);
}

//* JavaScript Short Dates.
//Short Date লেখা হয় এই Syntax এ(MM/DD/YYYY):
{
    const date = new Date('03/25/2018');
    console.log(date);
}

//JavaScript Long Dates.
//Long Date লেখা হয় এই Syntax এ(MMM DD YYYY):
{
    const date = new Date('Mar 25 2018');
    console.log(date);

    const date1 = new Date('25 Mar 2018');
    console.log(date1);

    const date2 = new Date('March 25 2018');
    console.log(date2);
}

// Date Input - Parsing Dates
// আমরা Date.parse() এর মাধ্যমে একটা Valid String কে Milliseconds এ Convert করতে পারি। এই Method January 1, 1970 থেকে আমাদের দেওয়া Date পর্যন্ত number of milliseconds return করে থাকে। 
//ভুল Date দিলে এটি NaN return করে থাকে। 
{
    const msec = Date.parse("April 05, 1995");
    console.log(msec);
}
//এই number of milliseconds কে new Date(milliseconds) এর মাধ্যমে date object এ convert করতে পারি। 
{
    const msec = Date.parse("April 05, 1995");
    console.log(msec); 
    const date = new Date(msec) 
    console.log(date);
}