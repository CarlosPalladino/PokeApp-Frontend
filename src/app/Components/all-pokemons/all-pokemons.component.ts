import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../api/services';
import { PokemonDto } from '../../api/models/pokemon-dto';
import { OwnerService } from '../../api/services/owner.service';
import { CategoryService } from '../../api/services/category.service';
import { CategoriesDto } from '../../api/models/categories-dto';
import { OwnerDto } from '../../api/models/owner-dto';
import { ChangeDetectorRef } from '@angular/core';
import { forkJoin } from 'rxjs';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { StrictHttpResponse } from '../../api/strict-http-response';
@Component({
  selector: 'app-all-pokemons',
  templateUrl: '../../Components/all-pokemons/all-pokemons.component.html',
  styleUrls: ['../../Components/all-pokemons/all-pokemons.component.css']
})
export class AllPokemonsComponent implements OnInit {

  title = 'Banck-Api-Frontend';
  public pokemons: PokemonDto[] = [];
  public owners: OwnerDto[] = [];
  public categories: CategoriesDto[] = [];
  public tipo: string = 'owner';
  public elementos: any[] = [];
  public elementoSeleccionado: any;
  public pokemonSeleccionado: any; 

  constructor(private api: PokemonService,
    private ownerService: OwnerService,
    private categoryService: CategoryService,
    private cdr: ChangeDetectorRef) { }

    ngOnInit() {
      this.api.apiPokemonGet$Json().subscribe(pokemons => {
        this.pokemons = pokemons;
      });
    
      forkJoin({
        owners: this.ownerService.apiOwnerGet$Json(),
        categories: this.categoryService.apiCategoryGet$Json()
      }).subscribe(({ owners, categories }) => {
        console.log('Owners:', owners); // Agregado
        console.log('Categories:', categories); // Agregado
        this.owners = owners;
        this.categories = categories;
        this.cambiarTipoInicial(this.tipo);
      });
    
      this.cambiarTipoInicial(this.tipo);
    }
    
    cambiarTipo(event: Event) {
      const target = event.target as HTMLSelectElement;
      if (target) {
        this.cambiarTipoInicial(target.value);
      }
    }
    
    cambiarTipoInicial(tipo: string) {
      if (tipo === 'owner') {
        this.elementos = this.owners;
      } else if (tipo === 'category') {
        this.elementos = this.categories;
      }
      this.cdr.detectChanges();
    }
    buscarPokemon() {
      console.log('Botón Buscar Pokémon presionado');
      console.log('Tipo seleccionado:', this.tipo);
      console.log('Elemento seleccionado:', this.elementoSeleccionado);
    
      if (this.tipo === 'owner') {
        console.log('Buscando propietario por Nombre...');
        this.ownerService.getOwnerByName(this.elementoSeleccionado).subscribe(owner => {
          console.log('Propietario encontrado:', owner);
          if (owner && owner.id) {
            console.log('Buscando Pokémon por ID de propietario...');
            this.ownerService.apiOwnerPokemonOwnerIdGet$Json$Response({ ownerId: owner.id })
              .pipe(map((response: StrictHttpResponse<PokemonDto[]>) => response.body))
              .subscribe(pokemon => {
                console.log('Pokémon encontrado:', pokemon);
                this.pokemons = pokemon;
                this.cdr.detectChanges();
              });
          }
        });
      
      
      } else if (this.tipo === 'category') {
        console.log('Buscando categoría por nombre...');
        this.categoryService.getCategoryByName(this.elementoSeleccionado).subscribe(category => {
          console.log('Categoría encontrada:', category);
          if (category && category.id) {
            console.log('Buscando Pokémon por ID de categoría...');
            this.categoryService.apiCategoryPokemonCategoryIdGet$Json$Response({ categoryId: category.id })
              .pipe(map((response: StrictHttpResponse<PokemonDto[]>) => response.body))
              .subscribe(pokemon => {
                console.log('Pokémon encontrado:', pokemon);
                this.pokemons = pokemon;
                this.cdr.detectChanges();
              });
          }
        });
      }
    }
    
    

}
