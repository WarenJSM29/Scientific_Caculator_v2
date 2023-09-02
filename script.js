// Función para eliminar el último carácter del input de texto
function DeleteCharacter(event) {
    let input = document.getElementById("display");
    
    // Verifica si se presionó la tecla Backspace (código de tecla 8)
    if (event.keyCode === 8) {
        let ActualValue = input.value;
        input.value = ActualValue.slice(0, -1); // Elimina el último carácter
    }
}

// Función para eliminar el último carácter del input de texto al hacer clic en el botón "Eliminar"
function DeleteLastCharacter() {
    let input = document.getElementById("display");
    let ActualValue = input.value;
    input.value = ActualValue.slice(0, -1); // Elimina el último carácter
}

//Valor PI
function PIValue() {
    return Math.PI;
}

const π = PIValue();