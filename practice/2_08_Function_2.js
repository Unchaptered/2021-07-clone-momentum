// Function 이란 무엇인가
/* 해설(Function의 정의) 결론(재활용 가능한 코드 조각)
Function은 너가 계속해서 사용할 수 있는 조각이다.
*/

// 2_08_01 Used__function to something*1
console.log("Used__function to \"something\"");
function say_hello_3(name_of_person){
    console.log(name_of_person);
}
say_hello_3("Nico");
say_hello_3("Dal");
say_hello_3("Fate");

// 2_08_02 Used__function to "Hello" + something*2
console.log("Used__function to \"something+something\"");
function say_hello_4(name_of_person, age){
    console.log("Hello my name is "+name_of_person+" and I'm "+age);
}
say_hello_4("Nico",10);
say_hello_4("Dal",23);
say_hello_4("Fate",21);

// 2_08_03 Used__function to make "Calculator" to plus
/* 해설(어떤 결과가 나올까?) 결론(Undefined 정의되지 않음)
function plus_1(a,b) {...}은 a와 b를 순서대로 출력하는 function이지만,
해당 funciton 호출 시 아무런 값을 넣지 않아서 undefined 가 호출 되었다.
*/
console.log("Used__function to make \"Calculator\"_1");
function plus_1(a,b){
    console.log(a,b);
}
plus_1();

// 2_08_04 Used__function to make "Calculator" to plus
/* 해설(어떤 결과가 나올까?) 결론(NaN 숫자가 아님)
function plus_2(a,b) {...}은 a와 b를 더해서 출력하는 function이기에,
해당 function 호출 시 들어오지 않다인 undefined이 아니라,
숫자가 아닌이라는 뜻의 NaN이 출력된다.
*/
console.log("Used__function to make \"Calculator\"_2");
function plus_2(a,b){
    console.log(a+b);
}
plus_2();

// 2_08_05 Used__function to make "Calculator" to plus
console.log("Used_function to make \"Calculator\"_3");
plus_2(8,60);

// 2_08_06 Used__function to make "Calculator" to devide
console.log("Used_function to make \"Calculator\"_4");
function devide_1(a,b){
    console.log(a/b);
}
devide_1(60,8);

// 2_08_07 Used__function with Objects to make "Caculator"
console.log("Used_function with Objects to make \"Calculator\"");
const player_1={
    name:"nico",
    sayHello:function(){
        console.log("Hello");
    },
};
console.log(player_1.name);
player_1.sayHello();

// 2_08_08 Used__function with Objects to make "Caculator"
console.log("Used_function with Objects to make \"Calculator\"");
const player_2={
    name:"nico",
    sayHello:function(a){
        console.log("Hello! "+a+", Nice to meet you.");
    },
};
console.log(player_2.name);
player_2.sayHello("Nico");
player_2.sayHello("Dal");
player_2.sayHello("Fate");

player_2.sayHello(33);