//* JavaScript Async and Await
// আমরা Javascript এর callback এবং Promise সম্পর্কে জানি। Promise কিভাবে Handle করতে হয়, promise থেকে data পেতে কিভাবে callback ব্যবহার করতে হয় এইটা আমরা জানি। এইভাবে আমাদের কাজ করতে হচ্ছে শুধুমাত্র Javascript Asynchronous Behavior এর জন্য। Asynchronous Behavior না থাকলে কিন্তু আমরা line by line code লিখে সুন্দর করে কাজটা করে ফেলতে পারতাম। এখন আমরা যদি Asynchronous কাজটাকে এইভাবে করতে পারতাম যেখানে একটা function থাকবে, function এর ভিতরে একটা variable নিয়ে সেখানে promise থেকে data রাখব তারপর সেটা print করে দিব নিচের example এর মত:
// Example:
{
    function getData() {
        const data = aDemoPromise;
        // console.log(data);
    }
}

//এইভাবে হলে কিন্তু কাজটা অনেক সহজ হয়ে যেত। এইভাবে আমরা চাইলে কাজটা করতে পারব async এবং await keyword এর মাধ্যমে। async এবং  await keyword আমাদের promise কে সহজভাবে লিখতে সাহায্য করে। Async keyword একটা function কে promise হিসেবে return করে। Await Keyword একটা promise এর জন্য Wait করে থাকে। Async এবং Await অব্যশই একটা function এর মাধ্যমে ব্যবহার করতে হবে। Async keyword ব্যবহার করতে হবে কোন function এর আগে আর Await keyword ব্যবহার করতে পারব শুধুমাত্র async function এর ভিতরে। এখানে Promise এর Error handle এর জন্য try...catch ব্যবহার করা হয়। 
// Example:
{
    const aPromise = control => {
        return new Promise(function (resolve, reject) {
            setTimeout(() => {
                if (control) {
                    resolve('Your code is Resolved');
                } else {
                    reject('Your code is failed');
                }
            }, 2000)
        })
    }

    async function getData() {
        try {
            const data = await aPromise(true);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    getData();
}