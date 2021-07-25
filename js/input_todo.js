const todo_form=documnet.querySelector("#nav_right");
const todo_input=document.querySelector("#input_todo");
todo_form.addEventListener("submit",a);

function a(prevent){
    prevent.preventDefault(); // submit 시 새로고침 방지
    
}