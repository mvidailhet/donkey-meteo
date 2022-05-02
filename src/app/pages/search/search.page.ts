import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { IonSearchbar } from '@ionic/angular';
import { Place, PlacesService } from '../../services/google/places.service';

export interface SearchResult {
  city: string;
  zipcode: number;
}

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements AfterViewInit {
  isLoading = true;
  searchResults: SearchResult[] | undefined;
  @ViewChild('searchbarInput') searchbarInput: IonSearchbar | undefined;
  @ViewChild('mapElement') mapElement: ElementRef | undefined;

  constructor(private placesService: PlacesService) {}

  ngAfterViewInit(): void {
    this.getPlaceAutocomplete();
  }

  async getPlaceAutocomplete() {
    if (!this.searchbarInput) throw new Error('No searchbar input found !');
    this.placesService.getPlaceAutocomplete(await this.searchbarInput.getInputElement());

    this.placesService.placeObservable.subscribe((place: Place) => {
      console.log(place);
    });
  }
}
