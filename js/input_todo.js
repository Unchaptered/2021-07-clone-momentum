const todo_form=document.querySelector("#input_todo-form");
const todo_input=document.querySelector("#input_todo");
const input_todo_ui=document.querySelector("#input_todo_ui");
let todo_list=[];
const todo_list_key="todo_list_key";
let todo_list_load_localStorage=localStorage.getItem(todo_list_key);
// todo_list have text and id.
todo_form.addEventListener("submit",todo_list_submit);
// 시작하자마자 아래 function 실행
todo_list_synchronize_to_list();
todo_list_synchronize_once();

function todo_list_submit(prevent){
    prevent.preventDefault();
    const todo_input_tmp=todo_input.value;
    todo_input.value="";
    const todo_input_obj={
        text:todo_input_tmp,
        id:Date.now(),
        complete:false,
    }
    if(todo_input_tmp.length>16) {
        alert("17 자리 이상은 입력할 수 없습니다.");
    } else if(todo_input_tmp!==""){
        todo_list_push(todo_input_obj);
    } else {
        alert("공백은 입력할 수 없습니다.");
    }
}

function todo_list_push(todo_input_obj){
    // 추가
    todo_list.push(todo_input_obj);
    localStorage.setItem(todo_list_key,JSON.stringify(todo_list));
    // 동기화!
    todo_list_synchronize_to_list();
    // 생성
    todo_list_create(todo_input_obj);
}

// 이 function이 todo_list 와 todo_list_key (loacalStorage) 동기화
function todo_list_synchronize_to_list(){
    todo_list_load_localStorage=localStorage.getItem(todo_list_key);
    if(todo_list_load_localStorage === null){
    } else {
        const todo_json=JSON.parse(todo_list_load_localStorage);
        todo_list=todo_json;
    }
}
function todo_list_synchronize_once(){
    todo_list_load_localStorage=localStorage.getItem(todo_list_key);
    const todo_json=JSON.parse(todo_list_load_localStorage);

    const todo_list_length=todo_list.length;
    let todo_list_length_let=0; 
    while(todo_list_length !== todo_list_length_let){
        todo_list_create(todo_list[todo_list_length_let]);
        if(todo_json[todo_list_length_let].complete==true){
            const tmp_li_id=todo_json[todo_list_length_let].id;
            const tmp_li=document.getElementById(tmp_li_id);
            tmp_li.classList.add("input_todo_complete");
        } else {}
        todo_list_length_let=todo_list_length_let+1;
        // if(todo_json[todo_list_length_let].complete==true){
        //     const tmp=todo_json[todo_list_length_let].id;
        //     const li=document.querySelector("#tmp");
        //     li.classList.add("input_todo_complete");
        // } else {}
    }
}
function todo_list_synchronize_to_local(){
    localStorage.setItem(todo_list_key,JSON.stringify(todo_list));
}

// 오브젝트 생성
function todo_list_create(todo_input_obj){
    const div=document.createElement("div");
    div.id=todo_input_obj.id;

    const span=document.createElement("span");
    span.innerHTML=todo_input_obj.text;
    const button_delete=document.createElement("button");
    button_delete.innerHTML="❌";
    button_delete.addEventListener("click",todo_list_delete);
    const button_complete=document.createElement("button");
    button_complete.innerHTML="⭕";
    button_complete.addEventListener("click",todo_list_complete);

    div.appendChild(span);
    div.appendChild(button_delete);
    div.appendChild(button_complete);
    input_todo_ui.appendChild(div);
}
function todo_list_delete(prevent){
    prevent.preventDefault();
    const li=prevent.target.parentElement;
    li.remove();

    todo_list=todo_list.filter(a => a.id !== parseInt(li.id));
    todo_list_synchronize_to_local();
}
function todo_list_complete(prevent){
    prevent.preventDefault();
    todo_list_load_localStorage=localStorage.getItem(todo_list_key);
    const todo_json=JSON.parse(todo_list_load_localStorage);
    const li=prevent.target.parentElement;
    let testnumber=0;
    while(todo_json[testnumber].id!=li.id){
        testnumber=testnumber+1;
    }
    if(todo_json[testnumber].complete==true){
        todo_json[testnumber].complete=false;
        li.classList.remove("input_todo_complete");
    } else {
        todo_json[testnumber].complete=true;
        li.classList.add("input_todo_complete");
    }
    localStorage.setItem(todo_list_key,JSON.stringify(todo_json));
}