function searchBook(event) {
    event.preventDefault(); 
    
    var searchQuery = document.getElementById("searchQuery").value.trim().toLowerCase();
    var resultContainer = document.getElementById("resultContainer");
    var bookImage = document.getElementById("bookImage");
    var bookQuantity = document.getElementById("bookQuantity");
    var bookLibraries = document.getElementById("bookLibraries");

    // Realiza la búsqueda y muestra los resultados
    if (searchQuery === "habitos atomicos") {
        bookImage.src = "habitos.jpg";
        bookImage.alt = "Hábitos Atómicos";
        bookQuantity.textContent = "10";

        // Muestra las librerías
        var libraries = ["Librería A", "Librería B", "Librería C"];
        displayLibraries(libraries);

        resultContainer.style.display = "block";
    } else {
        // Puedes manejar otros casos o mostrar un mensaje de error
        resultContainer.style.display = "none";
        alert("Libro no encontrado.");
    }
}

function displayLibraries(libraries) {
    var bookLibraries = document.getElementById("bookLibraries");
    bookLibraries.innerHTML = ""; // Limpia la lista antes de mostrar las nuevas librerías

    for (var i = 0; i < libraries.length; i++) {
        var listItem = document.createElement("li");
        listItem.textContent = libraries[i];
        bookLibraries.appendChild(listItem);
    }
}
