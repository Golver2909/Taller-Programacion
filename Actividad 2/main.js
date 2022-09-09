import Pitagoras from "./pitagoras.js";

const ejecutar_operacion=()=>{
    const cateto1= document.getElementById("catetoopuesto").value.split(" ").join("");
    const cateto2= document.getElementById("catetoadyacente").value.split(" ").join("");

    let hipotenusa= new Pitagoras();

    hipotenusa.cateto1= cateto1;
    hipotenusa.cateto2= cateto2;

    hipotenusa.calcularhipotenusa();
}

document.getElementById("botonpitagoras").addEventListener("click",ejecutar_operacion);