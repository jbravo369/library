function checkCredentials() {
    var usernameInput = document.getElementById("username");
    var passwordInput = document.getElementById("password");

    var username = usernameInput.value.trim();
    var password = passwordInput.value.trim();

    // Verifica las credenciales
    if (username == "jakie" && password == "123") {
        
        window.location.href = "menu.html";
    } else {
        
        alert("Nombre de usuario o contraseña incorrectos. Inténtalo de nuevo.");
    }
}
