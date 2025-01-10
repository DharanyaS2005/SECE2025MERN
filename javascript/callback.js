//callback
/*function submitForm(submit,dbName) { 
    var [dbName,comment]=db()
    console.log("DB name is",dbName,comment);
    console.log(submit);
}
function database(){
    dbName="SECE"
    return [dbname,"data stored Successfully"]
    //console.log(("Form validation successfull!!"));
}
submitForm("Form submitted successfully",database)*/

function submitForm(submit,isFormValid){
    if(isFormValid()){
        console.log("Form validated successfully");
        console.log(submit);
    }
    else{
        console.log("Form validation failed")
        console.log("Form submition unsuccessfull");
    }

}
function formValidation(){
    email="sece@sece.ac.in"
    password="12345678"
    if(email==="sece@sece.ac.i"&& password){
        return true;
    }
    else{
        return false;
    }
}
submitForm("Form submitted successfully",formValidation)