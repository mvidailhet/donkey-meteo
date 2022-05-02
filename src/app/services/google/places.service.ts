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
    });
  }
}
