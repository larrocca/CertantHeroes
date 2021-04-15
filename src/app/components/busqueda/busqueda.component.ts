import { Component, OnInit } from '@angular/core';
import { Route, ActivatedRoute } from '@angular/router';
import { Heroe, HeroesService } from '../../servicios/heroes.service';


@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {
  
  heroes:Heroe[] = []
  termino: any;

  constructor(
    private _activatedRoute :ActivatedRoute,
    private _heroesService:HeroesService,
  ){}

  ngOnInit(): void {
    this._activatedRoute.params.subscribe(params =>{
      this.termino = params['termino'];
      this.heroes = this._heroesService.buscarHeroe(params['termino'])
      console.log(this.heroes)
    })
  }

}
