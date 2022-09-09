export default class Vehiculo {

    modelo=''

    constructor(km)
    {
        this.klmtro = km
    }

    mostrar_modelo ()
    {
        console.log(this.modelo);   
    }

    mostrar_datos()
    {
        console.log(`El kilometraje de mi vehiculo es igual a ${this.klmtro} km`);
    }

}