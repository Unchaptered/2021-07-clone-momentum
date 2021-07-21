const title=document.querySelector(".hi:first-child h1");
console.log(title);
console.dir(title);

// 우리는 특정 element를 찾고 그 element의 값을 호출하는 것을 알고 있다.
// 하지만 Javascript 의 목적은 Events(all intractive actions)이기에,
// 우리는 Event를 listen 하는 방법을 배워야 한다.
// 그것들 중 하나가 addEventListener() 이다.

title.addEventListener("click",handle_title_click); //title이 click 을 listen 한다.
function handle_title_click() {                     //title이 click 되면 실행될 functin
    console.log("title was clicked;");
}
/* Recap
for example,
one HTML TAG such as h1...
    contains so many specifications...
        this specification is events or simple property....
        and all specification is object...
        they have many member varialbes and function...

Structure
    One Tag
        Events          ===Object
            member_variable
            function
        Non-Events      ===Object
            member_variable
            function

Most massy object is style: CSSStyleDeclaration ~~
    Check site out.
*/
/* console.dir : element의 세부 항목들 노출
    on~~~으로 시작하는 것들이 존나 많은데...
    그게 다 event listener이다.
*/

/*
h1.hello
accessKey: ""
align: ""
ariaAtomic: null
ariaAutoComplete: null
ariaBusy: null
ariaChecked: null
ariaColCount: null
ariaColIndex: null
ariaColSpan: null
ariaCurrent: null
ariaDescription: null
ariaDisabled: null
ariaExpanded: null
ariaHasPopup: null
ariaHidden: null
ariaKeyShortcuts: null
ariaLabel: null
ariaLevel: null
ariaLive: null
ariaModal: null
ariaMultiLine: null
ariaMultiSelectable: null
ariaOrientation: null
ariaPlaceholder: null
ariaPosInSet: null
ariaPressed: null
ariaReadOnly: null
ariaRelevant: null
ariaRequired: null
ariaRoleDescription: null
ariaRowCount: null
ariaRowIndex: null
ariaRowSpan: null
ariaSelected: null
ariaSetSize: null
ariaSort: null
ariaValueMax: null
ariaValueMin: null
ariaValueNow: null
ariaValueText: null
assignedSlot: null
attributeStyleMap: StylePropertyMap {size: 0}
attributes: NamedNodeMap {0: class, class: class, length: 1}
autocapitalize: ""
autofocus: false
baseURI: "file:///D:/Code%20-%20GitHub%20Dessktop(Repository)/project-2021-07-clone-momentum/2021-07-clone-momentum/%233%5B2021%20UPDATE%5D%20JAVASCRIPT%20ON%20THE%20BROWSER/3_03.html"
childElementCount: 0
childNodes: NodeList [text]
children: HTMLCollection []
classList: DOMTokenList ["hello", value: "hello"]
className: "hello"
clientHeight: 43
clientLeft: 0
clientTop: 0
clientWidth: 360
contentEditable: "inherit"
dataset: DOMStringMap {}
dir: ""
draggable: false
elementTiming: ""
enterKeyHint: ""
firstChild: text
firstElementChild: null
hidden: false
id: ""
innerHTML: "Grab me!"
innerText: "Grab me!"
inputMode: ""
isConnected: true
isContentEditable: false
lang: ""
lastChild: text
lastElementChild: null
localName: "h1"
namespaceURI: "http://www.w3.org/1999/xhtml"
nextElementSibling: null
nextSibling: text
nodeName: "H1"
nodeType: 1
nodeValue: null
nonce: ""
offsetHeight: 43
offsetLeft: 8
offsetParent: body
offsetTop: 22
offsetWidth: 360
onabort: null
onanimationend: null
onanimationiteration: null
onanimationstart: null
onauxclick: null
onbeforecopy: null
onbeforecut: null
onbeforepaste: null
onbeforexrselect: null
onblur: null
oncancel: null
oncanplay: null
oncanplaythrough: null
onchange: null
onclick: null
onclose: null
oncontextmenu: null
oncopy: null
oncuechange: null
oncut: null
ondblclick: null
ondrag: null
ondragend: null
ondragenter: null
ondragleave: null
ondragover: null
ondragstart: null
ondrop: null
ondurationchange: null
onemptied: null
onended: null
onerror: null
onfocus: null
onformdata: null
onfullscreenchange: null
onfullscreenerror: null
ongotpointercapture: null
oninput: null
oninvalid: null
onkeydown: null
onkeypress: null
onkeyup: null
onload: null
onloadeddata: null
onloadedmetadata: null
onloadstart: null
onlostpointercapture: null
onmousedown: null
onmouseenter: null
onmouseleave: null
onmousemove: null
onmouseout: null
onmouseover: null
onmouseup: null
onmousewheel: null
onpaste: null
onpause: null
onplay: null
onplaying: null
onpointercancel: null
onpointerdown: null
onpointerenter: null
onpointerleave: null
onpointermove: null
onpointerout: null
onpointerover: null
onpointerrawupdate: null
onpointerup: null
onprogress: null
onratechange: null
onreset: null
onresize: null
onscroll: null
onsearch: null
onseeked: null
onseeking: null
onselect: null
onselectionchange: null
onselectstart: null
onstalled: null
onsubmit: null
onsuspend: null
ontimeupdate: null
ontoggle: null
ontransitioncancel: null
ontransitionend: null
ontransitionrun: null
ontransitionstart: null
onvolumechange: null
onwaiting: null
onwebkitanimationend: null
onwebkitanimationiteration: null
onwebkitanimationstart: null
onwebkitfullscreenchange: null
onwebkitfullscreenerror: null
onwebkittransitionend: null
onwheel: null
outerHTML: "<h1 class=\"hello\">Grab me!</h1>"
outerText: "Grab me!"
ownerDocument: document
parentElement: div.hi
parentNode: div.hi
part: DOMTokenList [value: ""]
prefix: null
previousElementSibling: null
previousSibling: text
scrollHeight: 43
scrollLeft: 0
scrollTop: 0
scrollWidth: 360
shadowRoot: null
slot: ""
spellcheck: true
style: CSSStyleDeclaration {additiveSymbols: "", alignContent: "", alignItems: "", alignSelf: "", alignmentBaseline: "", …}
tabIndex: -1
tagName: "H1"
textContent: "Grab me!"
title: ""
translate: true
__proto__: HTMLHeadingElement
*/