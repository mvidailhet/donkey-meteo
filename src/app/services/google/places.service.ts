import { Injectable, NgZone } from '@angular/core';
import { Subject } from 'rxjs';
import { StorageService } from '../storage.service';

export interface Place {
  name: string;
  postal_code?: string;
  location: {
    lat: number;
    lng: number;
  };
}

export interface GoogleMapPlace {
  long_name: string;
  short_name: string;
  types: string[];
  [key: string]: string | string[];
}

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  public placeSubject = new Subject<Place>();
  public place$ = this.placeSubject.asObservable();
  public currentCity: Place | undefined;
  static STORAGE_KEY_CURRENT_CITY = 'city';

  constructor(private ngZone: NgZone, private storageService: StorageService) {
    this.currentCity = this.storageService.get(PlacesService.STORAGE_KEY_CURRENT_CITY);
  }

  getPlaceAutocomplete(inputElement: HTMLInputElement): void {
    const autocomplete = new google.maps.places.Autocomplete(inputElement, {
      componentRestrictions: { country: ['FR'] },
      types: ['(cities)'],
    });
    google.maps.event.addListener(autocomplete, 'place_changed', () => {
      const place = autocomplete.getPlace();
      const lat = place.geometry?.location?.lat();
      const lng = place.geometry?.location?.lng();
      if (!lat || !lng) return;

      const resultPlace: Place = {
        name: this.getCity(place),
        postal_code: this.getPostCode(place),
        location: {
          lat,
          lng,
        },
      };

      this.ngZone.run(() => {
        this.placeSubject.next(resultPlace);
        this.currentCity = resultPlace;
        this.storageService.set(PlacesService.STORAGE_KEY_CURRENT_CITY, this.currentCity);
      });
    });
  }

  getAddrComponent(place: any, componentTemplate: { [key: string]: string }): string | undefined {
    let result;

    place.address_components.forEach((component: GoogleMapPlace) => {
      const addressType = component.types[0];
      if (componentTemplate[addressType]) {
        const key: string = componentTemplate[addressType];
        result = component[key];
      }
    });
    return result;
  }

  getPostCode(place: any): any {
    const COMPONENT_TEMPLATE = { postal_code: 'long_name' };
    return this.getAddrComponent(place, COMPONENT_TEMPLATE);
  }

  getCity(place: any): any {
    const COMPONENT_TEMPLATE = { locality: 'long_name' };
    return this.getAddrComponent(place, COMPONENT_TEMPLATE);
  }
}
