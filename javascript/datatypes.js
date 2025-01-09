/*
//primitive datatypes
a = "SECE";
console.log(typeof(a));

b = true;
console.log(b);
//type of datatype
console.log(typeof(b)); */

//secondary datatypes
/*array = [1,2,"sece",[10,20],true,'a'];
console.log(array);
console.log(typeof(array));
//type1
obj={
    firstname:"sri",lastname:"Eshwar"
}
console.log(obj);
console.log(typeof(obj));
console.log(obj.firstname);
console.log(obj["firstname"]);
//type 2
obj1={}
console.log(obj1);
obj1["dept"]="cse"
obj1['sec']="A"
console.log(obj1);
//type 3
obj2=new Object()
console.log(obj2);
obj2.count="cse"
obj2['present']=69
console.log(obj2);*/

//Set
set = new Set(["helloa",1,2,"SECE"])
console.log(typeof(set))
console.log(set);
/*method 1
for (const item of set) {
    console.log(item); 
  }
*/
/*method 2
const arrayFormat = [...set];
console.log(arrayFormat[3]);
*/
/*method 3
const iterator = set.values();
console.log(iterator.next().value); 
*/
