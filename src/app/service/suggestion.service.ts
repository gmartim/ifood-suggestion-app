import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { Suggestion } from '../entity/suggestion';

@Injectable()
export class SuggestionService {
  constructor(private httpClient: HttpClient) {}

  playlistWeatherCity$(cityName: string, countryCode: string): Observable<any> {
    return this.httpClient.get(
      `/ifood-suggestion-api/api/playlist/weather/city/${cityName}?countryCode=${countryCode}`
    );
  }

  playlistWeatherLatAndLon$(lat: number, lon: number): Observable<any> {
    return this.httpClient.get(
      `/ifood-suggestion-api/api/playlist/weather/lat/${lat}/lon/${lon}`
    );
  }
}
