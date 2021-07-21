const login_input=document.querySelector("#login-form input");
const login_button=document.querySelector("#login-form button");

login_button.addEventListener("click", on_login_button_click);
function on_login_button_click(){
    if(login_input.value==0){
        console.log("Type message");
    } else {
        console.log("hello", login_input.value);
    }
}