const mon="mon";
const tue="tue";
const wed="wed";
const thu="thu";
const fri="fri";
const sat="sat";
const sun="sun";

const days_of_week_1=mon+tue+wed+thu+fri+sat+sun;
const days_of_week_2=[mon,tue,wed,thu,fri,sat,sun];
const nonsense=[1,2,"hello",false,null,true,undefined];

console.log(days_of_week_1);
console.log(days_of_week_2,nonsense);

const days_of_week_3=["mon","tue","wed","thu","fri","sat"];

// Get Item from Array
console.log(days_of_week_3[4]);

// Get Array
console.log(days_of_week_3);
// Add one more day to the array
days_of_week_3.push("sun");
console.log(days_of_week_3);


