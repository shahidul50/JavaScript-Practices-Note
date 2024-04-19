//আমরা Callback এবং Asynchronous Behavior সম্পর্কে জেনেছি। এখন এগুলো ব্যবহার করে আমরা একটা example দেখব:  

const paymentSuccessful = true;
const marks = 80;

function enroll(callback){
    console.log('Course enrollment is in progress.');
    setTimeout(function(){
       if(paymentSuccessful){
           callback();
       }else{
          console.log('Payment failed!!');
       }
    },2000)

}

function progress(callback){
    console.log('Course on progress...');
    setTimeout(function(){
       if(marks >= 80){
           callback();
       }else{
          console.log('You could not enough marks to get the certificate.');
       }
    },5000)
}

function getCertificate(){
     console.log('Preparing your certificate.');
     setTimeout(function(){
         console.log("Congrats! You got the certificate");
     },1000)
}


enroll(function(){
    progress(getCertificate);
})

// এখানে আমরা course enroll করার কাজটাকে আমরা তিনটা function এ ভাগ করে নিয়েছি। enroll function payment successful আছে কিনা সেটা check করবে। check করার পরে যদি payment successful true হয়ে থাকে তাহলে দুই second পর এই function, progress function কে call করে দিবে। কারণ progress function টা enroll function এ callback হিসেবে received করা হয়েছে। এরপর progress function mark check করে যদি true পেয়ে থাকে তাহলে পাঁচ second পর getCertificate function কে call করে দিবে। কারণ এটাকেও callback function হিসেবে received করার হয়েছে। এরপরে এক second পর getCertificate function টা execute হয়ে সম্পূর্ণ কাজটা Complete হয়ে যাবে। এইভাবে আমরা চাইলে callback function ব্যবহার করে Sequence টা control করতে পারি। কিন্তু এখানেও একটা Problem আছে। সেটা হচ্ছে আমাদের function যদি আর বেশি হত সেই ক্ষেত্রে কিন্তু callback এর ভিতরে callback, callback এর ভিতরে callback এইভাবে অনেক জটিল হয়ে যেত। এটাকে Javascript এর ভাষায় বলা হয় callback hell । এই সমস্যা থেকে বাঁচার জন্য আমরা পরবর্তিতে আরেকটা topic সম্পর্কে জানব। সেটা হচ্ছে Promise । Promise এর মধ্যে এই কাজটাকে আমরা সুন্দরভাবে control করতে পারি। Promise নিয়ে আমরা পরের অধ্যায়ে জানব। 