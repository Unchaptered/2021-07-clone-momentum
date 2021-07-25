const toDoForm=document.getElementById("todo-form");
const toDoInput=document.querySelector("#todo-form input");
const toDoList=document.getElementById("todo-list");
toDoForm.addEventListener("submit", handleToDoSubmit);
const toDos=[];
const TODOS_KEY="todos";
const savedToDos=localStorage.getItem(TODOS_KEY);

function handleToDoSubmit(event){
    event.preventDefault();
    const newToDo=toDoInput.value;
    toDoInput.value="";
    toDos.push(newToDo);
    paintToDo(newToDo);
    saveToDo();
}

function paintToDo(newToDo){
    const li=document.createElement("li");
    const span=document.createElement("span");
    const button=document.createElement("button");
    span.innerHTML=newToDo;
    button.innerHTML="❌";
    button.addEventListener("click", deleteToDo);
    
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li); 
}

function  deleteToDo(event){
    event.preventDefault();
    const li=event.target.parentElement;
    li.remove();
}

function saveToDo(event){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}

console.log(savedToDos);
if(savedToDos !==null){
    const parseToDos=JSON.parse(savedToDos);
    console.log(parseToDos);
    parseToDos.forEach((item) => console.log("this is the turn of ", item));
}
