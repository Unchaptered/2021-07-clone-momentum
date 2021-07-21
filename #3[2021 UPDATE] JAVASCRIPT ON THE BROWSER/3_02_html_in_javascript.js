const title=document.getElementById("title");
console.log(title);
console.dir(title);


/* Recap : Nicolas Like quertySelector()
    getElemetById()             return 1            ("id")
    getElementByClassName()     return Array        ("class")
    getElementByTagName()       return Array        ("tag_name")
    querySelector()             return 1            (".class") or ("#id")
*/  

/* getElemetById("title") : id 로 수식되는 element 를 호출해야 할 때
    >>
        HTML id는 단수의 element만 수식할 수 있고,
        한 개의 element는 단수의 id만 가질 수 있다.
    >>
        document.getElemntById("title");
        document에서
        Element를 가져오는데
        Id를 기준으로 하며
        그 Id는 ("title")이다.
*/
/* getElementByClassName("hi") : class 로 수식되는 element 를 호출해야 할 때,
    >>
        HTML class는 복수의 element를 수식할 수 있고
        한 개의 element가 복수의 class를 가질 수도 있다.
    >>
        document.getElementByClassName("hello");
        document에서
        element를 가져오는데
        class를 기준으로 하며
        그 class는 ("hello")이다.
*/
/* getElementByTagName("h1") : id 도 class 도 없는 element 를 호출해야 할 때,
    >>
        HTML element가 항상 id나 class를 가지지는 않는다.
        이럴 때는 getElementByTagName 으로 호출해야 한다.
    >>
        document.getElementByTagName("h1");
        document에서
        element를 가져오는데
        tag_name 을 기준으로 하며
        그 tag는 ("h1")이다.
*/
/* querySelector() : id,class,tag_name도 싫을 때, CSS 를 근거로 element 를 호출해야 할 때,
    >>
        id도 class도 없으면서
        TagName으로 호출하는 것도 싫을 때,
        그때는 querySelector()을 이용하여,
        element를 호출해야 한다.
    >>
        document.querySelector(".hi h1");
        document에서
        element를 가져오는데
        .h1 클래스를 가지고 있는 요소의
        child 인 h1 element를 호출한다.

*/
