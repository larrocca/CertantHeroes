import { Component, OnInit, Input, Output , EventEmitter } from '@angular/core';
import { Heroe, HeroesService } from '../../servicios/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {

  @Input()heroe:any={};
  @Input()index:number | undefined


  @Output() heroeSeleccionado: EventEmitter<number> 
  
  constructor(
    private _router: Router,
    private _heroesServie: HeroesService
  ) { 
    this.heroeSeleccionado = new EventEmitter();
  }

  ngOnInit(): void {
  }

  verHeroe(){
    //console.log(this.index)
    //this._router.navigate(['heroe/',this.index])
    //this.heroeSeleccionado.emit(this.index) //esto dispara un evento
    this._router.navigate( ['/heroe', this.index] );
  }

  enviarNombreHeroe(nombre:string, idx:number){
    console.log(nombre)
    this._heroesServie.setHeroeNombre(nombre,idx);
  }
}
