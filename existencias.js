function searchBook(event) {
    event.preventDefault(); 
    
    var searchQuery = document.getElementById("searchQuery").value.trim().toLowerCase();
    var resultContainer = document.getElementById("resultContainer");
    var bookImage = document.getElementById("bookImage");
    var bookQuantity = document.getElementById("bookQuantity");

    // Realiza la búsqueda y muestra los resultados
    if (searchQuery === "habitos atomicos") {
        bookImage.src = "habitos.jpg";
        bookImage.alt = "Hábitos Atómicos";
        bookQuantity.textContent = "10";
        resultContainer.style.display = "block";
    } else {
        // Puedes manejar otros casos o mostrar un mensaje de error
        resultContainer.style.display = "none";
        alert("Libro no encontrado.");
    }
}
