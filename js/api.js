// Validación de formulario





// Consumo de API Randomuser

const boton = document.querySelector('#boton');
const foto = document.querySelector('#foto');
const nombre = document.querySelector('#nombre');
const apellido = document.querySelector('#apellido')
const correo = document.querySelector('#correo');
const telefono = document.querySelector('#telefono');
const direccion = document.querySelector('#direccion')
const direccionN = document.querySelector('#direccionN')


const generarUsuario = async () => {
    try {
        const url = 'https://randomuser.me/api/';
        const respuesta = await fetch(url);
        const { results } = await respuesta.json();
        const datos = results[0];
        console.log(datos);
        foto.src = datos.picture.large;
        nombre.textContent = datos.name.first
        apellido.textContent = datos.name.last
        correo.textContent = datos.email
        telefono.textContent = datos.phone 
        direccion.textContent = datos.location.street.name
        direccionN.textContent = datos.location.street.number
    } catch (error) {
      console.log(error); 
    }
}

boton.addEventListener('click', generarUsuario)
document.addEventListener('DOMContentLoaded', generarUsuario)

    