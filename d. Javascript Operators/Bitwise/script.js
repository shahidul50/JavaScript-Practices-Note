//And(&) Operator:
let a = 5
let b = 1

console.log(a&b);
// 00000101
// 00000001
// --------
// 00000001  => 1

//OR(|) Operator:
console.log(a|b);
// 00000101
// 00000001
// --------
// 00000101  => 5

//NOT(~) Operator:
console.log(~a);
// 00000101  => 2s Complement 11111010 => -6
console.log(~b);
// 00000001  => 2s Complement 11111110 => -2


//XOR(^) Operator:
console.log(a^b);
// 00000101
// 00000001
// --------
// 00000100  => 4

//left shift(<<) Operator: This is a zero fill left shift. One or more zero bits are pushed in from the right, and the leftmost bits fall off.
console.log(a<<1);
// 00000101
// --------
// 00001010  => 10

//right shift(>>) Operator:
console.log(a>>1);
// 00000101
// --------
// 00000010  => 2

//unsigned right shift(>>>) Operator:
console.log(a>>>1);
// 00000101
// --------
// 00000010  => 2