const login_input=document.querySelector("#login-form input");
const login_button=document.querySelector("#login-form button");

login_button.addEventListener("click", on_login_button_click);
function on_login_button_click(){
    const input_value=login_input.value;
    console.log(input_value);
}