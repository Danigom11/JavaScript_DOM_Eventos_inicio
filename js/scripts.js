// querySelector  devuelve 0 o 1 enlace que concuerde con el selector
// usar id con javascript no con css
const heading = document.querySelector('.header__texto h2') // retorna 0 o 1 elemento  máximo
// se puede modificar texto, clases... con js
// heading.textContent = 'Nuevo Heading'
console.log(heading);


// querySelectorAll  devuelve todos los enlaces que concuerden con el selector
const enlaces = document.querySelectorAll('.navegacion a');
console.log(enlaces[0]); // se puede acceder a cada uno con su posición

enlaces[0].textContent = 'Nuevo texto para enlace'
//enlaces[0].href = 'http://google.com'
enlaces[0].classList.add('nueva-clase');
// enlaces[0].classList.remove('navegacion__enlace')

// es para añadir más dinamismo
// si los datos vienen de una base de datos o del usuario
// mejor generar el html con js
// Generar enlace
const nuevoEnlace = document.createElement('A');
// Agregar el href
nuevoEnlace.href = 'nuevo-enlace.html'

// Agregar texto
nuevoEnlace.textContent = 'Tienda virtual'

// Agregar clase
nuevoEnlace.classList.add('navegacion__enlace')

// Agragarlo al documento
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);

console.log(nuevoEnlace);

// getElementById  se usa menos. Antigûa
const heading2 = document.getElementById('heading');
console.log(heading2);


// Eventos

console.log(1);

// Load espera a que el JS y los archivos que dependen del html estén listos
// evento que espera que cargue totalmente la ventana
window.addEventListener('load', imprimir)

// Load de otra forma
window.onload = function () {
    console.log(3);
}

// Solo espera el html y no css o imágenes
// se usa más por que es más rápido
document.addEventListener('DOMContentLoaded', function () {
    console.log(4);
});


console.log(5);

function imprimir() {
    console.log(2);
}

window.onscroll = function (evento) {

    //console.log(evento);
}


// Seleccionar elementos y asociarles un evento
// const btnEnviar = document.querySelector('.boton--primario');
// btnEnviar.addEventListener('click', function(evento){
//     console.log(evento);
//     evento.preventDefault(); // previene la acción por defecto
//     // se suele usar para validar un formulario
//     console.log('enviando formulario');
// })




// Eventos de los inputs y textarea
const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

const nombre = document.querySelector('#nombre')
const email = document.querySelector('#email')
const mensaje = document.querySelector('#mensaje')
const formulario = document.querySelector('.formulario');

nombre.addEventListener('input', leerTexto)
email.addEventListener('input', leerTexto)
mensaje.addEventListener('input', leerTexto)
// Evento de submit
formulario.addEventListener('submit', function (evento) {
    evento.preventDefault();

    // Validar el formulario

    const { nombre, email, mensaje } = datos;

    if (nombre === '' || email === '' || mensaje === '') {
        mostrarAlerta('Todos los campos son obligatorios', true);
        return; // Corta la ejecución del código
    }

    // Crear alerta envío correcto del formulario
    mostrarAlerta('Formulario enviado correctamente. ¡Gracias!');
});

function leerTexto(e) {
    //console.log(e.target.value);

    datos[e.target.id] = e.target.value;

    console.log(e.target);

    //console.log(datos);
}

function mostrarAlerta(mensaje, error = null) {
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;

    if(error) {
        error.classList.add('error');
    } else {
        error.classList.add('correcto');
    }
    formulario.appendChild(alerta);

    // Desaparezca después de 5 segundos
    setTimeout(() => {
        alerta.remove();
    }, 5000);
}