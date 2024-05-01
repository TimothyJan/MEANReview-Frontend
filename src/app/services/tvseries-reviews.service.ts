import { Injectable } from '@angular/core';
import { TVSeriesReview } from '../models/review';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TVseriesReviewsService {

  allTVSeriesReviews: TVSeriesReview[] = [];
  public reviewsChanged: BehaviorSubject<string> = new BehaviorSubject<string>("None");

  constructor() { }

  /** Create Review */
  createReview(data:any): void {
    let reviewID = this.allTVSeriesReviews.length+1;
    let review = data;
    review.reviewId = reviewID
    this.allTVSeriesReviews.push(review);
  }

  /** Get all Reviews */
  getReviews() {
    return this.allTVSeriesReviews;
  }

  /** Get Review */
  getReview(id:number): any {
    return this.allTVSeriesReviews[id-1];
  }

  /** Update Review */
  updateReview(id:number, data:any){
    this.allTVSeriesReviews[id-1] = data;
  }

  /** Delete Review */
  deleteReview(id:number): void {
    this.allTVSeriesReviews.splice(id-1, 1);
  }
}
