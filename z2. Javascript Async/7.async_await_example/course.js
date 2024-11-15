// এখন আমরা Promise এর Example টা Async এবং Await Keyword এর মাধ্যমে handle করব। 
const paymentSuccessful = true;
const marks = 80;

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
    const promise = new Promise(function (resolve, reject) {
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

async function course(){
      try {
        await enroll();
        await progress();
        const result = await getCertificate();
        console.log(result);
      } catch (error) {
        console.log(error);
      }
}
course()

//এখন আমাদের Code টা অনেকটা Simple হয়ে গেছে আগের Code থেকে এবং কোন Line কি হচ্ছে সেটা ভালভাবে বুঝা যাচ্ছে। এখন অনেক Promise একসাথে handle করতে হলেও আমরা সুন্দরভাবে handle করতে পারব।  
