navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);

function onGeoOk(position_of_user){
    const lat=position_of_user.coords.latitude;
    const lng=position_of_user.coords.longitude;

    console.log(`You live in ${lat} ${lng}`);
}
function onGeoError(){
    alert("Can't find you. No weather for you");
}