//* JSON.Parse()
// JSON এর একটি সাধারণ ব্যবহার হচ্ছে Web server এ data পাঠানো বা data নিয়ে আসা। যখন আমরা web server থেকে data receive করি তখন Data always একটা string হয়ে থাকে। যেটা একটা valid JSON String হয়ে থাকে। এই data ব্যবহার করতে হলে আগে javascript object এ convert করতে হয়। এই Convert টা আমরা করতে পারি Javascript এ Build-in function JSON.parse() এর মাধ্যমে। JSON.parse() একটা valid JSON String কে Javascript object এ convert করে দেয়। তবে valid JSON না হলে এটা syntax error প্রধান করে থাকে। 
{
    const jsonString = '{"name":"Shahidul Islam", "age":30, "city":"Chittagong"}'
    console.log(jsonString);
    const personObj = JSON.parse(jsonString)
    console.log(personObj);
    let myName = personObj.name;
    let age = personObj.age;
    console.log(myName);
    console.log(age);

}

//* Array as JSON
//যদি JSON একটি Array হয় তাহলে JSON.parse() করার পর আমরা একটা array পাব।  
{
    const jsonString = '["Ford", "BMW", "Audi", "Fiat"]';
    console.log(jsonString);
    const myArr = JSON.parse(jsonString);
    console.log(myArr);
    console.log(myArr[1]);
}

//? Exceptions
//* Parsing Dates:
//আমরা জানি JSON এ Date object ব্যবহার করা যায় না বা Allow না। কিন্তু আমাদের date নিয়ে কাজ করতে হলে তখন কি করব? এক্ষেত্রে দুইটা solution আছে। একটা হচ্ছে আমরা date কে string এ লিখব তারপর এইটাকে JSON এ convert করব। এরপর যখন আমরা JSON.parse() করব তখন এই date টা নিয়ে Date Constructor এর মধ্যে দিয়ে date object এ convert করে নিব নিচের উদাহারণ এর মত।
{
    const jsonString = '{"name":"Shahidul Islam", "birth":"1986-12-14", "city":"Chittagong"}';
    const obj = JSON.parse(jsonString);
    console.log(obj);
    obj.birth = new Date(obj.birth);

    console.log(obj);
}

// আরেকটা solution হচ্ছে JSON.parse() এর second Parameter ব্যবহার করতে পারি। এটাকে বলা হয় riviver. এই parameter হচ্ছে একটা callback function যা value return করার আগে প্রতিটি property check করে থাকে। আর এর মধ্যে আমরা যেকোনো কিছু check করে value return করতে পারি নিচের উদাহারণ এর মত।
{
    const jsonString = '{"name":"Shahidul Islam", "birth":"1986-12-14", "city":"Chittagong"}';
    const obj = JSON.parse(jsonString, function (key, value) {
        if (key == "birth") {
            return new Date(value);
        } else {
            return value;
        }
    });

    console.log(obj);
}

//* Parsing Functions
//আমরা জানি function JSON এ Allow না। কিন্তু আমাদের যদি খুবই দরকার পরে JSON এর মধ্যে একটা function কে যুক্ত করতে তাহলে function কে অবশ্যই string এর মধ্যে লিখতে হবে। আমরা চাইলে এটাকে পরবর্তিতে function এ convert করে নিতে পারি নিচের উদাহারণ এর মত।
{
    const jsonString = '{"name":"Shahidul Islam", "age":"function () {return 30;}", "city":"Chittagong"}';
    const obj = JSON.parse(jsonString);
    console.log(obj.age);
    obj.age = eval("(" + obj.age + ")");
    console.log(obj);
}

//! Note: আমাদের অবশ্যই JSON এর মধ্যে function ব্যবহার avoid করা উচিত। কারণ এটা একটা bad practices এবং eval() function ব্যবহার করা হচ্ছে এখানে। আমরা জানি eval() function avoid করা আমাদের জন্য important । 