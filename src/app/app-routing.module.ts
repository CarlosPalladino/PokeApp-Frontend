import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { PokemonsComponent } from './Components/pokemons/pokemons.component';
import { AppComponent } from './app.component';
 import { PokemonsDetailComponent } from './Components/pokemons-detail/pokemons-detail.component';
// import  {test } from './Components/test/'



const routes: Routes = [
  { path: 'home', component: AppComponent },
  // { path:'Pokemon', component: PokemonsComponent}
  { path: 'PokemonsDetailComponent', component: PokemonsDetailComponent },
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
