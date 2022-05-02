import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  public placeSubject: Subject<google.maps.places.PlaceResult> = new Subject<google.maps.places.PlaceResult>();
  public placeObservable = this.placeSubject.asObservable();

  getPlaceAutocomplete(inputElement: HTMLInputElement): void {
    const autocomplete = new google.maps.places.Autocomplete(inputElement, {
      componentRestrictions: { country: ['FR'] },
      types: ['(cities)'],
    });
    google.maps.event.addListener(autocomplete, 'place_changed', () => {
      const place = autocomplete.getPlace();
      this.placeSubject.next(place);
      console.log('place :>> ', place);
      console.log(this.getPostCode(place));
      console.log(this.getCity(place));
    });
  }

  getAddrComponent(place: any, componentTemplate: any): any {
    let result;

    place.address_components.forEach((component: any) => {
      const addressType = component.types[0];
      if (componentTemplate[addressType]) {
        result = component[componentTemplate[addressType]];
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
