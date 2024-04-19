//create a car object
const car = {
     name: 'Fait',
     model: 500,
     weight: '850kg',
     color: 'white',
     start: function(){
        console.log('Car is Start');
     },
     drive: function(){
        console.log('Car is Driving')
     },
     break: function(){
        console.log('Car is Breaking')
     },
     stop: function(){
        console.log('Car is Stop')
     },
}

//access object Property
console.log(car.model);
console.log(car['model']);

//access object method
car.start()
car.stop()

//create a person Object
const person = {
    firstName: 'Shahidul',
    lastName: 'Islam',
    age: 28,
    eyeColor: 'black',
    fullName: function(){
        return this.firstName + " " + this.lastName;
    }
}

// access person object
console.log(person.fullName());

//Avoid this Declaration
const x = new String('Shahid');        // Declares x as a String object
console.log(x);
const y = new Number(55);        // Declares y as a Number object
console.log(y);
const z = new Boolean(true);       // Declares z as a Boolean object
console.log(z);