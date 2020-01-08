
var form = document.querySelector(".login__container--input");  
form.addEventListener('submit', validateUser);

function validateUser(e) { 
    e.preventDefault()
    var userList = localStorage.getItem("users"); 
    var userArr = JSON.parse(userList)
    let user = document.querySelector(".input.user").value
    let pass = document.querySelector(".input.pass").value
    userArr.forEach((element) => {
        if((element.user === user) && (element.password === pass)){
            window.location.href="./src/pages/main.html"
        }
    })
}
