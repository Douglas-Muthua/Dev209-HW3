/* the < fieldset > element provides a grouping for a part of an HTML form, 
with a nested < legend > element providing a caption for the<fieldset>.
It takes few attributes, the most notable of which are form, 
which can contain the id of a < form > on the same page, allowing you to 
make the < fieldset > part of that < form > even if it is not nested inside it, 
and disabled, which allows you to disable the < fieldset > and all its contents in one go.
https://developer.mozilla.org/en-us/docs/web/html/element/fieldset
*/
document.addEventListener("DOMContentLoaded", function (event) {
    // disable the lower part of the form until we have user input for all values
    document.getElementById("ExistingUser").disabled = true;
    document.getElementById("NewUser").disabled = true;
})
function NewUser(){
    document.getElementById("NewUser").disabled =false;

}

function ExistingUser(){
    document.getElementById("ExistingUser").disabled =false;

}
function login() {
    let UserName = document.getElementById("UserName").value;
    let Password = document.getElementById("Password").value;
    let city = document.getElementById("city").value;
    let state = document.getElementById("state").value;
    
    let Username_Storage = UserName;
    let Password_Storage = Password;



    


    // we could do much better validation, but that's not the point of this example!
    if (UserName.length > 2 && Password.length > 2 && city.length > 2 && state.length > 1 ) {
        document.getElementById("ExistingUser").disabled = false;
        document.getElementById("UserName").value = UserName;
        document.getElementById("Password").value = Password;
        
        Username_Storage = localStorage.setItem("Uname",Username_Storage);  
        Password_Storage = localStorage.setItem("Pass", Password_Storage);

        alert("Welcome");
    }
    else {
        alert("please fill in all fields");
    }

    return Username_Storage, Password_Storage
}

console.log(localStorage.getItem("Uname"));
//console.log(Password_Storage);

function ExistingUser_login(){

    let Stored_Username = localStorage.getItem("Uname");
    let Stored_Password = localStorage.getItem("Pass");

    console.log(Stored_Username);
    console.log(Stored_Password);
    



    

    if(document.getElementById("UserName2").value === Stored_Username && document.getElementById("Password2").value === Stored_Password){
        alert("welcome " + Stored_Username);
    }
    else{
        alert("nah fam");
    }


console.log(document.getElementById("UserName2").value);
console.log(document.getElementById("Password2").value);

    

    
    //let Stored_Username = localStorage.getItem("username");
    //let Stored_Password = localStorage.getItem("Password");
// make sure that the session get item is correct 
  //figure out how to do a windows alert to verify that you have loged in with the right credentials 
//make the button for existing user work






}