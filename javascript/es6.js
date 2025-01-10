//variable
/*var a=10
const con=3.14
console.log(a)
console.log(con)
{
    let a=20
    let b=30
    console.log(a);
    console.log(b);
}
console.log(a);
console.log(con);
console.log(b);

class ClassEg{

constructor(){
    this.a=10;
}
//arrow function
/*funInclass=()=>{
    console .log(this.a);
}
}
obj=new ClassEg()
console.log(obj.funInclass());*/

//ternary operator
//a=10
//console.log(a%2==0?"Even":"odd");

//spread operator
/*a=[10,20,30,40]
b=[50,60,70]
c=[...b,a]
d=[...b,...a]
console.log(c);
console.log(d);*/

//rest operator
/*function restOp(a,b,...arg) {
console.log(a);
console.log(b);
console.log(arg);
}
restOp(10,20,30,40,50)*/

//destructing operator
/*var array =[10,20,30]
var [a,b,c,d]=array
console.log(a,b,c,d);*/

//hoisting - embedded with scope

//variable hoisting
/*console.log(a);
var a=10
console.log(a);
console.log(b);
let b=10;
console.log(c)
const c=10;*/

//function hoisting
console.log(fun());
function fun(){
    return 10
}