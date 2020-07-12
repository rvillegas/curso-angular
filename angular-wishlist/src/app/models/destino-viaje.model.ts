import {v4 as uuid} from 'uuid';

export class DestinoViaje {
    //selected: boolean;
    servicios: string[];
    id = uuid();

    constructor(public nombre: string , public u: string, public votes: number = 0, public selected:boolean = false){
        this.servicios = ['pileta', 'desayuno'];
        this.setSelected(false);
        //this.selected = false;
    }
    isSelected(): boolean {
        return this.selected;
    }
    setSelected(s: boolean) {
        this.selected = s;
    }
    voteUp() {
        this.votes++;
    }
    voteDown() {
        this.votes--;
    }
    
    getById(id: string): DestinoViaje {
        return this;
}
}
