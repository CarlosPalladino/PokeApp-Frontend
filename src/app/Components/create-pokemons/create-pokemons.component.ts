import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonDto } from '../../api/models/pokemon-dto';
import Swal from 'sweetalert2';
import { PokemonService } from '../../api/services';
import { NgForm } from '@angular/forms';
import { PokemonSharedService } from '../../Services/pokemon-shared.service.ts.service';

@Component({
  selector: 'app-create-pokemons',
  templateUrl: './create-pokemons.component.html',
  styleUrls: ['./create-pokemons.component.css']
})
export class CreatePokemonsComponent implements OnInit, AfterViewInit {
  pokemon: PokemonDto = {} as PokemonDto;
  @ViewChild('form') form!: NgForm;
  tipos: string[] = [];
  debilidad: string[] = [];

  constructor(private api: PokemonService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    // Este método se ejecuta cuando se inicializa el componente
  }

  ngAfterViewInit() {
    const pokeId = this.route.snapshot.paramMap.get('id');
    console.log(pokeId);
    if (pokeId !== null) {
      const params = { PokeId: Number(pokeId) };
      console.log(this.pokemon);
      this.api.apiPokemonPokeIdGet$Json(params).subscribe(pokemon => {
        console.log(pokemon);
        this.pokemon = pokemon;
        this.form.form.patchValue({
          nombre: pokemon.name,
          fecha_nacimiento: pokemon.birthDate,
          tipo: pokemon.tipo,
          debilidad: pokemon.debilidad
        });
      });
    }
  }
}
