import { Component, OnInit} from '@angular/core';
import { PokemonService } from './pokemon.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'POKE_API';
nombre_poke: string=""
id_poke: Number = 0
peso_poke: string=""
url_img_poke: string=""
conteo: number = 0
idbuscar: number = 0


  constructor(public PokemonService: PokemonService ){}

  ngOnInit(): void {
    this.PokemonService.getpokemons().subscribe(pokemon =>{
      this.nombre_poke= pokemon.name
      this.url_img_poke= pokemon.sprites.other.dream_world.front_default
      this.peso_poke = pokemon.weight
      this.id_poke = pokemon.id
     
      // pokemon.tipo
      // pokemon.id
    })
    this.PokemonService.getlistpoke().subscribe(poke =>{
    this.conteo =  poke.count
      poke.next
      poke.previous
      poke.results
    })
  }
  buscar_poke(){
    this.PokemonService.getpoke(this.idbuscar).subscribe(pokemon =>{
      this.nombre_poke= pokemon.name
      this.url_img_poke= pokemon.sprites.other.dream_world.front_default
      this.peso_poke = pokemon.weight
      this.id_poke = pokemon.id
    })
  }

}
