export default class Persona{

    constructor(name,surname,id){
        this.nombre=name;
        this.apellido=surname;
        this.dni=id;
    }

    mostrar_datos(){
        this.nombre=this.nombre.split(" ").join("");
        this.apellido=this.apellido.split(" ").join("");

        if(this.nombre=="" || this.apellido=="" || this.dni==""){
            console.log('Complete todos los campos obligatorios');
        }else{
            console.log(`Nombre completo: ${this.nombre} ${this.apellido}`);
            console.log(`DNI: ${this.dni}`);
        }
        
        
    }
}