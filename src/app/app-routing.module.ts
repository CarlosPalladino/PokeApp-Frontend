import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonsDetailComponent } from './Components/pokemons-detail/pokemons-detail.component';
import { AllPokemonsComponent } from './Components/all-pokemons/all-pokemons.component';
import { CreatePokemonsComponent } from './Components/create-pokemons/create-pokemons.component';



const routes: Routes = [
  {
    
    path: '', 
    component: AllPokemonsComponent 
  },
  {
path: 'create-pokemons',  
component :CreatePokemonsComponent
  },
  { 
    path: 'all-pokemons', 
    component: AllPokemonsComponent 
  },
  { 
    
    path: 'details-pokemon/:id', 
    component: PokemonsDetailComponent 
  
  },

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
