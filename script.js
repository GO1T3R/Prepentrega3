let nombre = document.getElementById('name');
let nota1 = document.getElementById('nota1');
let nota2 = document.getElementById('nota2');
let nota3 = document.getElementById('nota3');
const boton = document.querySelector('.btn-send');
const tabla = document.getElementById('addtabla');

let infoAlumno = [];


cargarEventListener();
// Cargar EventListener
function cargarEventListener() {
    boton.addEventListener('click', sacarPromedio);
}

function sacarPromedio(e) {
    e.preventDefault();
    let promedio = (parseFloat(nota1.value) + parseFloat(nota2.value) + parseFloat(nota3.value))/3;
    let obs;

    // Condicion si se rellena los inputs
    if(nombre.value === ""){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Te falto agregar el nombre'
          })
    }if(nota1 === ""||nota2=== ""|| nota3 === "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Te falto llenar una nota!'
          })
    }

    // condicion si el alumno pasa o no
    if(promedio >= 7 && promedio <= 10) {
        obs =value= "Aprobado &#x2714"; 
    }else {
        obs =value= "Desaprobado &#x274c";
    }
    leerNotas();
    agregartabla(promedio, obs);
}

function leerNotas() {
     
    let infoNotas = {
        Alumno: nombre.value,
        CalificacionUno: nota1.value,
        CalificacionDos: nota2.value,
        CalificacionTres: nota2.value,
    }

    infoAlumno = [...infoAlumno, infoNotas];

    console.log(infoAlumno);

   
}

// Agrega los datos ingresado en tabla HTML
function agregartabla(promedio, obs) {
    
    infoAlumno.forEach(notas => {
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
    })
    
    limpiarHTML();

}


//Limpiar el HTML para evitar que se repitan los objectos 
function limpiarHTML() {
   infoAlumno.shift();
}

