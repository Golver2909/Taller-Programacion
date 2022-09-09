import Persona from "./persona.js";

function mostraringresado(){
    const name= document.getElementById("nombre").value;
    const surname= document.getElementById("apellido").value;
    const id= document.getElementById("dni").value;

    let persona= new Persona(name,surname,id);

    persona.mostrar_datos();
}

const botonsubir= document.getElementById("botonsubir");
botonsubir.addEventListener("click",mostraringresado);