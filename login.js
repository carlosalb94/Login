
var btn = document.getElementById("#submit");
var userList = localStorage.getItem("users"); //Recupero la lista de usuarios
var userArr = JSON.parse(userList)
console.log(userArr)


document.addEventListener("submit", function(e){e.preventDefault()})

btn.addEventListener("click", validateUser)

function validateUser() { 
    
    var user = document.getElementById("#user").value
    var pass = document.getElementById("#password").value 
    
    userArr.map((element)=>{
        if(element.user === user && element.password === pass){
            window.location.href='./maquetacion-principal.html';
        }
    })
}
