import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Results } from 'src/app/Interface/result';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent  {
  @Output() searchChange = new EventEmitter();
  @Output() typeSelected = new EventEmitter();
  types!:Array<string>;
  pokemonList!: Array<Results>;
  search: string ="";
  currentType!: string;

  @Input() set pokemons(pokemons: Results[]) {
        this.setPokemonTypes();
  }

  constructor() {}
 

 
  /**
   * Called when a search field is updated
   */
  searchEvent(search?: string): void {
    // check for cleared search
    if (search === '') {
      this.search = search;
    }
    this.searchChange.emit(this.search);
  }

  /**
   * Called when a type has been selected
   */
  onTypeSelected(): void {
    if (this.currentType) {
      this.typeSelected.emit(this.currentType);
    } else {
      this.typeSelected.emit();
    }
  }
  setPokemonTypes(): void {
    this.types=  ["height", "name", "weight"];
  }
}
