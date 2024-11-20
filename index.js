let todoInput = document.querySelector(".input");
let todobuttonadd = document.querySelector(".button");
let todo;
let todoList = [];

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
     console.log(todoList);
     console.log(todoList.todo);

})
