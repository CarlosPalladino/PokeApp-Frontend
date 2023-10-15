import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonsDetailComponent } from './Components/pokemons-detail/pokemons-detail.component';
import { AllPokemonsComponent } from './Components/all-pokemons/all-pokemons.component';



const routes: Routes = [
  {
    
    path: '', 
    component: AllPokemonsComponent 
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
