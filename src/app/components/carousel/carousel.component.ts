import { Component, Input, OnInit } from '@angular/core';
import { TmdbService } from '../../services/tmdb.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent implements OnInit{
  @Input() dataListType:string = "";
  title:string = ""
  items: number[] = [];
  currentIndex = 0;
  itemWidth = 300; // Adjust as needed
  offsetX = 0;

  constructor(
    private _tmdbService: TmdbService
  ) {}

  ngOnInit(): void {
    this.setTitle();
    this._tmdbService.getMoviesList_Popular().subscribe(data => {
      for(let index=0; index<data.results.length; index++) {
        this.items.push(data.results[index]['id']);
      }
      console.log(this.items);
    });

    // this._tmdbService.getMoviesList_NowPlaying().subscribe(data => {
    //   console.log(data);
    // });
    // this._tmdbService.getMoviesList_Upcoming().subscribe(data => {
    //   console.log(data);
    // });

    // this._tmdbService.getMoviesList_TopRated().subscribe(data => {
    //   console.log(data);
    // });

    // this._tmdbService.getTVSeriesList_Popular().subscribe(data => {
    //   console.log(data);
    // });
    // this._tmdbService.getTVSeriesList_AiringToday().subscribe(data => {
    //   console.log(data);
    // });
    // this._tmdbService.getTVSeriesList_OnTV().subscribe(data => {
    //   console.log(data);
    // });
    // this._tmdbService.getTVSeriesList_TopRated().subscribe(data => {
    //   console.log(data);
    // });
  }

  next() {
    if (this.currentIndex < this.items.length - 1) {
      this.currentIndex++;
      this.offsetX = -this.currentIndex * this.itemWidth;
    }
    console.log(this.currentIndex);
  }

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.offsetX = -this.currentIndex * this.itemWidth;
    }
  }

  isLastItem(): boolean {
    return this.currentIndex === this.items.length - 2;
  }

  setItems(): void {

  }

  setTitle(): void {
    switch(this.dataListType) {
      case "MoviesList_Popular": {
        this.title = "Popular";
        break;
      }
      case "MoviesList_NowPlaying": {
        this.title = "Now Playing";
        break;
      }
      case "MoviesList_Upcoming": {
        this.title = "Upcoming";
        break;
      }
      case "MoviesList_TopRated": {
        this.title = "Top Rated";
        break;
      }
      case "TVSeriesList_Popular": {
        this.title = "Popular";
        break;
      }
      case "TVSeriesList_AiringToday": {
        this.title = "Airing Today";
        break;
      }
      case "TVSeriesList_OnTV": {
        this.title = "On TV";
        break;
      }
      case "TVSeriesList_TopRated": {
        this.title = "Top Rated";
        break;
      }
      default: {
        this.title = "Loading...";
        break;
      }
    }
  }
}
