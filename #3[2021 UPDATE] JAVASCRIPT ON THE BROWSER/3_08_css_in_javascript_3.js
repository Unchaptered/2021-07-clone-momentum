const num_1=document.querySelector("h1.hello1");
const num_2=document.querySelector("h1.hello2");
num_1.innerHTML="Way 1 to change color to salmon or blue";
num_2.innerHTML="Way 2 to change color to salmon or blue";


num_1.addEventListener("click",handle_mouse_click);
function handle_mouse_click(){
    const clicked_class="active";
    if(num_1.classList.contains(clicked_class)){
        num_1.classList.remove(clicked_class);
    } else {
        num_1.classList.add(clicked_class);
    }
}
num_2.addEventListener("click",handle_mouse_click_adv);
function handle_mouse_click_adv(){
    num_2.classList.toggle("active");
}

// num_1.addEventListener("click",handle_mouse_click);
// function handle_mouse_click(){
//     const clicked_class="active";
//     if(num_1.className===clicked_class){
//         num_1.className="";
//     } else {
//         num_1.className=clicked_class;
//     }
// }