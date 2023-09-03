// Obtén los elementos por su ID
let input = document.getElementById('display');
let del = document.getElementById('Delete');

// Agrega un evento al botón para eliminar el último carácter
del.addEventListener('click', function() {
    let inputValue = input.value;

    // Verifica si el campo de entrada tiene algún valor
    if (inputValue.length > 0) {
        // Elimina el último carácter del valor del campo de entrada
        input.value = inputValue.slice(0, -1);
    }
});

// Agrega un evento para detectar la tecla "Backspace"
input.addEventListener('keydown', function(event) {
    // Verifica si la tecla presionada es la tecla "Backspace" (código 8)
    if (event.keyCode === 8) {
        event.preventDefault(); // Evita que el navegador retroceda en la historia
        let inputValue = input.value;
                
        // Verifica si el campo de entrada tiene algún valor
        if (inputValue.length > 0) {
            // Elimina el último carácter del valor del campo de entrada
            input.value = inputValue.slice(0, -1);
        }
    }
});
//---------------------------

//Valor PI
const π = Math.PI;

//-----------------------
let modo = "radianes"; // Inicialmente, la calculadora está en modo radianes

// Función para cambiar entre grados y radianes
function cambiarModo() {
    let botonCambiarModo = document.getElementById("botonCambiarModo"); // Supongamos que tienes un botón con el id "botonCambiarModo"

    if (modo === "radianes") {
    modo = "grados";
    botonCambiarModo.value = "Deg";
    // Aquí puedes realizar cualquier acción necesaria para cambiar la interfaz a modo grados
    } else {
    modo = "radianes";
    botonCambiarModo.value = "Rad";
    // Aquí puedes realizar cualquier acción necesaria para cambiar la interfaz a modo radianes
    }
}

//Funcion Trigonometrica Seno
function sin(value) {
    if (modo === "radianes") {
        return Math.sin(value);
    }
    else if (modo === "grados") {
        // Convertir de grados a radianes antes de calcular el seno
        let radianes = value * (Math.PI / 180);
        return Math.sin(radianes);
    }
}

//Funcion Trigonometrica Coseno
function cos(value) {
    if (modo === "radianes") {
        return Math.cos(value);
    }
    else if (modo === "grados") {
        // Convertir de grados a radianes antes de calcular el coseno
        let radianes = value * (Math.PI / 180);
        return Math.cos(radianes);
    }
}

//Funcion Trigonometrica Tangente
function tan(value) {
    if (modo === "radianes") {
        return Math.tan(value);
    }
    else if (modo === "grados") {
        // Convertir de grados a radianes antes de calcular la tangente
        let radianes = value * (Math.PI / 180);
        return Math.tan(radianes);
    }
}

// Ejemplo de uso en un botón
let botonCambiarModo = document.getElementById("botonCambiarModo"); // Supongamos que tienes un botón con el id "botonCambiarModo"
botonCambiarModo.addEventListener("click", cambiarModo);
//-----------------------

//Raiz Cuadrada
function sqrt(value) {
    return Math.sqrt(value);
}

//Logaratimo en Base 10
function log(value) {
    return Math.log10(value);
}

//Logaritmo Natural
function ln(value) {
    return Math.log(value);
}

//-------------------------
function insertText(Text) {
    let input = document.getElementById("display");
    let start = input.selectionStart;
    let end = input.selectionEnd;
    let value = input.value;

    // Insertar el texto en la posición del cursor
    let newValue = value.substring(0, start) + Text + value.substring(end);

    // Actualizar el valor del campo de entrada
    input.value = newValue;

    // Ajustar la posición del cursor después de la inserción
    input.setSelectionRange(start + Text.length, start + Text.length);

    // Enfocar nuevamente el campo de entrada
    input.focus();
}

//-------------------------
// Función para mover el cursor hacia adelante o hacia atrás en el input de texto
function MoveCursor(direction) {
    let input = document.getElementById("display");
    let currentPosition = input.selectionStart;

    if (direction === 'forward' && currentPosition < input.value.length) {
        input.setSelectionRange(currentPosition + 1, currentPosition + 1);
    } else if (direction === 'backward' && currentPosition > 0) {
        input.setSelectionRange(currentPosition - 1, currentPosition - 1);
    }
    
    input.focus();
}