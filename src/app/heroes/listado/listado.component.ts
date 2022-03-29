import { Component, OnInit } from '@angular/core';
//import { stringify } from 'querystring';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent implements OnInit {

  heroes:string[]=['Borrascas','Pocharras','Pochaca']

  public ultimoHeroeBorrado:string="";
  
  heroeBorrado(index:number):string{
    return this.heroes[index];
  }

  borrarHeroe(index:number):void{
    this.ultimoHeroeBorrado=this.heroes[index];
    this.heroes.splice(index,1);
    

  }

  constructor() {
    
    console.log('CONSTRUCTOR');
  }

  ngOnInit(): void {
    console.log('onInit')
  }

}
