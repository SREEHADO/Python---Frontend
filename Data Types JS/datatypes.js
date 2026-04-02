let str = "dhanya12@gmail";
console.log(str)

let float = 3.14;
console.log(typeof(float))

let bool = true;
console.log(typeof(bool))

let bigInt = 1234567890123456789012345678901234567890n;
console.log(typeof(bigInt))

let a = 10n;
let b = 20n;
console.log(a+b); // cant mix bigInt and number

let symbol = Symbol("id");
let symbol_1 = Symbol("id");
console.log(symbol === symbol_1) // false because each symbol is unique

let string = String(35);
console.log(typeof(string));

let number = Number("123");
console.log(typeof(number))

let boolean = Boolean("true");
console.log(typeof(boolean))

let bigValue = BigInt("1234567890123456789012345678901234567890");
console.log(typeof(bigValue))

console.log(typeof(symbol))

let value = new Array(1, 2, 3);
console.log(typeof(value)) // 

let fruits = ["apple", "banana", "cherry"];
console.log(typeof(fruits)) // object

let student = {
    name: "mani kumar",
    age: 22,
    skills: ["javascript", "python", "java"] 
}
console.log(typeof(student))    // object
console.log(student) 

let result = 25 * "5";
console.log(result) // NaN (Not a Number) because we cannot multiply a number with a string that cannot be converted to a number.

let result_1 = 5 * Number("5");
console.log(result_1) // 25 because we converted the string "5" to a number using Number() function before multiplying.

let value_1 = 10 + + "20";
console.log(value_1) // 30 because the unary plus operator (+) converts the string "20" to a number before performing the addition.

let code = 20 - - "25";
console.log(code); // "2025" because when you add a number and a string, the number is converted to a string and concatenated with the other string.






