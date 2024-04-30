import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrl: './star-rating.component.css'
})
export class StarRatingComponent {
  @Input() rating: number;
  @Output() ratingChange = new EventEmitter<number>();

  currentRating: number;
  stars: number[];

  constructor() {
    this.stars = Array(5).fill(0).map((_, i) => i + 1);
  }

  ngOnInit() {
    this.currentRating = this.rating;
  }

  /** Highlight */
  highlightStar(event: MouseEvent) {
    const dataValue = (event.target as HTMLElement).getAttribute('data-value');
    if (dataValue !== null) {
      const starValue = parseInt(dataValue, 10);
      this.currentRating = starValue;
    }
  }

  /** Resets star highlights */
  resetStars() {
    this.currentRating = this.rating;
  }

  /** Emits rating value to item-dialog component */
  rate(event: MouseEvent) {
    const dataValue = (event.target as HTMLElement).getAttribute('data-value');
    if (dataValue !== null) {
      const starValue = parseInt(dataValue, 10);
      this.rating = starValue;
      this.ratingChange.emit(starValue);
    }
  }
}
