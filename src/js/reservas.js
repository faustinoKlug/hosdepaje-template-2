const d = document;

const $nombre = d.getElementById("nombre"),
    $correo = d.getElementById("correo"),
    $telefono = d.getElementById("telefono"),
    $personas = d.getElementById("personas"),
    $desde = d.getElementById("desde"),
    $hasta = d.getElementById("hasta"),
    $cabanas = d.getElementById("cabanas"),
    $comentarios = d.getElementById("comentarios"),
    $enviarBtn = d.getElementById("enviarBtn");


$enviarBtn.addEventListener("click", (e) => {
    const nombreValue = $nombre.value,
        correoValue = $correo.value,
        telefonoValue = $telefono.value,
        personasValue = $personas.value,
        desdeValue = $desde.value,
        hastaValue = $hasta.value,
        cabanasValue = $cabanas.value,
        comentariosValue = $comentarios.value;

    let whatsappMessage = `
    https://wa.me/3442558577?text=*Reservación:*%0A%0A*Nombre%20y%20apellido:*%0A${encodeURIComponent(nombreValue)}%0A%0A*Correo:*%0A${encodeURIComponent(correoValue)}%0A%0A*Teléfono:*%0A${encodeURIComponent(telefonoValue)}%0A%0A*Personas:*%0A${encodeURIComponent(personasValue)}%0A%0A*Desde:*%0A${encodeURIComponent(desdeValue)}%0A%0A*Hasta:*%0A${encodeURIComponent(hastaValue)}%0A%0A*Cabaña:*%0A${encodeURIComponent(cabanasValue)}
    `;

    let whatsappMessageComentarios = `
    https://wa.me/3442558577?text=*Reservación:*%0A%0A*Nombre%20y%20apellido:*%0A${encodeURIComponent(nombreValue)}%0A%0A*Correo:*%0A${encodeURIComponent(correoValue)}%0A%0A*Teléfono:*%0A${encodeURIComponent(telefonoValue)}%0A%0A*Personas:*%0A${encodeURIComponent(personasValue)}%0A%0A*Desde:*%0A${encodeURIComponent(desdeValue)}%0A%0A*Hasta:*%0A${encodeURIComponent(hastaValue)}%0A%0A*Cabaña:*%0A${encodeURIComponent(cabanasValue)}%0A%0A*Comentarios:*%0A${encodeURIComponent(comentariosValue)}
    `;



    if (
        nombreValue === "" ||
        correoValue === "" ||
        telefonoValue === "" ||
        personasValue === "" ||
        desdeValue === "" ||
        hastaValue === "" ||
        cabanasValue === ""
    ) {
        alert("Rellená todo el formulario");
    } else if (comentariosValue === "") {
        window.open(whatsappMessage);
    } else {
        window.open(whatsappMessageComentarios);
    }

    console.log(nombreValue, correoValue, telefonoValue, personasValue, desdeValue, hastaValue, cabanasValue)
})