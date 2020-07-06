export class Maquinaria {
    codigo: string;
    descripcion: string;
    marca: string;
    modelo: string;
    horometro: number;
    private seleccionado: boolean;
    private tipo: string;
    constructor(c: string, d: string, mr: string, md: string, hr: number) {
        this.codigo = c;
        this.descripcion = d;
        this.marca = mr;
        this.modelo = md;
        this.horometro = hr;
    }
    estaSeleccionado(): boolean {
        return this.seleccionado;
    }
    setSeleccionado(s: boolean) {
        this.seleccionado = s;

    }
    getTipo() {
        var splitted = this.codigo.split("-", 2);
        if (splitted.length > 1) {
            this.tipo = splitted[0];
        }
        else { this.tipo = "" }
        return this.tipo;
    }
}