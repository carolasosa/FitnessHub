var formulario = document.getElementsByName('formulario')[0],  //[0] Primer elemento, el formulario en si mismo.
      boton = document.getElementById('b1') // El botón

var validarNombre = function (x) {
    if (formulario.nombre.value == 0) {
        alert("Complete el campo Nombre")
        x.preventDefault()
    }
}

var validarApellido = function (x) {
    if (formulario.apellido.value == 0) {
        alert("Complete el campo Apellido")
        x.preventDefault()
    }
}

var validarPlan = function (x) {
    if (formulario.plan[0].checked == true ||
        formulario.plan[1].checked == true ||
        formulario.plan[2].checked == true) {
    } else {
        alert("Seleccione un Plan")
        x.preventDefault()
    }
}

var validarHorario = function (x) {
    if (formulario.horario[0].checked == true ||
        formulario.horario[1].checked == true ||
        formulario.horario[2].checked == true) {
    } else {
        alert("Seleccione un Horario")
        x.preventDefault()
    }
}

var validarTelefono = function (x) {
    if (formulario.telefono.value == 0) {
        alert("Ingrese su teléfono: sólo números sin espacios ni caracteres especiales")
        x.preventDefault()
    }
}

var validarEmail = function (x) {
    if (formulario.correo.value == 0) {
        alert("Ingrese su Correo Electrónico")
        x.preventDefault()
    }
}

var validarComentario = function (x) {
    if (formulario.consulta.value == 0) {
        alert("Ingrese su Comentario o Consulta")
        x.preventDefault()
    }
}

var validar = function (x) {
    validarNombre(x)
    validarApellido(x)
    validarTelefono(x)
    validarEmail(x)
    validarPlan(x)
    validarHorario(x)
    validarComentario(x)
}

formulario.addEventListener("submit", validar)