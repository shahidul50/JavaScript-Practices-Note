## Operator কি?
Operator হল এমন এক Symbol বা Code যা এক বা একাধিক Operand এর উপর কাজ করে এবং একটি নতুন মান তৈরি করে। তারা প্রয়োজনীয় Operation perform করে যাতে Data process করা যায়। 

## Javascript এ কত ধরণের Operator আছে? ও কি কি?
Javascript এ বিভিন্ন ধরণের operators আছে। যথাঃ
- Arithmetic Operators.
- Assignment Operators.
- Comparison Operators.
- String Operators.
- Logical Operators.
- Bitwise Operators.
- Ternary operator.
- Type Operators.
- Optional Chaining Operator.
- Nullish Coalescing Operator


### Arithmetic Operators:
- Addition(+)
- Subtraction(-)
- Multiplication(*)
- Division(/)
- Modulus(%)
- Exponentiation(**)
- Increment(++)
- Decrement(--)

### Assignment Operators:
- Equal Sign(=)      | x = 3
- Plus Equal(+=)     | x += 3 => x = x + 3
- Minus Equal(-=)    | x -= 3 => x = x - 3
- Mul Equal(*=)      | x *= 3 => x = x * 3
- Div Equal(/=)      | x /= 3 => x = x / 3
- Mod Equal(%=)      | x %= 3 => x = x % 3
- Expton Equal(**=)      | x **= 3 => x = x ** 3
- left shift Equal(<<=)      | x <<= y => x = x << y 
- right shift with zero(=>>)      | x =>> y => x = x >> y 

### Comparison Operators:
- Equal to(==)
- Equal Value and Equal Type(===)
- Not Equal(!=)
- Not Equal Value and Not Equal Type(!==)
- Greater Than(>)
- Less Than(<)
- Greater Than or Equal to(>=)
- less Than or Equal to(<=)

### String Operator:
- Concatenator(+)

### Logical Operators:
- AND(&)
- OR(|)
- NOT(~)
- XOR(^)
- left shift(<<)
- right shift(>>)
- unsigned right shift(>>>)

### Ternary Operator:
- Ternary(?)

### Type Operators:
- typeof  => Return the type of a variable.
- instanceof => Return true, if an Object is an instance of an Object type.

### Optional Chaining Operator:
- Optional Chaining(?.) => এই Operator টা মূলত undefined return করে থাকে। যখন কোন Object undefined অথবা null থাকে। Object এ কোন Data না থাকলে Program এ Error Throw করে থাকে। এই Error থেকে বাঁচতে এই Operator টি ব্যবহার করা হয়ে থাকে। 

### Nullish Coalescing Operator:
- Nullish Coalescing(??) => এই Operator টি প্রথম value কে return করে যদি না এটা nullish(null or undefined) না হয়। অন্যথায় এটা second value কে return করে থাকে। আমরা Program এ অনেকক্ষেত্রে Data আনার ক্ষেত্রে যদি Data আসে তাহলে Data দেখাব আর না আসলে অন্যকিছু দেখাব যাতে করে Data এর মান null বা undefined না হয়ে থাকে। এই ক্ষেত্রে আমরা এই operator টি ব্যবহার করে থাকি। নিচের উদাহারণে name যেহেতু null তাই result এ দ্বিতীয় value টি Assign হবে অর্থাৎ result = 'mising' Assign হবে। 
```
    let name = null;
    let text = "missing"
    let result = name ?? text;

```
