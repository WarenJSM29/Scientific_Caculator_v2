// Función para eliminar el último carácter del input de texto
function DeleteCharacter(event) {
    let input = document.getElementById("display");
    
    // Verifica si se presionó la tecla Backspace (código de tecla 8)
    if (event.keyCode === 8) {
        let actualValue = input.value;
        input.value = actualValue.slice(0, -1); // Elimina el último carácter
    }
}

// Función para eliminar el último carácter del input de texto al hacer clic en el botón "Eliminar"
function DeleteCharacterButton() {
    let input = document.getElementById("display");
    let actualValue = input.value;
    input.value = actualValue.slice(0, -1); // Elimina el último carácter
}

//Valor PI
function PIValue() {
    return Math.PI;
}

const π = PIValue();

//Funcion Trigonometrica Seno
function sin(value) {
    return Math.sin(value);
}

//Funcion Trigonometrica Coceno
function cos(value) {
    return Math.cos(value);
}

//Funcion Trigonometrica Tangente
function tan(value) {
    return Math.tan(value);
}

//Raiz Cuadrada
function sqrt(value) {
    return Math.sqrt(value);
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