import { Component } from '@angular/core';
import { PokemonService } from '../../api/services';
import { PokemonDto } from '../../api/models/pokemon-dto';

@Component({
  selector: 'app-all-pokemons',
  templateUrl: '../../Components/all-pokemons/all-pokemons.component.html',
  styleUrls: ['../../Components/all-pokemons/all-pokemons.component.css']
})
export class AllPokemonsComponent {  // Cambia 'AllComponents' a 'AllPokemonsComponent'
  
   title = 'Banck-Api-Frontend';
   public pokemons: PokemonDto[] = [];

   constructor(private api: PokemonService) { }
 
   ngOnInit() {
     this.api.apiPokemonGet$Json().subscribe(pokemons => {
       this.pokemons = pokemons;
     });
   }
}
