import { Component ,Input,OnInit} from '@angular/core';
import { PokemonService } from '../../api/services';
import { PokemonDto } from '../../api/models/pokemon-dto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['.//pokemons.component.css']
})
export class PokemonsComponent implements OnInit {
  constructor(private router :Router){}

  ngOnInit(){}

navegar(){
  this.router.navigate(['/pokemons']);
}

}
