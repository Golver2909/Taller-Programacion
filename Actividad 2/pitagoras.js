export default class Pitagoras{

cateto1='';
cateto2='';


constructor(){

}

calcularhipotenusa(){

    if(this.cateto1=='' || this.cateto2==''){
        console.log('Ingrese todos los valores requeridos.');
    }else{
        var hipotenusa= Math.sqrt(Math.pow(this.cateto1,2)+Math.pow(this.cateto2,2));
        console.log(`los catetos de este triangulo son ${this.cateto1} y ${this.cateto2}. Su hipotenusa es ${hipotenusa}.`)
    }
}

}