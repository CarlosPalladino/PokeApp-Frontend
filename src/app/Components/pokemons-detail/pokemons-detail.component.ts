import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonService } from '../../api/services';
import { PokemonDto } from '../../api/models/pokemon-dto';

@Component({
  templateUrl: './pokemons-detail.component.html',
  styleUrls: ['./pokemons-detail.component.css']
})
export class PokemonsDetailComponent {
public  pokemons: PokemonDto[];
constructor(private api : PokemonService.
  private ){
}
ngOnInit() {  

  this.api.apiPokemonPokeIdGet$Json(params).subscribe(pokemons => {
    this.pokemons = pokemons;

});


}

}
