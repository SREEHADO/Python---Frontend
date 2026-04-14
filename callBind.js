//IMPORTANT for interview questions.
function add(){
    console.log(this.name, this.age);
}
const data_1 ={
    name:'Harsha',
    age: 22
}
const data_2 ={
    name:'Dhanush',
    age: 23
}
const data_3 ={
    name:'Subhash',
    age: 23
}
const data_4 ={
    name:'Abhinov',
    age: 24
}
add.apply(data_1);
add.call(data_1);
add.call(data_2);
add.call(data_3);
add.bind(data_4)(); //bind returns a new function with the specified this value, so we need to invoke it with () to see the output.

// var is function scoped and let and const are block scoped. var can be re-declared and updated, while let can be updated but not re-declared, and const cannot be updated or re-declared.
// clousure is a function that has access to its own scope, the outer function's scope, and the global scope. It allows a function to access variables from an enclosing scope even after it leaves the scope in which it was declared. This is useful for data privacy and creating functions with persistent state.
// hoisting is a JavaScript mechanism where variable and function declarations are moved to the top of their containing scope during the compilation phase. This means that you can use variables and functions before they are declared in the code. However, only the declarations are hoisted, not the initializations. For example, if you declare a variable with var, it will be hoisted and initialized with undefined, while let and const declarations are hoisted but not initialized, resulting in a ReferenceError if accessed before declaration.
// The main difference between var, let, and const is their scope and mutability. Var is function-scoped and can be re-declared and updated, while let is block-scoped and can be updated but not re-declared, and const is block-scoped and cannot be updated or re-declared. Additionally, var declarations are hoisted and initialized with undefined, while let and const declarations are hoisted but not initialized, resulting in a ReferenceError if accessed before declaration.