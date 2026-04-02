let and = true && false;
console.log(and); // false because both operands need to be true for the result to be true.

let or = true || false;
console.log(or); // true because at least one operand is true.

let not = !true;
console.log(not); // false because the NOT operator negates the value of true.

let result = 6 * 2 !== 12 && 8 + 8 == "18" || 9 * 9 !== "81";
console.log(result) // false because 6 * 2 is equal to 12, 8 + 8 is not equal to "18" and 9 * 9 is equal to "81".

let result_2 = 5 + 5 == "10" && 6 * 4 === "24" || 7 * 2 !== "14";
console.log(result_2) // true because 5 + 5 is equal to "10", 6 * 4 is not strictly equal to "24" and 7 * 2 is not equal to "14".









