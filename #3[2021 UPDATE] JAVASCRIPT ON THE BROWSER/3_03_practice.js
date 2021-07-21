// 우리는 특정 element를 찾고 그 element의 값을 호출하는 것을 알고 있다.
// 하지만 Javascript 의 목적은 Events(all intractive actions)이기에,
// 우리는 Event를 listen 하는 방법을 배워야 한다.
// 그것들 중 하나가 addEventListener() 이다.



const num_1=document.querySelector("h1.hello1");
const num_2=document.querySelector("h1.hello2");
const num_3=document.querySelector("h1.hello3");
const num_4=document.querySelector("h1.hello4");
const num_5=document.querySelector("h1.hello5");
num_1.innerHTML="Prompt";
num_2.innerHTML="Alert";
num_3.innerHTML="Hi";
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
