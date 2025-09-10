const form = document.getElementById("formUsuario");
const mensaje = document.getElementById("mensaje");
const listaUsuarios = document.getElementById("listaUsuarios");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    
    const nombre = document.getElementById("nombre").value.trim();
    const edad = Number(document.getElementById("edad").value);
    
    if (nombre === "") {
        alert("El nombre no puede estar vacío");
        return;
    }
    
    if (edad <= 0) {
        alert("La edad debe ser mayor a 0");
        return;
    }

    // Mensaje de bienvenida
    if (edad < 18) {
        mensaje.innerText = `Hola ${nombre}, eres menor de edad.`;
    } else {
        mensaje.innerText = `Hola ${nombre}, bienvenido/a.`;
    }
    
    // Crear objeto usuario
    let usuario = { nombre, edad };
    console.log(usuario);
    
    // Agregar a la lista en pantalla
    const li = document.createElement("li");
    li.innerText = `${nombre} - ${edad} años`;
    listaUsuarios.appendChild(li);
    
    // Limpiar formulario
    form.reset();
});
