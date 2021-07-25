const name_form=document.querySelector("#input_form");
const name_input=document.querySelector("#input_name");
const name_input_reset=document.querySelector("#input_name-reset");
const name_input_replace=document.querySelector("#input_name-replace");
const name_input_replace_text=document.querySelector("#input_name-replace_in");
const name_CLASS="display-none";
const name_KEY="user_name";
name_form.addEventListener("submit",func_name_submit);
name_input_reset.addEventListener("click",func_name_reset);
// 시간 순
setting();
function setting(){
    const name_saved=localStorage.getItem(name_KEY);
    if(name_saved===null){ // input 만 노출
        name_input.classList.remove(name_CLASS);
        name_input_reset.classList.add(name_CLASS);
        name_input_replace.classList.add(name_CLASS);
    }else{ // input 외를 노출
        name_input.classList.add(name_CLASS);
        name_input_reset.classList.remove(name_CLASS);
        name_input_replace.classList.remove(name_CLASS);
        name_input_replace_text.innerHTML=`Welcome, ${name_saved}`;
    }
}
function func_name_submit(prevent){
    prevent.preventDefault();

    const name_tmp=name_input.value;
    name_input.value="";
    localStorage.setItem(name_KEY,name_tmp);
    setting();
}
function func_name_reset(){
    localStorage.removeItem(name_KEY);
    setting();
}
// name_form.addEventListener("submit",);

// function setting(){
//     name_input.classList.add(name_CLASS);
//     name_input_reset.classList.add(name_CLASS);
//     name_input_replace.classList.add(name_CLASS);
// }
// function name_sychronize_to_html(name){
//     name=localStorage.getItem(user_name);
//     if(name===""){
//         text_replace_input();
//     } else {
//         input_replace_text();
//     }
// }
// function input_replace_text(){ // 입력창을 텍스트로 변경
//     name_input.classList.add(name_CLASS);
//     name_input.reset.classList.remove(name_CLASS);
//     name_input.replace.classList.remove(name_CLASS);
// }
// function text_replace_input(){ // 텍스트를 입력창으로 변경
//     name_input.classList.remove(name_CLASS);
//     name_input_reset.classList.add(name_CLASS);
//     name_input_replace.classList.add(name_CLASS);
// }
// function name_submit(prevent){
//     prevent.preventDefault();

//     const name_tmp=name_input.value;
//     name_input.value="";

//     localStorage.setItem(name_KEY,name_tmp);
//     input_replace_text();
// }