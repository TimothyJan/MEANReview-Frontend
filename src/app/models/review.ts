export interface Review {
  reviewId: number;
  rating: number;
  review: string;
}

export interface MovieReview extends Review {
  movieId: number;
}

export interface TVSeriesReview extends Review {
  tvSeriesId: number;
}
