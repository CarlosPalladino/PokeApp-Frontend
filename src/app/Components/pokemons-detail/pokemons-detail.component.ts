import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../api/services';
import { PokemonDto } from '../../api/models/pokemon-dto';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2'; // Importa SweetAlert2

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


  // Método para eliminar un Pokémon
  eliminarPokemon() {
    Swal.fire({
      title: '¿Estás seguro?',
      text: "¡No podrás revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '¡Sí, bórralo!'
    }).then((result) => {
      if (result.isConfirmed) {
        // Aquí va tu código para eliminar el Pokémon
        Swal.fire(
          '¡Eliminado!',
          'Tu Pokémon ha sido eliminado.',
          'success'
        )
      }
    })
  }







}
