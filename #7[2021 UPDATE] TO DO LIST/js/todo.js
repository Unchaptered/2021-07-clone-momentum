const toDoForm=document.getElementById("todo-form");
const toDoInput=document.querySelector("#todo-form input");
const toDoList=document.getElementById("todo-list");
toDoForm.addEventListener("submit", handleToDoSubmit);

function handleToDoSubmit(event){
    event.preventDefault();
    const newToDo=toDoInput.value;
    toDoInput.value="";
    paintToDo(newToDo);
}

function paintToDo(newToDo){
    const li=document.createElement("li");
    const span=document.createElement("span");
    const button=document.createElement("button");
    span.innerHTML=newToDo;
    button.innerHTML="❌";
    button.addEventListener("click", deleteToDO);
    
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}
function  deleteToDO(event){
    event.preventDefault();
    const li=event.target.parentElement;
    li.remove();
}

