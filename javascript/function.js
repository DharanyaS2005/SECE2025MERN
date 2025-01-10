//with return and with parameter
function SECE(dept){
    console.log("the dept is",dept);
    return "Section A"
}
console.log(SECE("CSE"));
//with parameter and with return
function SECE(dept){
    return "Section of the department is A";
}
console.log(SECE("cse"));

//with parameter and without return
function SECE2025(dept){
    console.log("The dept is : ",dept);
}
SECE("cse");

//without parameter and with return
function Add(){
    return "Addion";
}
console.log(Add());

//without parameter and without return
function sub(){
    console.log("Subtraction");

}
sub();