function greet(){
    console.log("Hello World")
}
greet() // Hello World because the function greet is called, which executes the console.log statement inside the function, printing "Hello World" to the console.

let sum = function add(){
    console.log('the sum of 10 & 20 is', 10 + 20);
}
sum() // the sum of 10 & 20 is 30 because the function sum is called, which executes the console.log statement inside the function, printing "the sum of 10 & 20 is 30" to the console.


let product = function(){
    console.log('the product of 5 & 4 is', 5 * 4);

}

function param(a,b){
    console.log(a + b)
    console.log(a * b)
    console.log(a - b)
}

param(10, 5) // 15, 50, 5 because the function param is called with arguments 10 and 5, which executes the console.log statements inside the function, printing the sum, product, and difference of the two numbers to the console.