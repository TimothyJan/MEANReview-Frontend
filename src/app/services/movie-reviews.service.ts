import { Injectable } from '@angular/core';
import { MovieReview } from '../models/review';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieReviewsService {

  allMovieReviews: MovieReview[] = [];
  // allMovieReviewsSubject: Subject<MovieReview[]> = new Subject<MovieReview[]>();

  constructor() { }

  /** Create Review */
  createReview(data:any): void {
    let reviewID = this.allMovieReviews.length+1;
    let review = data;
    review.reviewId = reviewID
    this.allMovieReviews.push(review);
  }

  /** Get all Reviews */
  getReviews() {
    return this.allMovieReviews;
  }

  /** Get Review based off movie id*/
  getReview(id:number): MovieReview | undefined {
    for(let i=0; i<this.allMovieReviews.length; i++) {
      if(this.allMovieReviews[i].movieId == id) {
        return this.allMovieReviews[i];
      }
    }
    return undefined;
  }

  /** Update Review */
  editReview(id:number, newRating: number, newReview: string): void {
    for(let i=0; i<this.allMovieReviews.length; i++) {
      if(this.allMovieReviews[i].movieId == id) {
        this.allMovieReviews[i].rating = newRating;
        this.allMovieReviews[i].review = newReview;
      }
    }
  }

  /** Delete Review */
  deleteReview(id:number): void {
    for(let i=0; i<this.allMovieReviews.length; i++) {
      if(this.allMovieReviews[i].movieId == id) {
        this.allMovieReviews.splice(i, 1);
      }
    }
  }

}
