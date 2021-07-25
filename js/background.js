const background_array =[
    "background_01.jpg",
    "background_02.jpg",
    "background_03.jpg",
    "background_04.jpg",
    "background_05.jpg",
];
const background_choice=background_array[Math.floor(Math.random()*background_array.length)]; //done
const background_CLASS="background-size";
const background_main=document.createElement("img");

background_main.src=`img/${background_choice}`;
background_main.classList.add(background_CLASS);
document.body.appendChild(background_main);
