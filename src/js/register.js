
var form = document.querySelector("form");
var userList = localStorage.getItem("users")
var arrList 
form.addEventListener('submit', (e)=> {e.preventDefault(); validateFields()})

    

function validateFields(){
    var user = document.querySelector(".input.user").value;
    var email = document.querySelector(".input.email").value;
    var password = document.querySelector("input.pass").value;
    if ((user != null || "" || undefined ) && (email != null || "") && (password != null || "")) {
        let newUs ={"user":user,"email":email,"password":password}
        registerUser(newUs)
    }
}

function registerUser(newUs) {

    
    if (userList == null) {
        arrList = []
        arrList.push(newUs)
        console.log(arrList)
    }else {
        arrList = JSON.parse(userList)
        arrList.push(newUs)
        console.log(arrList)
    } 
       
    localStorage.setItem("users", JSON.stringify(arrList))
    
    //window.location.href='/index.html'  
   
}