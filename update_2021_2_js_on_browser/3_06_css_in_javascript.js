const num_1=document.querySelector("h1.hello1");
const num_2=document.querySelector("h1.hello2");
const num_3=document.querySelector("h1.hello3");
const num_4=document.querySelector("h1.hello4");
const num_5=document.querySelector("h1.hello5");
num_1.innerHTML="Prompt";
num_2.innerHTML="Alert";
num_3.innerHTML="Log";
num_4.innerHTML="Mouse_addEventListener";
num_5.innerHTML="Mouse_onevents";



num_1.addEventListener("click",handle_mouse_click);
function handle_mouse_click(){
    if(num_1.style.color==="blue"){
        num_1.style.color="tomato";
    } else {
        num_1.style.color="blue";
    }
}

num_2.addEventListener("click",handle_mouse_click_adv);
function handle_mouse_click_adv(){
    const current_color=num_2.style.color;
    let new_color;
    if(current_color==="blue"){
        new_color="tomato";
    } else{
        new_color="blue";
    }
    num_2.style.color=new_color;
}