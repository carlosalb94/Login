
var form = document.querySelector(".login__container--input");  
form.addEventListener('submit', validateUser);

function validateUser(e) { 
    e.preventDefault()
    const userList = localStorage.getItem("users"); 
    const userArr = JSON.parse(userList);
    const user = document.querySelector(".input.user").value;
    const pass = document.querySelector(".input.pass").value;
    userArr.forEach((element) => {
        if((element.user === user) && (element.password === pass)){
            window.location.href="./src/pages/main.html"
        }
    })
}
