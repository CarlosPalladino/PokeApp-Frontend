import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../api/services';
import { PokemonDto } from '../../api/models/pokemon-dto';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './pokemons-detail.component.html',
  styleUrls: ['./pokemons-detail.component.css']
})

export class PokemonsDetailComponent implements OnInit {
  pokemon: PokemonDto | null = null;

  constructor(private route: ActivatedRoute,
    private api: PokemonService) { }

  ngOnInit() {

    const pokeId = this.route.snapshot.paramMap.get('id');

    if (pokeId !== null) {

      const params = { PokeId: Number(pokeId) };

      this.api.apiPokemonPokeIdGet$Json(params).subscribe(pokemon => {
        this.pokemon = pokemon;
      });

    }
  }
}
