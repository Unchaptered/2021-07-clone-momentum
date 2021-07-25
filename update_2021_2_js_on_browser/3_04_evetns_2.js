const num_1=document.querySelector("h1.hello1");
const num_2=document.querySelector("h1.hello2");
const num_3=document.querySelector("h1.hello3");
const num_4=document.querySelector("h1.hello4");
const num_5=document.querySelector("h1.hello5");
num_1.innerHTML="Prompt";
num_2.innerHTML="Alert";
num_3.innerHTML="Log";
num_4.innerHTML="Mouse";
num_1.addEventListener("click",function_prompt);
function function_prompt(){
    console.prompt("How old are you");
}
num_2.addEventListener("click",function_alert);
function function_alert(){
    console.alert("Hi");
}
num_3.addEventListener("click",function_talk);
function function_talk(){
    console.log("Hi");
}
num_4.addEventListener("mouseenter",handle_mouse_enter);
function handle_mouse_enter(){
    console.log("mouse is here!");
    num_4.innerHTML="mouse is here!";
}
num_4.addEventListener("mouseleave",handle_mouse_leave);
function handle_mouse_leave(){
    console.log("mouse is gone!");
    num_4.innerHTML="mouse is gone!";
}