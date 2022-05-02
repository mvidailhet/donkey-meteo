import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IonSearchbar } from '@ionic/angular';
import { PlacesService } from '../../services/google/places.service';

export interface SearchResult {
  city: string;
  zipcode: number;
}

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit, AfterViewInit {
  isLoading = true;
  searchResults: SearchResult[] | undefined;
  @ViewChild('searchbarInput') searchbarInput: IonSearchbar | undefined;
  @ViewChild('mapElement') mapElement: ElementRef | undefined;
  map: any;
  service: any;

  constructor(private placesService: PlacesService) {}

  ngAfterViewInit(): void {
    this.getPlaceAutocomplete();
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.searchResults = [
        {
          city: 'Paris',
          zipcode: 75020,
        },
        {
          city: 'Nantes',
          zipcode: 21000,
        },
        {
          city: 'Marseille',
          zipcode: 13000,
        },
      ];
      this.isLoading = false;
    }, 3000);
  }

  async getPlaceAutocomplete() {
    if (!this.searchbarInput) throw new Error('No searchbar input found !');
    this.placesService.getPlaceAutocomplete(await this.searchbarInput.getInputElement());
  }
}
