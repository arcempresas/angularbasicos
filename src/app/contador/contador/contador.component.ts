import { Component } from "@angular/core";

@Component({
    selector:'app-contador',
    template:`
     <h1>{{title}}</h1>
     <button (click)="incr(base);">+{{base}} </button>
     <button (click)="incr(-base);">-{{base}} </button>
  <span>La base es: {{base}}</span>
  <span>{{numero}}</span>
    `
})

export class ContadorComponent{
    public title:string ='Contador App';
    public numero:number=10;
    public inc(){
     this.numero++;
    }
    public dec(){
      this.numero--;
     }
     public incr(valor:number){
      this.numero=this.numero+valor;
     }
  
     public base:number=20;
}