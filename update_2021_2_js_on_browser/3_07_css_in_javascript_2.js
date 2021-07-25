const num_1=document.querySelector("h1.hello1");
const num_2=document.querySelector("h1.hello2");
const num_3=document.querySelector("h1.hello3");
const num_4=document.querySelector("h1.hello4");
const num_5=document.querySelector("h1.hello5");
num_1.innerHTML="change color to salmon";
num_2.innerHTML="Alert";
num_3.innerHTML="Log";
num_4.innerHTML="Mouse_addEventListener";
num_5.innerHTML="Mouse_onevents";



num_1.addEventListener("click",handle_mouse_click);
function handle_mouse_click(){
    const clicked_class="active";
    if(num_1.className===clicked_class){
        num_1.className="";
    } else {
        num_1.className=clicked_class;
    }
}