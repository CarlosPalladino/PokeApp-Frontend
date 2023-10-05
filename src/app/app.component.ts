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
  public constructor(private api: PokemonService) {

    this.api.apiPokemonGet$Json({ id: 3}).subscribe(res => {
      this.pokemons = res;
    });
  }
}

  // private endpoint = "https://localhost:7215/api/Pokemon";


  // constructor(private http: HttpClient) { }
  // pokemons: Pokemons[] = [];

  // GetPokemons(id: number): Observable<Pokemons[]> {
  //   const url = `${this.endpoint}/${id}`;
  //   return this.http.get<Pokemons[]>(url);
  // }




  // GetPokemons(id: number) {
  //   const url = `${this.endpoint}/${id}`;
  //   this.http.get<Pokemons[]>(url).subscribe(data => {
  //     this.pokemons = data;
  //   });



  // }


