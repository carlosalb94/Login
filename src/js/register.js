
const form = document.querySelector("form");
let arrList = JSON.parse(localStorage.getItem("users"));
form.addEventListener('submit', (e)=> {
    e.preventDefault(); validateFields()
})


function validateFields() {
    const user = document.querySelector(".input.user").value;
    const email = document.querySelector(".input.email").value;
    const password = document.querySelector("input.pass").value;
    if ((user != "" || undefined ) && (email != null || "") && (password != null || "")) {
        const newUs = {
            "user":user,
            "email":email,
            "password":password
        };
        registerUser(newUs);
    }
}


const registerUser = newUs => {
    if (!arrList) {
        arrList = [];
    }
    if (newUs) {
        arrList.push(newUs);
        localStorage.setItem("users", JSON.stringify(arrList));
        window.location.href='/index.html';  
    }
   
}
