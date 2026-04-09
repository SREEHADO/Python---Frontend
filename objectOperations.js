const employeeData={
    name: "JOHN LEE",
    age:28,
    department:"React Developer Engineer",
    details:{
        salary:50000,
        experience:5,
        monthly:'90 k per month',
        savings:'35 k'
    },
    address:[{
        place:'Guntur',
        street:'NTR colony',
        house_no:'0902'
    }]
}
console.log(employeeData);
console.log(employeeData.name);
console.log(employeeData.details.salary);
console.log(employeeData.address[0].place);

employeeData.details.salary=60000;


employeeData.address[0].place='Hyderabad';
console.log(employeeData.address[0].place);

console.log(employeeData);

delete employeeData.name;
delete employeeData.details.salary;
delete employeeData.address[0].house_no;

console.log(employeeData);

console.log(Object.keys(employeeData));
console.log(Object.values(employeeData));
console.log(Object.values(employeeData.details));
console.log(Object.hasOwn(employeeData.address[0]));

console.log(Object.entries(employeeData));
console.log("age" in employeeData);

let student = {
    name: 'Rahul',
    skills: 'Python Full Stack Development',
    batch: 'PFS',
    batch_name: 'PFS-42&44',
    branch_name: 'Vasanth Nagar',
    greet: function (){
        console.log('Welcome To Codegnan Your Branch is', this.branch_name)
    }

}
function assign(){
    console.log('Frontend Assigned Batches', this.batch_name);
}
console.log(student);
//console.log.call(this.batch_name, "Global");
student.greet();

assign.apply(student);
assign.call(student);
let result = assign.bind(student);
result();


let obj = {
    a:1,
    b:2,
    sum(){
        return this.a + this.b
    }
}

// console.log(obj.sum())
const boundSum = obj.sum.bind(obj);
console.log(boundSum())

let product1 = [
  {
    item_1: 'clothes',
    price: '500',
    type: 'linen'
  },
  {
    item_2: 'electronics',
    price: '1000',
    type: 'mobile'
  },
  {
    item_3: 'furniture',
    price: '2000',
    type: 'table'
  }
];

console.log(product1);

