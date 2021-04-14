import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from "@angular/router";
import { Heroe } from '../../servicios/heroes.service';
import { HeroesService } from '../../servicios/heroes.service' 

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe: any = {};

  constructor(
    private _activatedRoute : ActivatedRoute,
    private _heroesService : HeroesService,
  ) {
    this._activatedRoute.params.subscribe( params =>{
      console.log(params['id']) //es id porque en la ruta se llama asi
      this.heroe = this._heroesService.getHeroe(params['id'])
    })
   }

  ngOnInit(): void {
  }

}
