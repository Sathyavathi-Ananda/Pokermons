import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';
import { of } from 'rxjs';
import { SearchPipe } from 'src/app/pipes/search.pipe';
import { SortPipe } from 'src/app/pipes/sort.pipe';
import { PokemonService } from 'src/app/services/pokemon.service';
import { HomeComponent } from './home.component';

describe('Test case for Pokemons App', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent,SortPipe,SearchPipe],
      imports:[NgxPaginationModule,HttpClientModule,FormsModule],
      providers: [PokemonService,{ provide: HttpClient }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('test case 1:should create HomeComponent', () => {
    expect(component).toBeTruthy();

  });


  it('should call getPokemons method', () => {
    const restService = TestBed.inject(PokemonService);
    spyOn(restService, 'getPokemons').and.returnValue(of(mockpackageResponse));
    component.getPokemons();

    expect(restService).toBeTruthy();
    restService.getPokemons(10,1).subscribe((userList) => {
      expect(userList).toEqual(mockpackageResponse);
      expect(restService.getPokemons(10,1)).toHaveBeenCalled();
    
    });

    expect(component.totalPokemons).toBe(1118)
  });
});
const mockpackageResponse = {
  "count": 1118,
  "next": "https://pokeapi.co/api/v2/pokemon?offset=11&limit=10",
  "previous": "https://pokeapi.co/api/v2/pokemon?offset=0&limit=1",
  "results": [
      {
          "name": "ivysaur",
          "url": "https://pokeapi.co/api/v2/pokemon/2/"
      },
      {
          "name": "venusaur",
          "url": "https://pokeapi.co/api/v2/pokemon/3/"
      },
      {
          "name": "charmander",
          "url": "https://pokeapi.co/api/v2/pokemon/4/"
      },
      {
          "name": "charmeleon",
          "url": "https://pokeapi.co/api/v2/pokemon/5/"
      },
      {
          "name": "charizard",
          "url": "https://pokeapi.co/api/v2/pokemon/6/"
      },
      {
          "name": "squirtle",
          "url": "https://pokeapi.co/api/v2/pokemon/7/"
      },
      {
          "name": "wartortle",
          "url": "https://pokeapi.co/api/v2/pokemon/8/"
      },
      {
          "name": "blastoise",
          "url": "https://pokeapi.co/api/v2/pokemon/9/"
      },
      {
          "name": "caterpie",
          "url": "https://pokeapi.co/api/v2/pokemon/10/"
      },
      {
          "name": "metapod",
          "url": "https://pokeapi.co/api/v2/pokemon/11/"
      }
  ]
}