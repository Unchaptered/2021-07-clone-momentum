/* conditionals (조건문) : if (true or false) : to check something
    1. 사용자가 로그인 되어 있다면, 무엇을 보여줄건지
    2. 사용자가 로그아웃 되어 있다면, 무엇을 보여줄건지
    3. 사용자가 무언가를 할 때, 반응하는 것을 만들때
    etc
*/
// if(condition){
//     //condition==true
// } else{
//     // condition==false
// }

// while(condition){
//     //condition==true
// }
// very nice age calculator
/* 내가 아직 배우지 않은 개념들 (prompt, typeof)
    1.  prompt(message: string, _default?: string)
        >>
            code pre-view
                const user_age=prompt("How old are you?");
                console.log(user_age);
        >>
            this page(prompt) pause all javascript
            so we don't use prompt any more.
            very very very old function
        >>
            return
            user-age(value)
            p.s. prompt return only String, not number.
    2. typeof value
        >>
            code pre-view
                const user_age=prompt("How old are you?");
                console.log(typeof user_age);
        >>
            this command change value to type of value
        >>
            return
            type of user-age(type)
    3. parseInt("");
        >>
            code pre-vew
                const user_age=prompt("How old are you?");
                console.log(typeof "15", typeof parseInt("15"));
        >>
            this command change String to Number.
        >>
            return
            type of "15"
            type of 15
        >>
            code pre-view 2
                const user_age=prompt("How old are you?");
                console.log(user_age, parseInt(user_age));
        >>
            return
            user-age(String)
            user-age(number)
        >>
            means
            If user type non-number, this command can catch it.
            If user type "HI", this command retrun...
            "Hi"
            NaN
*/

let age=parseInt(prompt("How old are you?"));
// age가 number 라면, false
// age가 number 아니라면, true
while(isNaN(age)||age<0){
    if(isNaN(age)){
        alert("Please write a number");
    } else {
        alert("Plase write a positive number");
    }
    age=parseInt(prompt("How old are you?"));
} 

    alert("Your age is "+ parseInt(age));

if(age<18){
    alert("You're so young... You can't drink alchohol");
} else if(age<50){
    alert("You can drinkt alchohol");
} else if(age<80){
    alert("If you drink a lot until now, I guess you should drink nomore");
} else if(age<100){
    alert("You can do whatever do you want");
} else if(age===100){
    alert("Wow you're wise");
} else if(age<120)[
    alert("Wow you're wise most");
] else if(age>200){
    alert("Is it real?");
}