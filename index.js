document.addEventListener("DOMContentLoaded", function () {
    const registrationForm = document.getElementById("registrationForm");
    const submitBtn = document.getElementById("submitBtn");
    const responseDiv = document.getElementById("response");

    submitBtn.addEventListener("click", function () {
        const nombre = document.getElementById("name").value;
        const apellido = document.getElementById("username").value;
        const fechaNacimiento = document.getElementById("date").value;

        const formData = {
            name: nombre,
            username: apellido,
            date: fechaNacimiento,
        };

        // Realizar la solicitud HTTP POST
        fetch("https://jsonplaceholder.typicode.com/users", {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then((response) => response.json())
        .then((data) => {
            // Mostrar la respuesta del servidor en la página
            responseDiv.innerHTML = `Respuesta del servidor: <pre>${JSON.stringify(data, null, 2)}</pre>`;
        })
        .catch((error) => {
            console.error("Error al enviar la solicitud:", error);
        });
    });
});