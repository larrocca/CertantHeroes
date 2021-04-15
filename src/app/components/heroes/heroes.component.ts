import { Component, OnInit, NgModule, Input } from '@angular/core';
import { HeroesService, Heroe } from '../../servicios/heroes.service';
import { RouterModule } from '@angular/router';
import {Router} from '@angular/router'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes:Heroe[]=[]
  constructor( 
    private _heroesService: HeroesService,
    private _route: Router
    ) {
    console.log("constructor")

  }
  ngOnInit(): void {
    this.heroes = this._heroesService.getHeroes();
    console.log(this.heroes)
  }

  serHeroe(idx: number){
    this._route.navigate(['heroe/',idx])
  }


}
