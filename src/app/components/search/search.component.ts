import { Component, Input, OnInit } from '@angular/core';
import { TmdbService } from '../../services/tmdb.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {
  @Input() movieOrTvSeries: string = "MOVIES"; // MOVIES or TVSERIES****
  searchPlaceholder: string = "";
  query: string = "";

  constructor(
    private _tmdbService: TmdbService
  ) {}

  ngOnInit(): void {
    this.setSearchPlaceholder();
  }

  onChange(query:string): void {
    switch(this.movieOrTvSeries) {
      case "MOVIES":
        console.log("MOVIES:" + query);
        this.getMovieList_Search(query);
        break;
      case "TVSERIES":
        console.log("TVSERIES:" + query);
        this.getTVSeriesList_Search(query);
        break;
      default:
        console.log("movieOrTvSeries issue");
        break;
    }
  }

  setSearchPlaceholder(): void {
    switch(this.movieOrTvSeries) {
      case "MOVIES":
        this.searchPlaceholder = "Search Movies";
        break;
      case "TVSERIES":
        this.searchPlaceholder = "Search TV Shows";
        break;
      default:
        console.log("movieOrTvSeries issue");
        break;
    }
  }

  getMovieList_Search(query: string): void {

  }

  getTVSeriesList_Search(query: string): void {

  }
}
