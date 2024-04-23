import { Component, Input, OnInit } from '@angular/core';
import { TmdbService } from '../../../services/tmdb.service';
import { MovieDetails } from '../../../models/movie-details';

@Component({
  selector: 'app-carousel-item',
  templateUrl: './carousel-item.component.html',
  styleUrl: './carousel-item.component.css'
})
export class CarouselItemComponent implements OnInit {
  @Input() id: number = 0;
  @Input() movieOrTvseries: string = "";
  movieDetails: MovieDetails;
  loadingData: boolean = true;

  constructor(
    private _tmdbService: TmdbService
  ) {}

  ngOnInit(): void {
    this.getMovieDetails();
  }

  getMovieDetails(): void {
    this._tmdbService.getMovieDetails(this.id).subscribe(data => {
      // console.log(data);
      this.movieDetails = {...data};
      this.setCardDetails();
      this.loadingData = false;
    });
  }

  setCardDetails(): void {
    this.movieDetails.poster_path = `https://image.tmdb.org/t/p/original/` + this.movieDetails.poster_path;
    // this.movieDetails.backdrop_path = `https://media.themoviedb.org/t/p/w220_and_h330_face/` + this.movieDetails.backdrop_path;
  }
}
