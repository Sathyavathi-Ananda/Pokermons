import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PokeAPI, Results } from 'src/app/Interface/result';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  @Output() exportPokemons = new EventEmitter();
  pokemonsLoaded!: boolean;
  pokemonsList:any[] = [];
  pokemons!: PokeAPI;
  query: string="";
  typeFilters: string ="";
  selcetedValue!: number;
  fallBackValue = 10;
  
  page = 1;

  totalPokemons!: number;

@Input()set search(newSearch: string) {

    if (newSearch !== this.query) {
      this.query = newSearch;
    }
  }

  @Input() set typeFilter(type: string) {
    if (type !== this.typeFilter) {
      this.typeFilters = type;
    }
  }


  constructor(private pokemonService: PokemonService) {
  }

  ngOnInit(): void {
    this.pokemonsLoaded = false;
    this.getPokemons();
  }


  getPokemons(selcetedValue?:any): void {
    this.pokemonsList=[];
    this.pokemonService.getPokemons(selcetedValue || this.fallBackValue, this.page + 0)
      .subscribe((response: any) => {
        this.totalPokemons = response.count;
        response.results.forEach((result: { name: string; }) => {
       
          this.pokemonService.getMoreData(result.name)
            .subscribe((pokemons) => {

              this.pokemonsList.push(pokemons);
              console.log(this.pokemonsList);
              this.pokemonsLoaded = true;
            });

        });
      });
  }


   onChange(target: any) {
    this.selcetedValue = target.value;
    this.getPokemons(this.selcetedValue);
  }
}


