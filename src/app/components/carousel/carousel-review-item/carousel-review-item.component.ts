import { Component, Input, OnInit } from '@angular/core';
import { TmdbService } from '../../../services/tmdb.service';
import { MovieDetails } from '../../../models/movie-details';
import { TVSeriesDetails } from '../../../models/tvseries-details';
import { MatDialog } from '@angular/material/dialog';
import { ItemDialogComponent } from '../item-dialog/item-dialog.component';
import { MovieReviewsService } from '../../../services/movie-reviews.service';
import { TVseriesReviewsService } from '../../../services/tvseries-reviews.service';

@Component({
  selector: 'app-carousel-review-item',
  templateUrl: './carousel-review-item.component.html',
  styleUrl: './carousel-review-item.component.css'
})
export class CarouselReviewItemComponent {
  @Input() id: number = 0; // Movie or TV id
  @Input() movieOrTvSeries: string = ""; // MOVIES or TVSERIES****
  movieDetails: MovieDetails;
  tvSeriesDetails: TVSeriesDetails;
  loadingData: boolean = true;

  // For star highlight component input to display highlighted stars in review mode
  reviewRating: number = 0;

  constructor(
    private _tmdbService: TmdbService,
    public dialog: MatDialog,
    private _movieReviewsService: MovieReviewsService,
    private _tvReviewsService: TVseriesReviewsService
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

  /** Get Movie Details */
  getMovieDetails(): void {
    this._tmdbService.getMovieDetails(this.id)
    .subscribe(
      data => {
        // console.log(data);
        this.movieDetails = {...data};
        this.setMovieCardDetails();
        this.setStarRating();
        this.loadingData = false;
      },
      error => {
        console.log(error);
      }
    );
  }

  /** Set Movie details */
  setMovieCardDetails(): void {
    this.movieDetails.poster_path = `https://image.tmdb.org/t/p/original/` + this.movieDetails.poster_path;
  }

  /** Get TV Series Details */
  getTvSeriesDetails(): void {
    this._tmdbService.getTVSeriesDetails(this.id)
    .subscribe(
      data => {
      // console.log(data);
      this.tvSeriesDetails = {...data};
      this.setTvSeriesCardDetails();
      this.setStarRating();
      this.loadingData = false;
      },
      error => {
        console.log(error);
      }
    );
  }

  /** Set TV Series Details */
  setTvSeriesCardDetails(): void {
    this.tvSeriesDetails.poster_path = `https://image.tmdb.org/t/p/original/` + this.tvSeriesDetails.poster_path;
  }

  setStarRating(): void {
    // for star highlight
    switch(this.movieOrTvSeries) {
      case "MOVIES":
        let currentMovieReview = this._movieReviewsService.getReview(this.id);
        console.log(currentMovieReview);
        if (currentMovieReview != undefined) {
          this.reviewRating = currentMovieReview.rating;
        }
        break;
      case "TVSERIES":
        let currentTVSeriesReview = this._tvReviewsService.getReview(this.id);
        console.log(currentTVSeriesReview);
        if(currentTVSeriesReview != undefined) {
          this.reviewRating = currentTVSeriesReview.rating;
        }
        break;
      default:
        console.log("Movie or Tvseries Error");
        break;
    }
  }

  /** Open Dialog */
  openDialog(): void {
    const dialogRef = this.dialog.open(ItemDialogComponent, {
      data: {
        id: this.id,
        movieOrTvSeries: this.movieOrTvSeries
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log('The dialog was closed');
    });
  }
}
