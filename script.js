const form = document.getElementById("formUsuario");
const mensaje = document.getElementById("mensaje");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let nombre = document.getElementById("nombre").value.trim();
    let edad = parseInt(document.getElementById("edad").value);

    if (edad <= 0 || !Number.isInteger(edad)) {
        alert("La edad debe ser un número mayor a 0.");
        return;
    }

    if (edad < 18) {
        mensaje.innerText = `Hola ${nombre}, eres menor de edad.`;
    } else {
        mensaje.innerText = `Hola ${nombre}, bienvenido/a.`;
    }

    let usuario = {
        nombre: nombre,
        edad: edad
    }

    console.log("Objeto usuario:", usuario)

    let jsonUsuario = JSON.stringify(usuario);
    console.log("JSON:", jsonUsuario);

    guardarDatos()
        .then((respuesta) => {
            console.log(respuesta);
            mensaje.innerText += `\n${respuesta}`;
        });
    })

function guardarDatos() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("✅ Datos guardados exitosamente")
        }, 2000);
    })
}