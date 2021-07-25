// form>input*2 의 submit 으로 인한 새로고침 제한
/* 코드 내역
        <form id="login-form">
            <input required maxlength="15" type="text" placeholder="What is your name?"/>
            <input type="submit" value="Log In"/>
        </form>
*/

// submit 버튼을 누르면 page 가 새로고침되는 문제를 어떻게 해결할 수 있을까?
/* 정답 : value_name.preventDefault();
    >>왜?
        submit 이 click(event listener) 될 때 마다,
        broswer 가 자동으로 argument를 전송
    >> bad
        function on_submit_button_click(){
        const input_value=login_input.value;
        console.log(input_value);
    >> good
    
}
*/

// Sequence
/* focus elements, declared, allocation,  eventlistener, events, summit argument
    1   Javascript 를 적용할 Elements 를 지정
    2   해당 Elements 를 Const(type)의 Variable에 할당(pre-declared)
    3   해당 ELements 에 "@@@@" 에 대한 Events Listener 를 생성
    4   해당 Elements 의 Event Listener 가 실행할 function 을 생성
    5   Events 실행
    6   Broswer 가 Events 와 관련된 argument 들을 Summit
*/

const login_form=document.querySelector("#login-form");
const login_input=document.querySelector("#login-form input");
const greeting=document.querySelector("#greeting");
const HIDDEN_CLASSNAME="hidden";
const USERNAME_KEY="user_name";
const saved_username=localStorage.getItem(USERNAME_KEY);

function on_submit_button_click(prevent){
    
    prevent.preventDefault();
    
    const user_name=login_input.value;
    
    login_form.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY,user_name);
    paint_greetings(user_name);
}

if(saved_username===null){
    login_form.classList.remove(HIDDEN_CLASSNAME);
    login_form.addEventListener("submit", on_submit_button_click);
} else {
    paint_greetings(saved_username);
}

function paint_greetings(){
    greeting.innerHTML=`Hello ${saved_username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

// <a href="#">Go to github(Unchaptered)</a> 의 링크 호출 기능 제한
/* Sometime we need to prevent basic function by JS.
    Sequence
        1   You gave JS the name of the function.
        2   JS operate it automatically.
        3   When JS operate it, JS put object that first argument in funciton.
            on_a_href_click({information about the event that just happened}, ...){}
        4   This object, contained information about function, just happed by first arguements
        5   We just recived it.
            If you prevent it, write this.
        6   event.preventDefault();
*/

const link=document.querySelector("#link");
link.addEventListener("click",on_a_href_click);
function on_a_href_click(event){
    event.preventDefault();
    alert("clicked!");
}

