/* conditionals (조건문) : if (true or false) : to check something
    1. 사용자가 로그인 되어 있다면, 무엇을 보여줄건지
    2. 사용자가 로그아웃 되어 있다면, 무엇을 보여줄건지
    3. 사용자가 무언가를 할 때, 반응하는 것을 만들때
    etc
*/

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