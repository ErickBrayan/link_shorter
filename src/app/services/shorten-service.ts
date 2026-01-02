import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ShortenInterface } from '../model/shorten-interface';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { ResponseInterface } from '../model/response-interface';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ShortenService {

  BASE_URL: string = `${environment.BASE_URL}/shorten`;
  res: ResponseInterface = {} as ResponseInterface;

  constructor(private http: HttpClient) { }
  

  generateShortenUrl(shortenInterface: ShortenInterface): Observable<ResponseInterface> {
    
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-API-KEY': environment.API_KEY
    })

    return this.http.post<ResponseInterface>(this.BASE_URL, shortenInterface, { headers: headers}).pipe(
      tap((response) => {
        console.log('Shortened URL generated:', response);
        this.res = response as ResponseInterface;
      }),
      catchError((error) => {
        console.error('Error generating shortened URL:', error);
        return throwError(() => new Error('Error generating shortened URL'));
      })
    )

  }
}
