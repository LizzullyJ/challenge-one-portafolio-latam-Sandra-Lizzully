function validarFormulario() {
    // Obtener los valores de los campos del formulario
    var nombre = document.forms["form"]["nombre"].value;
    var email = document.forms["form"]["email"].value;
    var asunto = document.forms["form"]["asunto"].value;
    var mensaje = document.forms["form"]["mensaje"].value;

    // Validar que los campos no estén vacíos
    if (nombre === "" || email === "" || asunto === "" || mensaje === "") {
      alert("Por favor, complete todos los campos del formulario.");
      return false; // Evita que se envíe el formulario
    }

    // Validar el formato del correo electrónico
    var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!email.match(emailRegex)) {
      alert("Por favor, ingrese un correo electrónico válido.");
      return false;
    }

    // Si todo está correcto, el formulario se envía
    return true;
  }