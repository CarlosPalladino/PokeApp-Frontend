import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonsDetailComponent } from './Components/pokemons-detail/pokemons-detail.component';
import { AllPokemonsComponent } from './Components/all-pokemons/all-pokemons.component';
import { CreatePokemonsComponent } from './Components/create-pokemons/create-pokemons.component';
import { OwnerComponent } from './Components/owner/owner.component';
import { OwnerDetailComponent } from './Components/owner-detail/owner-detail.component';



const routes: Routes = [
  {

    path: '',
    component: AllPokemonsComponent
  },
  {
    path: 'create-pokemons',
    component: CreatePokemonsComponent
  },
  {
    path: 'create-pokemons/:id',
    component: CreatePokemonsComponent
  },
  {
    path: 'owner',
    component: OwnerComponent
  },
  {
    path: 'all-pokemons',
    component: AllPokemonsComponent
  },
  {

    path: 'details-pokemon/:id',
    component: PokemonsDetailComponent

  },
  {

    path: 'owner-detail/:id',
    component: OwnerDetailComponent

  },

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
