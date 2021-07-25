const widget_time=document.querySelector("#time");
get_time();
setInterval(get_time, 1000);

function get_time(){
    const date=new Date();
    const clock_hour=String(date.getHours()).padStart(2,"0");
    const clock_minute=String(date.getMinutes()).padStart(2,"0");
    const clock_second=String(date.getSeconds()).padStart(2,"0");

    widget_time.innerHTML=`${clock_hour}:${clock_minute}:${clock_second}`;
}
