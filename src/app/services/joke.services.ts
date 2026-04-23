import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JokeService {
  private apiUrl = 'https://v2.jokeapi.dev/joke/Programming?type=twopart';

  constructor(private http: HttpClient) {}

  getJoke(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}