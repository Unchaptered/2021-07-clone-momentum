// Declared
const body=document.querySelector("body");
const body_h1=document.createElement("h1");



// EventListener
window.addEventListener("resize", resize);

// Interval
settings();
resize();

// function
function settings(){
  body.appendChild(body_h1).innerText="Hello!";
}
function resize(){
  let window_size=window.innerWidth;

  if(window_size>1200){
    body.style.backgroundColor="yellow";
  } else if(1200>=window_size && window_size>800){
    body.style.backgroundColor="red";
  } else if(800>=window_size && window_size>600){
    body.style.backgroundColor="blue";
  }
}