import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonSearchbar } from '@ionic/angular';
import { Subscription } from 'rxjs';
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
export class SearchPage implements AfterViewInit, OnDestroy {
  isLoading = true;
  searchResults: SearchResult[] | undefined;
  @ViewChild('searchbarInput') searchbarInput: IonSearchbar | undefined;
  @ViewChild('mapElement') mapElement: ElementRef | undefined;
  placesSubscription: Subscription | undefined;

  constructor(private placesService: PlacesService, private router: Router) {}

  ngAfterViewInit(): void {
    this.getPlaceAutocomplete();
  }

  ngOnDestroy(): void {
    this.placesSubscription?.unsubscribe();
  }

  async getPlaceAutocomplete() {
    if (!this.searchbarInput) throw new Error('No searchbar input found !');
    this.placesService.getPlaceAutocomplete(await this.searchbarInput.getInputElement());

    this.placesSubscription = this.placesService.place$.subscribe((place: Place) => {
      this.router.navigate([`city/${place.name.toLowerCase()}`]);
    });
  }
}
