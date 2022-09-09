import Vehiculo from "./vehiculo.js";


//funcion flecha


const mostrar = () => {
    const km = document.getElementById('numKm').value;
    //Creamos la instancia de la clase que nos va a permitir tener acceso a los metodos y atributos de la clase
    let vehiculo = new Vehiculo(km);
    //ejecute el metodo de la clase
    vehiculo.mostrar_datos();

}

const forma2 =()=>{
    const modelo = document.getElementById("modelo").value;

    let vehiculo = new Vehiculo();
    vehiculo.modelo=modelo;
    vehiculo.mostrar_modelo();
}

const mostrarkm=document.getElementById("botonKm");
mostrarkm.addEventListener("click",mostrar);

const mostrarmod=document.getElementById("botonModelo");
mostrarmod.addEventListener("click",forma2);