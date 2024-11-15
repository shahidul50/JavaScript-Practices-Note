//* JavaScript Map: একটি Map key-value pairs data hold করে থাকে যেখানে keys যেকোন datatype হতে পারে। এছাড়া Map, Keys এর Orginal insertion order মনে রাখে। 
//Map এর Method গুলো হলঃ 
/**
 *  new Map()
 *  set()
 *  get()
 *  delete()
 *  has()
 *  forEach()
 *  entries()
 *  clear()
 */

// Maps property:  size

//* The new Map() Method
// আমরা new Map() constructor এর মধ্যে একটা Array Pass করে Map তৈরি করতে পারি। 
{
    // Create a Map
    const fruits = new Map([
        ["apples", 500],
        ["bananas", 300],
        ["oranges", 200]
    ]);
    console.log(fruits);
}

//* The set() Method: 
// এই Method এর মাধ্যমে আমরা Map এর মধ্যে Elements add করতে পারি। 
{
    // Create a Map
    const fruits = new Map();

    // Set Map Values
    fruits.set("apples", 500);
    fruits.set("bananas", 300);
    fruits.set("oranges", 200);

    console.log(fruits);

    //এছাড়া এই Method existing Map Values কে change করতে পারে। 
    fruits.set('apples', 200)
    console.log(fruits);
}

//* The get() Method
// এই Method এর মাধ্যমে আমরা Map এর ভিতর থেকে key এর মাধ্যমে Value কে Access করতে পারি। 
{
    // Create a Map
    const fruits = new Map();

    // Set Map Values
    fruits.set("apples", 500);
    fruits.set("bananas", 300);
    fruits.set("oranges", 200);

    console.log(fruits.get('bananas'));
}

//* The delete() Method
// এই Method এর মাধ্যমে আমরা Map এর মধ্যে থাকা কোন Element remove করে দিতে পারি। এই Method return value হিসেবে Boolean true/false দিয়ে থাকে। 
{
    // Create a Map
    const fruits = new Map();

    // Set Map Values
    fruits.set("apples", 500);
    fruits.set("bananas", 300);
    fruits.set("oranges", 200);

    console.log(fruits);
    console.log(fruits.delete('bananas'));
    console.log(fruits.delete('bananas'));
    console.log(fruits);
}

//* The has() Method
// এই Method এর মাধ্যমে আমরা Map এর মধ্যে Element টি exixts করে কিনা দেখতে পারি। এই Method return value হিসেবে Boolean true/false দিয়ে থাকে। 
{
    // Create a Map
    const fruits = new Map();

    // Set Map Values
    fruits.set("apples", 500);
    fruits.set("bananas", 300);
    fruits.set("oranges", 200);

    console.log(fruits.has('oranges'));

}

//* The forEach() Method
// forEach() Method প্রতিটি Map Element এর জন্য key/value pair এর একটি Function call করে থাকে। 
{
    // Create a Map
    const fruits = new Map();

    // Set Map Values
    fruits.set("apples", 500);
    fruits.set("bananas", 300);
    fruits.set("oranges", 200);

    // List all entries
    let text = "";
    fruits.forEach(function (value, key) {
        text += key + ' = ' + value + ', ';
    })
    console.log(text);
}

//* The entries() Method
//entries() method একটি Map এর [key, values] সহ একটি iterator object  প্রদান করে। 
{
    const fruits = new Map([
        ['apples', 500],
        ['bananas', 300],
        ['oranges', 200],
    ]);

    let text = ""
    for (const x of fruits.entries()) {
        text += x + ',';
    }
    console.log(text);
}

//* The clear() Method
//এই Method এর মাধ্যমে আমরা Map এর সকল Element কে একসাথে Remove করে দিতে পারি।
{
    const fruits = new Map([
        ['apples', 500],
        ['bananas', 300],
        ['oranges', 200],
    ]);
    console.log(fruits);
    fruits.clear();
    console.log(fruits);
}

//* The size Property
// এই Property এর মাধ্যমে আমরা Map এর মধ্যে থাকা Element এর সংখ্যা জানতে পারি। 
{
    const fruits = new Map([
        ['apples', 500],
        ['bananas', 300],
        ['oranges', 200],
    ]);
    const result = fruits.size;
    console.log(result);
}

//* Javascript Object vs Map
//? Object
/**
 * Directly iterable করা যায় না। 
 * এটাতে কোন size property নেই।
 * keys অবশ্যই String (বা Symbol) হতে হবে।
 * keys গুলো ভালভাবে সাজানো থাকে না। 
 * default keys থাকে। 
 */
//? Map
/**
 * Directly iterable করা যায়। 
 * এটাতে size property আছে।
 * keys যেকোন datatype হতে পারে।
 * keys গুলো ভালভাবে insertion অনুসারে সাজানো থাকে। 
 * default keys থাকে না।
 */