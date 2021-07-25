/* Homework (7 가지) in objecte Calculator
    function    1+1
    function    1-1
    function    a+b
    function    a-b
    function    a*b
    function    a/b
    function    a**b
*/
console.log("We practice function a kind of way");

const Calculator={
    cal_1_plus_1:function() {
        console.log("func. cal_1_plus_1 = "+(1+1));
    },
    cal_1_abstract_1:function(){
        console.log("func. cal_1_abstarct_1  = "+(1-1));
    },
    cal_a_plus_b:function(a,b){
        console.log("func. cal_"+a+"_plus_"+b+"  = "+(a+b));
    },
    cal_a_abstract_b:function(a,b){
        console.log("func. cal_"+a+"_abstract_"+b+"  = "+(a-b));
    },
    cal_a_multiply_b:function(a,b){
        console.log("func. cal_"+a+"_multiply_"+b+"  = "+(a*b));
    },
    cal_a_devide_b:function(a,b){
        console.log("func. cal_"+a+"_devide_"+b+"  = "+(a/b));
    },
    cal_a_square_b:function(a,b){
        console.log("func. cal_"+a+"_square_"+b+"  = "+(a**b));
    },
    cal_simple_1_plus_1:function(){
        console.log(1+1);
    },
    cal_simple_1_abstract_1:function(){
        console.log(1-1);
    },
    cal_simple_a_plus_b:function(a,b){
        console.log(a+b);
    },
    cal_simple_a_abstract_b:function(a,b){
        console.log(a-b);
    },
    cal_simple_a_multiply_b:function(a,b){
        console.log(a*b);
    },
    cal_simple_a_devide_b:function(a,b){
        console.log(a/b);
    },
    cal_simple_a_square_b:function(a,b){
        console.log(a**b);
    },
}
Calculator.cal_1_plus_1();
Calculator.cal_1_abstract_1();
Calculator.cal_a_plus_b(3,4);
Calculator.cal_a_abstract_b(4,3);
Calculator.cal_a_multiply_b(3,4);
Calculator.cal_a_devide_b(12,4);
Calculator.cal_a_square_b(3,2);

Calculator.cal_simple_1_plus_1();
Calculator.cal_simple_1_abstract_1();
Calculator.cal_simple_a_plus_b(3,4);
Calculator.cal_simple_a_abstract_b(4,3);
Calculator.cal_simple_a_multiply_b(3,4);
Calculator.cal_simple_a_devide_b(12,4);
Calculator.cal_simple_a_square_b(3,2);

const simp_cal={
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