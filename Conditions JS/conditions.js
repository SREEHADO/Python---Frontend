let value=25;
let value_1=5;

if (value*value_1===125){
    console.log("True");
}
else if(value <= 25){
    console.log(value, 'is equal of 25');
}
else if(value >= value_1){
    console.log(value, 'is greater than of', value_1);
}
else{
    console.log("False");
}

let age = 18;
let result = age >= 18 ? "You are an adult." : "You are a minor.";
console.log(result); // Output: "You are an adult." because the condition age >= 18 is true.

let score = 95;
let marks_result = marks >= 90 ? 'A Grade' :
                    marks >= 80 ? 'B Grade' :
                    marks >= 70 ? 'C Grade' : 'Fail';
console.log(marks_result); // Output: "A Grade" because the condition marks >= 90 is true.

let day = 3;
switch(day){
    case 1:
        console.log("Monday");
    break;
    case 2:
        console.log("Tuesday");
    break;
    case 3:
        console.log("Wednesday");
    break;
    case 4:
        console.log("Thursday");
    break;
    case 5:
        console.log("Friday");
    break;
    case 6:
        console.log("Saturday");
    break;
    case 7:
        console.log("Sunday");
    break;
    default:
        console.log("Invalid day");
}

let ch = 'a';
switch(ch){
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
        console.log(ch, "is a vowel")
    break;
    default:
        console.log(ch, "is a consonant");
}

//ascii - A-Z 65-90, a-z 97-122 , 0-9 48-57;american standard code for information interchange

let ch2 = '*';
let ch_lower = ch2.toLowerCase();

switch(ch_lower){
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
        console.log(ch, "is a vowel")
    break;
    default:
        if(ch_lower >= 'a' && ch_lower <= 'z'){
            console.log("is a consonant");
        }
        else if(ch2 >= '0' && ch2 <= '9'){
            console.log("Numbers");
        }
                else{
                    console.log("Invalid Data");
                }
            }
        
