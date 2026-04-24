// Template Literals in JavaScript
// Template literals are a powerful feature in JavaScript that allow you to create strings with embedded expressions and multi-line strings. They are enclosed by backticks (``) instead of single or double quotes.

let a = 10;
let b = 20;
console.log("The sum of" , a , "and" , b , "is" , a+b);

const name = "John";
const age = 30;
console.log(`My name is ${name} and I am ${age} years old.`);

const text = `
First line
    Second line
        Third line
            Fourth line`;
console.log(text);

const c = 20;
const d = 30;
console.log(`The sum of ${c} and ${d} is ${c + d}.`);

const student = {
    name: 'Sree Harsha',
    age: 22,
    course: 'Information Technology',
    skills : 'Full Stack Developer',
    details: {
        address : 'JNTU',
        district : 'Hyderabad',
        state : 'Telangana',
        role : 'gentle man',
        marrital_Status : 'single'
    }
};

const{name: student_name, age: student_age, course: student_course, skills: student_skills} = student;
console.log(student_name);
console.log(student_age);
console.log(student_course);
console.log(student_skills);
const{details: {address, district, state, role, marrital_Status}} = student;
console.log(address);
console.log(district);
console.log(state);
console.log(role);
console.log(marrital_Status);

const arr_1 = [1, 2, 3, 4, 5];
const arr_2 = [6, 7, 8, 9, 10];
console.log([...arr_1, ...arr_2]);

// The spread operator (...) is used to expand the elements of an array or object. In the example above, we are using the spread operator to combine two arrays (arr_1 and arr_2) into a single array. The resulting array will contain all the elements from both arrays in the order they were defined.
const arr_3 = [1, 2, 3, 4, 5, 2, 5, 7, 9]; 
const arr_4 = [6, 7, 8, 9, 10, 11, 45, 23, 45];
console.log([...arr_1, ...arr_2]);
console.log([...new Set([...arr_1, ...arr_2])]);
// In the second console.log statement, we are using the Set object to remove duplicate values from the combined array. The Set object only allows unique values, so it will automatically filter out any duplicates. By spreading the combined array into a new Set and then back into an array, we can create a new array that contains only unique values from both arrays.

// Rest parameters in JavaScript allow you to represent an indefinite number of arguments as an array. This is useful when you want to create a function that can accept any number of arguments without having to specify them individually.
function add(...args){
    return args
}
console.log(add(10, 20, 30, 40, 50)); // This will return an array containing all the arguments passed to the function.