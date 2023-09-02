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