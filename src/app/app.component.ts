import { inject, Component } from '@angular/core';

import { PokemonService } from './api/services';
import { PokemonDto } from './api/models/pokemon-dto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
   title = 'Banck-Api-Frontend';
   public pokemons: PokemonDto[] = [];

   constructor(private api: PokemonService) { }
 
   ngOnInit() {
     this.api.apiPokemonGet$Json().subscribe(pokemons => {
       this.pokemons = pokemons;
     });
   }

  }

