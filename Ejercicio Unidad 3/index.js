const btn = document.getElementById("loginButton");
const user = document.getElementById("user");
const password = document.getElementById("password");
btn.addEventListener("click", function() {
    user.setCustomValidity("")
    password.setCustomValidity("")
    if ((user.value == "" || user.value == null)) {
        user.setCustomValidity("El campo no puede estar vacío.")
    }
    else {
        if (!(user.value.includes("@"))){
            user.setCustomValidity("Ingrese un correo valido.")
        }
    }
    if(password.value == "") {
        password.setCustomValidity("El campo \"password\" no puede estar vacío.")
    }
});
