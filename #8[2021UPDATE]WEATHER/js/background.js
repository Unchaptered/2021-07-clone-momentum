const array_backgrounds = [
    "background_01.jpg",
    "background_02.jpg",
    "background_03.jpg",
    "background_04.jpg",
    "background_05.jpg",
];

const chosen_background=array_backgrounds[Math.floor(Math.random()*array_backgrounds.length)];
const todayImage=document.createElement("img");
const resize_background="background-size";
todayImage.src=`img/${chosen_background}`;
todayImage.classList.add(resize_background);
document.body.appendChild(todayImage);
console.log(todayImage);