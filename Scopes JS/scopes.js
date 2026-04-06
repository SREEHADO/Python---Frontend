const value = 'Scopes of JavaScript';

function add(){
    console.log(value); 
}
add();
console.log(value); //global scope because the variable value is declared outside of any function, making it accessible throughout the entire code, including outside the add function.

function local(){
    let name = 'Local Scope';
    console.log(name); // local scope because the variable name is declared inside the local function, making it accessible only within that function.
}
local();
//console.log(name);//local scope

    if (true){
        let block = 'Im Restricted';
        console.log(block); // block scope because the variable block is declared inside the if statement, making it accessible only within that block of code.
        var a = 10;
        console.log(a * a);// block scope
    }

console.log(a - 5);// block scope
//console.log(block);can't


hoist();
function hoist(){
    console.log('Before Declaration Execute the Program');
}

//console.log(num);
//var number = 20;

function outer(){
    let closure = 'Remembering the Values';
    function inner(){
        console.log(closure); // closure scope because the inner function has access to the variables of its outer function, allowing it to remember and use the value of closure even after the outer function has finished executing.
    }
    inner();
}
outer();

