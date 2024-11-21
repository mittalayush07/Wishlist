let todoInput = document.querySelector(".input");
let todobuttonadd = document.querySelector(".button");
let showTodos = document.querySelector(".todos-container");
let todo;
let localData = JSON.parse(localStorage.getItem("todo"));
let todoList = localData || [];

function uuid(){
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(param){
        let number = Math.random()*16 | 0;
        let randomNumber = param == 'x'? number : (number & 0x3 | 0x8);
        return randomNumber.toString(16);
    })
}

todobuttonadd.addEventListener("click", (e)=>{
    e.preventDefault();
     todo = todoInput.value;
     if(todo){
        todoList.push({id: uuid(), todo: todo, isCompleted: false});
     }
     render(todoList);
     localStorage.setItem("todo", JSON.stringify(todoList));
     todoInput.value = "";

})
showTodos.addEventListener("click", (e)=>{
    let key = e.target.dataset.key;
    let delTodoKey = e.target.dataset.todokey;
    todoList = todoList.map(todo => todo.id === key ? {...todo, isCompleted: !todo.isCompleted} : todo);
    todoList = todoList.filter(todo => todo.id !== delTodoKey);
    localStorage.setItem("todo", JSON.stringify(todoList));
    render(todoList);
})

function render(todolist){
    showTodos.innerHTML = todolist.map(todo => `<div class="relative"><input class="t-checkbox t-pointer" id="item-${todo.id}" type="checkbox" data-key=${todo.id} ${todo.isCompleted ? "checked" : ""}> <label for="item-${todo.id}" class="todo todo-text t-pointer ${todo.isCompleted ? "checked-todo" : ""}" data-key=${todo.id}>${todo.todo}</label> <button class="absolute right-0 button cursor"> <span data-todokey=${todo.id} class="del-btn material-icons-outlined">delete</span></button></div>`);        
}
render(todoList);
