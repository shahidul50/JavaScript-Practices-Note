// এখন আমরা Promise কিভাবে তৈরি করতে হয়, কিভাবে Handle করতে হয় সে সম্পর্কে জানি। এখন callback এর example টাকে Promise দিয়ে কিভাবে handle করতে পারি সেটা দেখব। 

const paymentSuccessful = true;
const marks = 70;

function enroll() {
    console.log('Course enrollment is in progress.');
    const promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (paymentSuccessful) {
                resolve();
            } else {
                reject('Payment failed!!');
            }
        }, 2000)
    })
    return promise;
}

function progress() {
    console.log('Course on progress...');
   const promise = new Promise(function(resolve,reject){
    setTimeout(function () {
        if (marks >= 80) {
            resolve();
        } else {
            reject('You could not enough marks to get the certificate.');
        }
    }, 5000)
   })
   return promise;
}

function getCertificate() {
    console.log('Preparing your certificate.');
    const promise = Promise.resolve("Congrats! You got the certificate");
    return promise;
}

enroll()
    .then(progress)
    .then(getCertificate)
    .then(function(value){
        console.log(value);
    })
    .catch(function(err){
        console.log(err);
    })

//এখানে আমরা প্রতিটি Promise শেষ হওয়ার পর পরবর্তী Promise check করার জন্য .then() chain এর মাধ্যমে বাকি Promise গুলোকে Add করেছি। এখানে প্রথমে progress Promise resolved হলে তারপর getCertificate Promise run হবে। এরপর getCertificate Promise থেকে যেহেতু data পাব, তাই callback function এর মাধ্যমে আমরা সেই Data টা received করলাম। এখন আমাদের code আগের থেকে অনেকটা better মনে হচ্ছে। কিন্তু এখানেও একটা problem আছে সেটা হচ্ছে যদি বেশি chain করার লাগে তাহলে আমাদের এই code টাও বুঝতে বা Manage করা অনেক জটিল হয়ে যাবে। তাই Javascript আমাদের কাজ আরেকটু সহজ করার জন্য পরবর্তীতে async এবং await দুইটা keyword এর সাথে পরিচয় করিয়ে দেয়। এই keyword দুইটার মাধ্যমে আমরা Asynchronous কাজগুলো খুব সহজেই করতে পারি। এটা নিয়ে পরবর্তীতে আলোচনা করা হবে।  