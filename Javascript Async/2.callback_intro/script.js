//* JavaScript Callbacks:  "I will call back later!"
// Callback হচ্ছে একটি Technique যা একটি function কে Another function এর argument হিসেবে পাঠানো হয় এবং সেই Another function থেকেই এটাকে Call করা হয়।


//* Wy use a Callback?
// আমরা Javascript এর Asynchronous Behavior সম্পর্কে জানি। Normal ই Javascript Code Synchronous Behavior করলেও কিছু কিছু ক্ষেত্রে Asynchronous Behavior করে থাকে। যেমন, নিচের example টিতে Asynchronous Behavior এর জন্য পরেরটা আগে, আর আগেরটা পরে দেখাবে। 
//Example: 
{
    function getData() {
        setTimeout(function(){
            console.log('A function that takes some time');
        },3000)
    }

    function showData() {
        console.log('Another Function');
    }

    getData();
    showData();
}

//এখন এটার জন্য আমাদের কি সমস্যা হতে পারে সেটা আমরা জানি। যদি আমরা কোন remote server থেকে data এনে দেখাতে চাই তাহলে, Javascript এর Asynchronous Behavior এর জন্য Data Remote Server থেকে আসার আগেই Data দেখানোর Operation এ চলে যাবে। Remote Server থেকে Data আসতে সময় লাগতে পারে সেজন্য পরের Line এ চলে গেলে আমরা কোন Data পাব না অর্থাৎ আমরা যেইরকম Output দেখতে চাইছিলাম সেইরকম Output দেখতে পাব না। এছাড়া এটার কারণে অনেক সময় Error ও আসতে পারে। আর এই সমস্যা সমাধান করতে আমরা callback Technique এর Help নিতে পারি। Callback এ যেহেতু একটা function, Another function এর মধ্যে পাঠিয়ে দিতে পারছি এবং Another function ই সেই function কে call করবে, সেহেতু callback এর মাধ্যমে আমরা কাজটা খুব সহজেই করতে পারব। নিচের উদাহারণটা দেখলেই আমরা বুঝতে পারব। 
//Example: 
{
    function getData(callback) {
        let data = "";
        setTimeout(function(){
            data = 'Get Data from remote server';
            callback(data);
        },3000)
    }

    function showData(data) {
        console.log(data);
    }

    getData(showData);
}

// এখানে getData function এর মধ্যে আমরা showData function টা callback হিসেবে পাঠিয়ে দিয়েছি। এই showData function তখনই call হবে যখন remote server থেকে data চলে আসবে। সুতরাং আর data না পাওয়ার কোন জামেলা এখানে নেই। অর্থাৎ Data না আসার আগে showData function call হবে না। 

// উপরের example এ showData হচ্ছে callback function কারণ এটা getData function এর argument হিসেবে passed করা হয়েছে। তবে মনে রাখতে হবে function এর agrument হিসেবে pass করার সময় paraenthesis ব্যবহার করা যাবে না। যেমন:
//* Right: getData(showData);
//! Wrong: getData(showData());