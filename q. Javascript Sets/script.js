//* JavaScript Sets: Set হচ্ছে Collection of Unique Values. অর্থাৎ Set এর মধ্যে কোন duplicate Value থাকবে না।
//Set Properties:  size
/**
 * Set Methods:
 *   new Set()
 *   add()
 *   delete()
 *   has()
 *   forEach()
 *   values()
 */

//* The New Set() Method:
// আমরা new Set() constructor এর মধ্যে একটা Array Pass করে Set তৈরি করতে পারি। 
{
    // Create a Set
    const letters = new Set(["a", "b", "c"]);
    console.log(letters);
}

//* The add() Method:
//এই Method এর মাধ্যমে আমরা চাইলে Set এর মধ্যে values বা Variables Add করতে পারি। 
//? Create a Set and add values:
{
    // Create a Set
    const letters = new Set();

    // Add Values to the Set
    letters.add("a");
    letters.add("b");
    letters.add("c");
    console.log(letters);
}
//? Create a Set and add variables:
{
    // Create a Set
    const letters = new Set();

    // Create Variables
    const a = "a";
    const b = "b";
    const c = "c";

    // Add Variables to the Set
    letters.add(a);
    letters.add(b);
    letters.add(c);
    console.log(letters);
}
// আমরা যদি same elements বার বার add করতে চাই তাহলে সেটা শুধু একবার Saved হবে। 
{
    // Create a Set
    const letters = new Set();

    // Add Variables to the Set
    letters.add("a");
    letters.add("b");
    letters.add("c");
    letters.add("c");
    letters.add("a");

    console.log(letters);
}

//* The delete() Method:
// এই Method এর মাধ্যমে আমরা Set এর মধ্যে থাকা কোন Element remove করে দিতে পারি। এই Method return value হিসেবে Boolean true/false দিয়ে থাকে। 
{
    const letters = new Set(['a','b','c','d'])
    console.log(letters);
    const result = letters.delete('c');
    console.log(result);
    console.log(letters);

    const result1 = letters.delete('c');
    console.log(result1);
    console.log(letters);
}

//* The has() method:
// এই Method এর মাধ্যমে আমরা Set এর মধ্যে Element টি আছে কিনা দেখতে পারি। এই Method return value হিসেবে Boolean true/false দিয়ে থাকে। 
{
    const letters = new Set(['a','b','c','d'])
    console.log(letters);
    const result = letters.has('c');
    console.log(result);

    const result1 = letters.has('e');
    console.log(result1);
}

//* The forEach() method:
// forEach() Method প্রতিটি Set Element এর জন্য একটি Function call করে থাকে। 
{
    const letters = new Set(['a','b','c','d'])
    let result = ""
    letters.forEach(function(value){
        result += value;
    })
    console.log(result);

    const result1 = letters.has('e');
    console.log(result1);
}

//* The values() method:
// এই Method একটি Set এর সমস্ত value ধারণকারী একটি নতুন Iterator object প্রদান করে থাকে। যেটার মাধ্যমে আমরা এটাকে Array তে রুপান্তর করে Array এর সকল Method and properties সেখানে ব্যবহার করতে পারি। 
{
    const letters = new Set(['a','b','c','d'])
    console.log(letters);
    const iterator = letters.values();
    const arr = Array.from(iterator)
    console.log(letters.length) 
    console.log(arr.length) 

}

//* The size Property:
// এই Property এর মাধ্যমে আমরা Set এর মধ্যে থাকা Element এর সংখ্যা জানতে পারি। 
{
    const letters = new Set(['a','b','c','d'])
    const result = letters.size;
    console.log(result);

}