import { Component } from '@angular/core';

export interface SearchResult {
  city: string;
  zipcode: number;
}

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage {
  searchResults: SearchResult[] = [
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
}
