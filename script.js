let nombre = document.getElementById('name');
let nota1 = document.getElementById('nota1');
let nota2 = document.getElementById('nota2');
let nota3 = document.getElementById('nota3');
const boton = document.querySelector('.btn-send');
const tabla = document.getElementById('addtabla');

let infoAlumno = [];
let promedio;
let obs;

cargarEventListener();
// Cargar EventListener
function cargarEventListener() {
    boton.addEventListener('click', sacarPromedio);
}

function sacarPromedio(e) {
    e.preventDefault();
    promedio = (parseFloat(nota1.value) + parseFloat(nota2.value) + parseFloat(nota3.value)) / 3;

    // let obs = ""

    // Condicion si se rellena los inputs
    if (nota1.value === "" || nota2.value === "" || nota3.value === "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Te falto llenar una nota!'
        })
    }
    if (nombre.value === "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Te falto agregar el nombre'
        })
    }

    // condicion si el alumno pasa o no
    if (promedio >= 7 && promedio <= 10) {
        obs = value = "Aprobado &#x2714";

    } else {
        obs = value = "Desaprobado &#x274c";

    }
    leerNotas(obs);

}

function leerNotas(obs) {

    let infoNotas = {
        Alumno: nombre.value,
        CalificacionUno: nota1.value,
        CalificacionDos: nota2.value,
        CalificacionTres: nota2.value,
    };

    infoAlumno = [...infoAlumno, infoNotas];

    guardarLocal(infoAlumno);
    agregartabla(infoAlumno, obs)
}

// Agrega los datos ingresado en tabla HTML
function agregartabla(infoAlumno, obs) {

    const row = document.createElement('tr')
    row.innerHTML = `
        <td>${nombre.value}</td>
        <td>${nota1.value}</td>
        <td>${nota2.value}</td>
        <td>${nota3.value}</td>
        <td>${promedio.toFixed(1)}</td>
        <td>${obs}</td>
        `;

    // Agregar al html a tbody
    tabla.appendChild(row);
}

// Guardar localStorage
function guardarLocal(infoAlumno) {
    localStorage.setItem("list", JSON.stringify(infoAlumno));
    infoAlumno = JSON.parse(localStorage.getItem("list"));
}

