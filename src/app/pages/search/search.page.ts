import { Component, OnInit } from '@angular/core';

export interface SearchResult {
  city: string;
  zipcode: number;
}

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  isLoading = true;
  searchResults: SearchResult[] | undefined;

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
}
