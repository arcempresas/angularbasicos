import { Component } from "@angular/core";


@Component({
    selector:'app-heroe',
    templateUrl:'heroe.component.html'
})


export class HeroeComponent{

    public nombre:string="Pocharras";
    public edad:number=52;


    get nombreCapitalizado():string{
        return this.nombre.toUpperCase();
    }


    obtenerNombre():string{
        return `${this.nombre } <> ${ this.edad}`;
    }

    cambiarNombre():void{
        this.nombre="Borrascas";   
    }
    cambiarEdad():void{
        this.edad=30;}


        
}