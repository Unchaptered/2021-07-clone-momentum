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
num_1.addEventListener("click",function_prompt);
num_2.addEventListener("click",function_alert);
num_3.addEventListener("click",function_talk);

num_4.addEventListener("mouseenter",handle_mouse_enter);
num_4.addEventListener("mouseleave",handle_mouse_leave);

num_5.onmouseenter=handle_mouse_enter;
num_5.onmouseleave=handle_mouse_leave;

// num_4.removeEventListener("mouseenter", handle_mouse_enter);

window.addEventListener("resize",handle_window_resize);
window.addEventListener("copy", handle_winodw_copy);

window.addEventListener("offline", handle_window_offline);
window.addEventListener("online", handle_window_online);

function function_prompt(){
    prompt("How old are you");
}
function function_alert(){
    alert("Hi");
}
function function_talk(){
    console.log("Hi");
} 
function handle_mouse_enter(){
    this.style.color="blue";   
}
function handle_mouse_leave(){
    this.style.color="red";
}
function handle_window_resize(){
    document.body.style.backgroundColor="tomato";
}
function handle_winodw_copy(){
    alert("copy");
}
function handle_window_offline(){
    alert("wifi turn off");
}
function handle_window_online(){
    alert("wifi turn on");
}
// 참고 && Important_Use_Event.txt