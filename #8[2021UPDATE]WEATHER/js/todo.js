const toDoForm=document.getElementById("todo-form");
const toDoInput=document.querySelector("#todo-form input");
const toDoList=document.getElementById("todo-list");
toDoForm.addEventListener("submit", handleToDoSubmit);
let toDos=[];
const TODOS_KEY="todos";
const savedToDos=localStorage.getItem(TODOS_KEY);

function handleToDoSubmit(event){
    event.preventDefault();
    const newToDo=toDoInput.value;
    const newToDoObj={
        text:newToDo,
        id:Date.now(),
    }
    toDoInput.value="";
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDo();
}

// 화면에 그려주는 기능
function paintToDo(newToDo){
    const li=document.createElement("li");
    li.id=newToDo.id;
    const span=document.createElement("span");
    const button=document.createElement("button");
    span.innerHTML=newToDo.text;
    button.innerHTML="❌";
    button.addEventListener("click", deleteToDo);
    
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li); 
}

// 버튼을 누르면 해당 리스트를 지워주는 기능
function  deleteToDo(event){
    event.preventDefault();
    const li=event.target.parentElement;
    toDos=toDos.filter(toDo => toDo.id !== parseInt(li.id));
    // 우리가 클릭한 toDo 의 id와 다른 것은 남겨두고 싶어!
    li.remove();
    saveToDo();
}

// toDos 리스트를 localStorage 에 저장해주는 기능
function saveToDo(event){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}

console.log(savedToDos);
if(savedToDos !==null){
    const parseToDos=JSON.parse(savedToDos);
    toDos=parseToDos;
    parseToDos.forEach(paintToDo);
}
