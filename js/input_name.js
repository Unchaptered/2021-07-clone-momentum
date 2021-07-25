const form_input=document.querySelector("#input_form");
const name_input=document.querySelector("#input_name");
const name_replace=document.querySelector("#input_name-replace");
const name_replace_text=document.querySelector("#input_name-replace p");
const name_KEY="user_name";
const name_local=localStorage.getItem(name_KEY);

function name_localStorage_save(prevent){
    prevent.preventDefault();

    const name_temp=name_input.value;
    name_input.value="";

    localStorage.setItem(name_KEY,name_temp);
    name_localStorage_load(name_temp);
}
if(name_local===null){
    form_input.addEventListener("submit",name_localStorage_save);
} else {
    name_localStorage_load(name_local);
}
function name_localStorage_load(name_local){
    form_input.classList.add("display-none");
    name_replace.classList.remove("display-none");
    name_replace_text.innerHTML=`Welcome, ${name_local}`;
}