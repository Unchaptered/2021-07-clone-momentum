// Function 이란 무엇인가
/* 해설(Function의 정의) 결론(재활용 가능한 코드 조각)
Function은 너가 계속해서 사용할 수 있는 조각이다.
*/

// 2_07_01 Not-used__function
/* 코드예제("Hello my naem is 'aaaa'" is repeated) */
console.log("Not-used__function");
console.log("Hello my name is Nico");
console.log("Hello my name is Dal");
console.log("Hello my name is Fate");

// 2_07_02 Used__function to "Hello"
console.log("Used__function to \"Hello\"");
function say_hello_1(){
    console.log("Hello!");
}
say_hello_1();
say_hello_1();
say_hello_1();

// 2_07_03 Used__function to "Hello my name is C"
console.log("Used__function to \"Hello my name is C\"");
function say_hello_2(){
    console.log("Hello my name is C")
}
say_hello_2();
say_hello_2();
say_hello_2();

// 2_07_04 Used__function to "Hello"+ something
// Dynamic 한 Function 을 어떻게 만들 수 있을까?
/* 코드 예제(function say_hello_3) 결론 (2_08_Fucntion_2.js)
console.log("Used__function to \"Hello\"");
function say_hello_3(){
    console.log("Hello my name is C");
}
say_hello_3("Nico");
say_hello_3("Dal");
say_hello_3("Fate");
*/