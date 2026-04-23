let root = document.getElementById("root");

let app = document.createElement("div");
app.id = "app";
root.appendChild(app);

let h1 = document.createElement("h1");
h1.innerText = "Todo Application";
h1.className = 'todo-heading';
app.appendChild(h1);

let inputBox = document.createElement("div");
app.appendChild(inputBox);
inputBox.className = 'input-container';

let input = document.createElement("input");
input.placeholder = "Enter Your Task";
inputBox.appendChild(input);

let add = document.createElement("button");
add.innerText = "Add";
inputBox.appendChild(add);

add.addEventListener("click",()=>{
    if(input.value === ""){
        alert("Please Enter Task");
    return
    }

    let todoObj = {
        text : input.value,
        completed : false
    }

    createTodo(todoObj);
    input.value = "";
})

let ul = document.createElement("ul");

function createTodo(todo){
    let li = document.createElement("li");
    let span = document.createElement("span");

    span.innerText = todo.text;

    let actions = document.createElement("div");
    actions.className = 'actions';

    let complete = document.createElement("button");
    complete.className = 'done-btn';
    complete.innerText = "Done";

    complete.addEventListener("click",()=>{
        todo.completed = !todo.completed;
        console.log(todo.completed)
        span.classList.toggle('completed');
    })

    let edit = document.createElement("button");
    edit.className = 'edit-btn';
    edit.innerText = "Edit";

    edit.addEventListener("click",()=>{
        let newValue = prompt('Edit Task', todo.text);
        if(newValue !== "" && newValue !== null){
            todo.text = newValue;
            span.innerText = newValue;
        }
    })

    let del = document.createElement("button");
    del.className = 'delete-btn';
    del.innerText = "Delete";

    del.addEventListener("click",()=>{
        ul.removeChild(li);
    })
    
    li.appendChild(span);

    actions.appendChild(complete);
    actions.appendChild(edit);
    actions.appendChild(del);

    li.appendChild(actions);
    ul.appendChild(li);
    app.appendChild(ul);
}