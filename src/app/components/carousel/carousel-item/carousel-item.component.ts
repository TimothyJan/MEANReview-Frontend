import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { TmdbService } from '../../../services/tmdb.service';
import { MovieDetails } from '../../../models/movie-details';
import { TvSeriesDetails } from '../../../models/tvseries-details';

@Component({
  selector: 'app-carousel-item',
  templateUrl: './carousel-item.component.html',
  styleUrl: './carousel-item.component.css'
})
export class CarouselItemComponent implements OnInit, OnChanges {
  @Input() id: number = 0;
  @Input() movieOrTvSeries: string = "MOVIES"; // MOVIES or TVSERIES****
  movieDetails: MovieDetails;
  tvSeriesDetails: TvSeriesDetails;
  loadingData: boolean = true;

  constructor(
    private _tmdbService: TmdbService
  ) {}

  ngOnInit(): void {
    switch(this.movieOrTvSeries) {
      case "MOVIES":
        this.getMovieDetails();
        break;
      case "TVSERIES":
        this.getTvSeriesDetails();
        break;
      default:
        console.log("Movie or Tvseries Error");
        break;
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    switch(this.movieOrTvSeries) {
      case "MOVIES":
        this.getMovieDetails();
        break;
      case "TVSERIES":
        this.getTvSeriesDetails();
        break;
      default:
        console.log("Movie or Tvseries Error");
        break;
    }
  }

  getMovieDetails(): void {
    this._tmdbService.getMovieDetails(this.id)
    .subscribe(
      data => {
        // console.log(data);
        this.movieDetails = {...data};
        this.setMovieCardDetails();
        this.loadingData = false;
      },
      error => {
        console.log(error);
      }
    );
  }

  setMovieCardDetails(): void {
    this.movieDetails.poster_path = `https://image.tmdb.org/t/p/original/` + this.movieDetails.poster_path;
  }

  getTvSeriesDetails(): void {
    this._tmdbService.getTVSeriesDetails(this.id)
    .subscribe(
      data => {
      // console.log(data);
      this.tvSeriesDetails = {...data};
      this.setTvSeriesCardDetails();
      this.loadingData = false;
      },
      error => {
        console.log(error);
      }
    );
  }

  setTvSeriesCardDetails(): void {
    this.tvSeriesDetails.poster_path = `https://image.tmdb.org/t/p/original/` + this.tvSeriesDetails.poster_path;
  }
}
