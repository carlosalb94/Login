import data from '/data.js';

var btn = document.getElementById("#submit");

document.addEventListener("submit", function(e){e.preventDefault()})

btn.addEventListener("click", validateF)

function validateF() { 
    
    var user = document.getElementById("#user").value
    let pass = document.getElementById("#password").value 
    
    data.users.map((element)=>{
        if(element.user === user && element.password === pass){window.location.href='./maquetacion-principal.html';} 
    })
}
