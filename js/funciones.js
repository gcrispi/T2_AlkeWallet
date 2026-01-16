


function validarFormulario() {
    // Obtener los valores de los campos del formulario
    console.log("Validando formulario...");
    var nombre = document.forms["frmLogin"]["nombre"].value;
    var email = document.forms["frmLogin"]["email"].value;
    var password = document.forms["frmLogin"]["password"].value;
    //imprimir en consola los valores obtenidos
    console.log(nombre, email, password);

    // Validar que los campos no estén vacíos
    if (nombre == "" || email == "" || password == "" ) {
        alert("Todos los campos deben ser completados.");
        return false;
    }
    //Ejemplo nombre Ana
    if (nombre.length < 3) {
        alert("El nombre debe tener al menos 3 caracteres.");
        return false;
    }
    // Validar formato del email - apoyo expresiones regulares desde IA
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;    
    if (!emailPattern.test(email)) {
        alert("Por favor, ingrese un email válido.");
        return false;
    }
    // Validar longitud mínima de la contraseña
    if (password.length < 6) {
        alert("La contraseña debe tener al menos 6 caracteres.");
        return false;
    }   
    // Si todas las validaciones pasan
    alert("Formulario enviado correctamente.");
    return true;
}



function validarfrmEnvio() {
    console.log("Validando formulario de envío...");
    var destino = document.getElementById("txtDestino").value;
    var monto = document.getElementById("txtMonto").value;
    var nota = document.getElementById("txtNota").value;
    console.log(destino, monto, nota);  
    if (destino == "" || monto == "") {
        alert("Los campos Destinatario y Monto son obligatorios.");
        return false;
    }
    if (isNaN(monto) || monto <= 0) {
        alert("El monto debe ser un número positivo.");
        return false;
    }
    alert("Formulario de envío validado correctamente.");
    document.getElementById("mensajeModal").innerHTML =
        "<p>Dinero enviado correctamente a " + destino + " por un monto de $" + monto + ".</p>"; 
    return true;
}

function validarfrmDeposito() {
    console.log("Validando formulario de depósito...");
    let cuenta = document.getElementById("txtCuenta").value;
    let monto = document.getElementById("txtMonto").value;
    console.log(monto,cuenta);
    if (monto == "" || cuenta == "") {
        alert("Los campos Monto y Cuenta son obligatorios.");
        return false;
    }
    if (isNaN(monto) || monto <= 0) {
        alert("El monto debe ser un número positivo.");
        return false;
    }
    alert("Formulario de depósito validado correctamente.");
    document.getElementById("mensajeModal").innerHTML =
        "<p>Depósito realizado correctamente por un monto de $" + monto + " en la cuenta " + cuenta + ".</p>"; 
    return true;
}

function usarioLogueado() {
    // Simular que el usuario ha iniciado sesión
    var usuario = {
        nombre: "Juan Perez",
        email: "juan.perez@ejemplo.cl"
    };
    return usuario;
}