let fruits=['Apple','Banana','Cherry','Grapes','Berry']; //creating array
console.log(fruits);
let values = new Array('Dhanya sri');
console.log(typeof(values));

// let num=new Array[10,20,30,40,50];

console.log(fruits[2]);//read
console.log(fruits.slice(2,5));//read specific portion of start index and end index
console.log(fruits[fruits.length -1]);//last element
console.log(fruits.at(-1));//advance js
console.log(fruits.slice(2,6));

fruits.push('Pear','Water melon');
console.log(fruits);
console.log(fruits);
fruits[1]='Guava';
fruits.pop();
console.log(fruits);//del at end
fruits.unshift('Strawberry','Avacado');//add at begining
console.log(fruits);
fruits.shift();//del at end
console.log(fruits,'shift');
fruits.splice(2,3);// specific portion del
console.log(fruits);

fruits.splice(2,0,"Pineapple");//specific portion add index no of elements
console.log(fruits);

for (let values of fruits){ //value iteration
    console.log(values)
}

for(let index in fruits){ //index iteration
    console.log(index,':',fruits[index])
}

console.log(fruits.slice(-1));