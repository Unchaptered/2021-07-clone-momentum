
function sayHello_every_5000ms(){
    console.log("hello");
}
function sayHello_time_out(){
    console.log("time out");
}

// 메서드 설명
// setInterval(sayHello_every_5000ms,5000);
// setTimeout(sayHello_time_out,5000);


// Clock 객체 생성
const clock=document.querySelector(".clock");

function getClock(){
    const date=new Date();
    const clock_hour=String(date.getHours()).padStart(2, "0");
    const clock_minute=String(date.getMinutes()).padStart(2, "0");
    const clock_second=String(date.getSeconds()).padStart(2, "0");
    clock.innerHTML=`${clock_hour}:${clock_minute}:${clock_second}`;
}
getClock();
setInterval(getClock,1000);
