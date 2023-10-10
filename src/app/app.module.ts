import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { PokemonsComponent } from './Components/pokemons/pokemons.component';
import { OwnersComponent } from './Components/owners/owners.component';
import { TestComponent } from './Components/test/test.component';
import { PokemonsDetailComponent } from './Components/pokemons-detail/pokemons-detail.component';
@NgModule({
  declarations: [
    AppComponent,
    OwnersComponent,
    PokemonsComponent,
    TestComponent,
    PokemonsDetailComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
