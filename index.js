let todoInput = document.querySelector(".input");
let todobuttonadd = document.querySelector(".button");
let todo;
let todoList = [];
let showTodos = document.querySelector(".todos-container");

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

})

function render(todolist){
    showTodos.innerHTML = todolist.map(todo => `<div><input id="item-${todo.id}" type="checkbox" data-key=${todo.id}> <label for="item-${todo.id}" class="todo" data-key=${todo.id}>${todo.todo}</label> <button>delete</button></div>`);        
}
render(todoList);
