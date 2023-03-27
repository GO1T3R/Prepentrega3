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

    if(promedio > 6 && promedio <= 10) {
        obs =value= "!Aprobado¡ &#x2714";
    } else {
        obs =value= "!Desaprobado¡ &#x274c";
    }
//    console.log(obs)
    agregartabla();
}

function agregartabla() {
    tabla.innerHTML = `
    <td>${nombre.value}</td>
    <td>${nota1.value}</td>
    <td>${nota2.value}</td>
    <td>${nota3.value}</td>
    `;

    
    

}