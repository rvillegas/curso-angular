export class Maquinaria {
    codigo:string;
    descripcion:string;
    marca:string;
    modelo:string;
    horometro:number;

    constructor(c:string , d:string, mr:string, md:string, hr:number){
        this.codigo=c;
        this.descripcion=d;
        this.marca=mr;
        this.modelo=md;
        this.horometro=hr;
    }
}