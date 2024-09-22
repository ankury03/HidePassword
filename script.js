const icon = document.querySelector("#icon");
const password = document.querySelector("#password");

icon.onclick = function(){
    if(password.type == "password"){
        password.type = "text"
        icon.src = "eye-open.png"
    }else{
        password.type = "password"
        icon.src = "eye-close.png"
    }
}