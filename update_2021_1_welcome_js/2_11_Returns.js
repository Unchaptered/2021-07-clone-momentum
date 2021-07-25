/* consol.log
const cal={
    plus:function(a,b){
        console.log(a+b);
    },
    abstract:function(a,b){
        console.log(a-b);
    },
    multiply:function(a,b){
        console.log(a*b);
    },
    devide:function(a,b){
        console.log(a/b);
    },
    square:function(a,b){
        console.log(a**b);
    },
}
cal.plus(2,3);
cal.plus(2,3);
*/
/* alert
const cal={
    plus:function(a,b){
        alert(a+b);
    },
    abstract:function(a,b){
        alert(a-b);
    },
    multiply:function(a,b){
        alert(a*b);
    },
    devide:function(a,b){
        alert(a/b);
    },
    square:function(a,b){
        alert(a**b);
    },
}
console.log(cal.plus(2,3));
console.log(cal.plus(2,3));
*/

/* Proccess
const type 의 variable 인 age 에 96 할당
외국 age 르 받으면 2 를 더해서 해당값을 리턴하는 function 생성
const type 의 variable 인 krAge 에 calculateKrAge(age) 할당
콘솔에 krAge 출력
*/
// 2_11_01_return
const age=96; 
function calculateKrAge(age_of_foreigner){
    return age_of_foreigner+2;
} 
const krAge=calculateKrAge(age); 
console.log(krAge); 

// 2_11_02_return_calculator
const cal={
    plus:function(a,b){
        return a+b;
    },
    abstract:function(a,b){
        return a-b;
    },
    multiply:function(a,b){
        return a*b;
    },
    devide:function(a,b){
        return a/b;
    },
    square:function(a,b){
        return a**b;
    },
}

const plusResult=cal.plus(3,4);
console.log(plusResult);