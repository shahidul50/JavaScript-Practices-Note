// Comparison Operators
//* (equal to) comparison operator:
{
    let a;
    a = 8 == 8;
    console.log(a);

    let b;
    b = 5 == 8;
    console.log(b);

    let c;
    c = '80' == 80;
    console.log(c);
}

//* (equal to and equal type) comparison operator:
{
    let d;
    d = '80' === 80;
    console.log(d);

    //not equal comparison operator:
    let e;
    e = 80 != 80;
    console.log(e);

    let f;
    f = 8 != 80;
    console.log(f);

    //not equal value or not equal type comparison operator:
    let g;
    g = '80' !== 80;
    console.log(g);
}

//* (greater than) comparison operator:
{
    let num1 = 20;
    let num2 = 30;
    let result = num1 > num2;
    console.log(result);
}

//* (less than) comparison operator:
{
    let num1 = 20;
    let num2 = 30;
    let result = num1 < num2;
    console.log(result);
}

//* (greater than or equal to) comparison operator:
{
    let num1 = 29;
    let num2 = 30;
    let result = num1 >= num2;
    console.log(result);
}

//* (less than or equal to) comparison operator:
{
    let num1 = 30;
    let num2 = 30;
    let result = num1 <= num2;
    console.log(result);
}


//* The Nullish Coalescing Operator (??)
//এই Operator return করে first argument কে যদি এটা nullish(null or undefined) না হয়ে থাকে। অন্যথায় এটা second argument কে return করে থাকে। 
{
    let name = null;
    let text = "missing";
    let result = name ?? text;
    console.log(result);
}

//* The Optional Chaining Operator (?.)
// এই Operator যদি কোন Object undefined বা null হয়ে থাকে, সেক্ষেত্রে কোন error throw করার পরিবর্তে undefined return করে থাকে। 
{
    // Create an object:
    const car = { type: "Fiat", model: "500", color: "white" };
    // Ask for car name:
    console.log(car?.name);
}