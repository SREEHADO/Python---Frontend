const product = {
    name: "Laptop",
    price: 999.99,
    brand: "TechBrand",
    details: {
        color: "Silver",
        weight: "1.5kg"
    }
};
console.log(product.name);
console.log(product["price"]);
console.log(product.details.color);
console.log(product.details.weight);

const employeeData = {
    name: "John Doe",
    age: 30,
    position: "Software Engineer", 
    details: {
        salary: '12 LPA',
        expenses: '2 LPA',
        monthly : '90 k per month',
        saving : '10 k per month'

    },
    address : [{
        street: "123 Main St",
        city: "Anytown",
        state: "CA",
        zip: "12345"
    }]
};

console.log(employeeData.name);
console.log(employeeData.age);
console.log(employeeData.position);
console.log(employeeData.details.salary);
console.log(employeeData.details.expenses);
console.log(employeeData.details.monthly);
console.log(employeeData.details.saving);
console.log(employeeData.address[0].street);
console.log(employeeData.address[0].city);
console.log(employeeData.address[0].state);
console.log(employeeData.address[0].zip);

employeeData.position = "Senior Software Engineer";
console.log(employeeData.position);
employeeData.details.salary = '15 LPA';
console.log(employeeData.details.salary);

employeeData.address[0].street = "456 Elm St";
employeeData.address[0].city = "Othertown";
console.log(employeeData.address[0].street);

delete employeeData.details.expenses;
console.log(employeeData);
delete employeeData.address[0].zip;
console.log(employeeData);

console.log(Object.keys(employeeData));
console.log(Object.values(employeeData));
console.log(Object.values(employeeData.details));
console.log(Object.values(employeeData.address[0]));

let student = {
    skills : 'pyhton full stack developer',
    batch : 'PFS',
    batch_name : 'vasanth nagar',
    greet : function (){
        console.log('welcome to codegnan your branch is', this.branch_name)

    } 
}
function assign(){
    console.log('front end assigned batches', this.batch_name)
}
console.log(student);
//student.log.call(this.batch_name, "Global"):
student.greet();
assign.apply(student);
assign.call(student);


let obj ={
    a : 1,
    b : 2,
    sum(){
        return this.a + this.b
    }
}
const result = obj.sum.bind(obj);
console.log(result())

//bind 
let products = [
    {
        item_1 : 'clothes',
        price : '90,000',
        type : 'lenin'
    },
    {
        item_2 : 'electronics',
        price : '1,20,000',
        type : 'monitors'
    },
    {
        item_3 : 'furniture',
        price : '60,000',
        type : 'plywood' 

        }
]
console.log(products);


for (let index in employeeData) {
    console.log(index, employeeData[index]);
}