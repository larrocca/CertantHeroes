import { Component, OnInit } from '@angular/core';
import { Heroe, HeroesService } from '../../../servicios/heroes.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  heroes: Heroe[] = []
  constructor(
    private _heroesService: HeroesService,
    private _router: Router
  ) { }

  ngOnInit(): void {
  }
  
  enviarHeroe(termino:string){
    this._router.navigate(['/busqueda',termino])
    console.log(this.heroes)
  }
}
