
const miFormulario = document.querySelector("#my-form");
miFormulario.focus();

function eventoSubmit(evento) {
    evento.preventDefault()
   
    const inputs = evento.target.elements;

    const contenido = inputs["contenido"].value;
    const altura =  inputs["altura"].value;
    const ancho = inputs["ancho"].value;

    const elementoCaja = document.querySelector("#caja")
    elementoCaja.textContent = contenido;

    elementoCaja.style.width = ancho + 'px'

    elementoCaja.style.height = altura + 'px'
    miFormulario.reset()
    miFormulario.focus()
}

miFormulario.addEventListener("submit", eventoSubmit)
