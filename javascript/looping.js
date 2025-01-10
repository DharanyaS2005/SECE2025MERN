/*
normal
->for
->while
->do...while

advanded
->for in
->for of
->for each
*/
//for in
var a=[10,20,30]
var b={"count":70,"abs":1}
/*for(let i in b){
    console.log(i,b.i);
}
for(let i in b){
    console.log(i,b[i]);
}

set = new Set(["helloa",1,2,"SECE"])
for(let i in set){
    console.log("hello");
    console.log(i);
}*/

//for of loop
for (let i of a){
console.log(i);
} 
for (let i of Object.keys(b)){
    console.log(i);
 } 
 for (let i of Object.values(b)){
    console.log(i);
 } 
for (let [i,j] of Object.entries(b)){
    console.log(i,j);
 } 