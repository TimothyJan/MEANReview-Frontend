import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { MovieDetails } from '../models/movie-details';
import { DataList, DataListWithDates } from '../models/data-list';

const APIMOVIEROOT = "https://api.themoviedb.org/3/movie/";
const APITVSERIESROOT = "https://api.themoviedb.org/3/tv/";

@Injectable({
  providedIn: 'root'
})
export class TmdbService {

  constructor(private http: HttpClient) { }

  getMovieDetails(movieID:string): Observable<MovieDetails> {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: environment.authorizationHeader
      }
    };

    return this.http.get<MovieDetails>(APIMOVIEROOT+movieID+'?language=en-US', options);
  }

  getMoviesList_Popular(): Observable<DataList> {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: environment.authorizationHeader
      }
    };

    return this.http.get<DataList>(APIMOVIEROOT + 'popular?language=en-US&page=1', options);
  }

  getMoviesList_NowPlaying(): Observable<DataListWithDates> {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: environment.authorizationHeader
      }
    };

    return this.http.get<DataListWithDates>(APIMOVIEROOT + 'now_playing?language=en-US&page=1', options);
  }

  getMoviesList_Upcoming(): Observable<DataListWithDates> {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: environment.authorizationHeader
      }
    };

    return this.http.get<DataListWithDates>(APIMOVIEROOT + 'upcoming?language=en-US&page=1', options);
  }

  getMoviesList_TopRated(): Observable<DataList> {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: environment.authorizationHeader
      }
    };
    return this.http.get<DataList>(APIMOVIEROOT + 'top_rated?language=en-US&page=1', options);
  }

  getTVSeriesList_Popular(): Observable<DataList> {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: environment.authorizationHeader
      }
    };
    return this.http.get<DataList>(APITVSERIESROOT + 'popular?language=en-US&page=1', options);
  }

  getTVSeriesList_AiringToday(): Observable<DataList> {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: environment.authorizationHeader
      }
    };
    return this.http.get<DataList>(APITVSERIESROOT + '/airing_today?language=en-US&page=1', options);
  }

  getTVSeriesList_OnTV(): Observable<DataList> {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: environment.authorizationHeader
      }
    };
    return this.http.get<DataList>(APITVSERIESROOT + 'on_the_air?language=en-US&page=1', options);
  }

  getTVSeriesList_TopRated(): Observable<DataList> {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: environment.authorizationHeader
      }
    };
    return this.http.get<DataList>(APITVSERIESROOT + 'top_rated?language=en-US&page=1', options);
  }

}
