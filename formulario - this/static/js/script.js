// =====================
// EJERCICIO 1
// =====================
function resaltar(elemento) {
    elemento.style.backgroundColor = "#dff0ff";
}

function normal(elemento) {
    elemento.style.backgroundColor = "white";
}


// =====================
// EJERCICIO 2
// =====================
function validarFormulario(formulario) {
    let correo = formulario.correo.value;

    if (correo === "") {
        document.getElementById("mensaje1").textContent =
            "El correo no puede estar vacío";
        return false;
    }

    document.getElementById("mensaje1").textContent =
        "Formulario enviado correctamente";

    return false; // 🔥 evita que se recargue la página
}


// =====================
// EJERCICIO 3
// =====================
function resaltarBorde(elemento) {
    elemento.style.border = "2px solid blue";
}

function validar(formulario) {
    let nombre = formulario.nombre.value;
    let edad = formulario.edad.value;

    if (nombre === "" || edad === "") {
        document.getElementById("mensaje2").textContent =
            "Todos los campos son obligatorios";
        return false;
    }

    document.getElementById("mensaje2").textContent =
        "Formulario enviado correctamente";

    formulario.reset();
    return false;
}