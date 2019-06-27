//Решите уравнения (найдите неизвестный x), где a = 8, b = 3:
//a+2(x-b)=16;
//b(x+15)=a+6x;
//x+2x+ax+bx=23780.
var a = 8;
var b = 3; 
var x1 = (a - 2 * b - 16)/2;
console.log(x1);

var x2 = (b*15 - a)/(6 - b);
console.log( x2);

var x3 = 23780/(1+2+a+b);
console.log(x3);
