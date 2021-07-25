const quotes=[
    { /* 명언 */
        quote: "Hi11",
        autor: "MS1",
    },
    { /* 명언 */
        quote: "Hi12",
        autor: "MS2",
    },
    { /* 명언 */
        quote: "Hi13",
        autor: "MS3",
    },
    { /* 명언 */
        quote: "Hi14",
        autor: "MS4",
    },
    { /* 명언 */
        quote: "Hi15",
        autor: "MS5",
    },
    { /* 명언 */
        quote: "Hi16",
        autor: "MS6",
    },
    { /* 명언 */
        quote: "Hi17",
        autor: "MS7",
    },
    { /* 명언 */
        quote: "Hi18",
        autor: "MS8",
    },
    { /* 명언 */
        quote: "Hi19",
        autor: "MS9",
    },
    { /* 명언 */
        quote: "Hi20",
        autor: "MS10",
    },
]

const quote=document.querySelector("#quote span:nth-child(1)");
const author=document.querySelector("#quote span:nth-child(2)");
const todayQuote=quotes[Math.floor(Math.random()*quotes.length)];
quote.innerHTML=todayQuote.quote;
author.innerHTML=todayQuote.autor;

// randomness
function random_number(){
}

