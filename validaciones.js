const inputs = document.querySelectorAll('.formcontato__input, .formcontato__textarea');

inputs.forEach(input => {
    input.addEventListener("blur", (event) => {
       console.log(event.target);
        valida(event.target);
    });
});


function valida(input) {
    const tipoInput = input.dataset.tipo;
 

    if (input.validity.valid) {
        input.parentElement.classList.remove("form__group--invalid");
       input.parentElement.querySelector('.input-message-error').innerHTML = '';
    } else {
        input.parentElement.classList.add("form__group--invalid");
        input.parentElement.querySelector('.input-message-error').innerHTML = mostrarMensajeError(tipoInput, input);
    }
}

const tipoErrores = [
    'valueMissing', 'typeMismatch', 'patternMismatch'
];

const mensajesError = {
    nombre: {
        valueMissing: 'Este campo no puede estar vacío',
    },
    email: {
        valueMissing: 'Este campo no puede estar vacío',
        typeMismatch: 'El correo no es válido'
    },
 
    asunto: {
        valueMissing: 'Este campo no puede estar vacío',
        patternMismatch: 'El asunto debe tener entre 10 y 40 caracteres'
    },
    mensaje: {
        valueMissing: 'Este campo no puede estar vacío',
       // patternMismatch: 'El mensaje debe tener entre 10 y 300 caracteres'
    }
}

function mostrarMensajeError(tipoInput, input) {
    let mensaje = '';
    tipoErrores.forEach( error => {
        if(input.validity[error]) {
            console.log(error);
          mensaje = mensajesError[tipoInput][error];
        }
    });
    return mensaje;
}
