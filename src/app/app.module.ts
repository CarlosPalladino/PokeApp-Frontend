import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { OwnersComponent } from './Components/owners/owners.component';
import { TestComponent } from './Components/test/test.component';
import { PokemonsDetailComponent } from './Components/pokemons-detail/pokemons-detail.component';
import { AllPokemonsComponent } from './Components/all-pokemons/all-pokemons.component';
import { CreatePokemonsComponent } from './Components/create-pokemons/create-pokemons.component';
import { HeaderComponent } from './Components/Header/header/header.component';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    OwnersComponent,
    TestComponent,
    PokemonsDetailComponent,
    AllPokemonsComponent,
    CreatePokemonsComponent,
    HeaderComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
