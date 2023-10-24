import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonDto } from '../../api/models/pokemon-dto';
import { CategoriesDto } from '../../api/models/categories-dto';
import { OwnerDto } from '../../api/models/owner-dto';
import Swal from 'sweetalert2';
import { PokemonService } from '../../api/services';
import { NgForm } from '@angular/forms';
import { OwnerService } from '../../api/services';
import { CategoryService } from '../../api/services';

// Asegúrate de importar OwnerService

@Component({
  selector: 'app-create-pokemons',
  templateUrl: './create-pokemons.component.html',
  styleUrls: ['./create-pokemons.component.css']
})
export class CreatePokemonsComponent implements OnInit, AfterViewInit {
  pokemon: PokemonDto = {} as PokemonDto;
  @ViewChild('form') form!: NgForm;
  owners: Array<OwnerDto> = []; 
  categories: Array<CategoriesDto> = []; 
  tipos: string[] = []; 
  debilidades: string[] = []; 
  ownerName: string = ''; 
  categoryName: string = ''; 
  imagen: File | null = null;

  constructor(private api: PokemonService,
    private route: ActivatedRoute,
    private ownerService: OwnerService,
    private categoryService: CategoryService)
    { } 
    
    
    onFileChange(event: any) {
      if (event.target.files && event.target.files.length) {
        this.imagen = event.target.files[0];
      }
    }

  ngOnInit() { 
    this.ownerService.apiOwnerGet$Json().subscribe(owners => {
      this.owners = owners;
    });

    this.categoryService.apiCategoryGet$Json().subscribe(categories => {
      this.categories = categories;
    });


    this.api.getAllTipos().subscribe(tipos => {
      console.log(tipos); // Añade esta línea

      this.tipos = tipos;
    });

    this.api.getAllDebilidades().subscribe(debilidades => {
      console.log(debilidades); // Añade esta línea

      this.debilidades = debilidades;
    });
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
  onSubmit() {

 

    this.ownerService.getOwnerIdByName(this.ownerName).subscribe(ownerId => {
      this.categoryService.getCategoryIdByName(this.categoryName)
      .subscribe(categoryId => { 
        this.api.apiPokemonPost({ ownerId: ownerId, categoryId:
           categoryId, body: this.pokemon })
        .subscribe(() => {
          Swal.fire('¡Éxito!', 
          'Pokémon creado con éxito.', 'success');
        }, error => {
          Swal.fire('Error', 
          'Hubo un error al crear el Pokémon.', 'error');
        });
      });
    });
    console.log(this.ownerName); 
    console.log(this.categoryName); 
  
  }





}
