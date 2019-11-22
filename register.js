
document.addEventListener("submit", function(e){e.preventDefault()})
var newUs = []
var btn = document.getElementById("#button")
btn.addEventListener("click", registerUser)

function registerUser() {
    var user = document.getElementById("#user").value;
    var email = document.getElementById("#email").value;
    var pass = document.getElementById("#password").value;
    if( user != undefined && email != undefined && pass != undefined){
        
        newUs.push({
        
            "user":user,
            "email": email,
            "password": pass
        
        })

    }
   localStorage.setItem("users",JSON.stringify(newUs))    
   
}