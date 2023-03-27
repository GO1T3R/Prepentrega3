let nombre = document.getElementById('name');
let nota1 = document.getElementById('nota1');
let nota2 = document.getElementById('nota2');
let nota3 = document.getElementById('nota3');
const boton = document.querySelector('.btn-send');
const tabla = document.getElementById('addtabla');

cargarEventListener();
// Cargar EventListener
function cargarEventListener() {
    boton.addEventListener('click', sacarPromedio);
}

function sacarPromedio(e) {
    e.preventDefault();
    let promedio = (parseFloat(nota1.value) + parseFloat(nota2.value) + parseFloat(nota3.value))/3;
    let obs;

    // condicion por si no se rellena las inputs
    if(nombre.value === ""){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Te falto rellenar el nombre del alumno'
          })
    }if(nota1 === ""||nota2=== ""|| nota3 === "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Te falto llenar una nota!'
          })
    }

    // Condicion por si pasa o no
    if(promedio > 6 && promedio <= 10) {
        obs =value= "Aprobado &#x2714"; 
    }else {
        obs =value= "Desaprobado &#x274c";
    }

    agregartabla(promedio, obs);
 }

//  Se agrega en el html
function agregartabla(promedio, obs) {
    tabla.innerHTML = `
    <td>${nombre.value}</td>
    <td>${nota1.value}</td>
    <td>${nota2.value}</td>
    <td>${nota3.value}</td>
    <td>${promedio.toFixed(1)}</td>
    <td>${obs}</td>
    `;
}
