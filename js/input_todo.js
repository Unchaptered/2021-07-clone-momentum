const todo_form=document.querySelector("#input_todo-form");
const todo_input=document.querySelector("#input_todo");
const input_todo_ui=document.querySelector("#input_todo_ui");
let todo_list=[];
const todo_list_key="todo_list_key";
let todo_list_load_localStorage=localStorage.getItem(todo_list_key);
// todo_list have text and id.
todo_form.addEventListener("submit",todo_list_submit);
// 시작하자마자 아래 function 실행
todo_list_synchronize();
todo_list_synchronize_once();

function todo_list_submit(prevent){
    prevent.preventDefault();
    const todo_input_tmp=todo_input.value;
    todo_input.value="";
    const todo_input_obj={
        text:todo_input_tmp,
        id:Date.now(),
    }
    todo_list_push(todo_input_obj);
}

function todo_list_push(todo_input_obj){
    // 추가
    todo_list.push(todo_input_obj);
    localStorage.setItem(todo_list_key,JSON.stringify(todo_list));
    // 동기화!
    todo_list_synchronize();
    // 생성
    todo_list_create(todo_input_obj);
}

// 이 function이 todo_list 와 todo_list_key (loacalStorage) 동기화
function todo_list_synchronize(){
    todo_list_load_localStorage=localStorage.getItem(todo_list_key);
    if(todo_list_load_localStorage === null){
        console.log(`todo_list_load_localStorage is nothing`);
        console.log(`todo_list is nothing`);
    } else {
        const todo_json=JSON.parse(todo_list_load_localStorage);
        todo_list=todo_json;
        console.log(`todo_list is ${todo_list}`);
        console.log(`todo_list_load_localStorage is ${todo_list_load_localStorage}`);
    }
}
function todo_list_synchronize_once(){
    let todo_list_length=todo_list.length;
    console.log(`todo_list length is ${todo_list_length}`);
    while(todo_list_length !== 0){
        todo_list_length = todo_list_length-1;
        todo_list_create(todo_list[todo_list_length]);
    }
}

function todo_list_create(todo_input_obj){
    const div=document.createElement("div");
    div.id=todo_input_obj.id;

    const span=document.createElement("span");
    span.innerHTML=todo_input_obj.text;
    const button=document.createElement("button");
    button.innerHTML="❌";

    div.appendChild(span);
    div.appendChild(button);
    input_todo_ui.appendChild(div);
}

function todo_list_delete(pevent){
    prevent.preventDefault();
    const li=event.target.parentElement;


}