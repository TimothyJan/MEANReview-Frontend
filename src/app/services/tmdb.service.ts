import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';

const APIROOT = "https://api.themoviedb.org/3/movie/";

@Injectable({
  providedIn: 'root'
})
export class TmdbService {

  constructor(private http: HttpClient) { }

  getMoviesList_Popular() {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: environment.authorizationHeader
      }
    };

    return this.http.get('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options);
  }

  getMoviesList_NowPlaying() {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: environment.authorizationHeader
      }
    };

    return this.http.get(APIROOT + 'now_playing?language=en-US&page=1', options)
  }

  getMoviesList_Upcoming() {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: environment.authorizationHeader
      }
    };

    return this.http.get('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options)
  }

  getMoviesList_TopRated() {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: environment.authorizationHeader
      }
    };
    return this.http.get('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
  }

  getTVSeriesList_Popular() {

  }

  getTVSeriesList_AiringToday() {

  }

  getTVSeriesList_OnTV() {

  }

  getTVSeriesList_TopRated() {

  }

}
