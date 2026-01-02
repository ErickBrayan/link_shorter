import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { environment } from '../../environments/environment';
import { ResponseInterface } from '../model/response-interface';
import { ShortenService } from '../services/shorten-service';

@Component({
  selector: 'app-shorten',
  imports: [FormsModule],
  templateUrl: './shorten.html',
  styleUrl: './shorten.scss',
})
export class Shorten {

  originalUrl: string = '';
  BASE_URL: string = `${environment.BASE_URL}`;
  responseData: ResponseInterface = {} as ResponseInterface;

  linkResult: string = '';

  constructor(private shortenService: ShortenService) { }

  generateShortenUrl() {
    const shortenInterface = {
      url: this.originalUrl
    };

    this.shortenService.generateShortenUrl(shortenInterface).subscribe({
      next: (res) => {
        this.responseData = res;
        this.linkResult = this.BASE_URL + "/"+ this.responseData.shortCode;
      },
      error: (err) => {
        console.error('Error creating shortened URL (component):', err);
      }
    });

  }

  copyToClipboard(url: string) {
    navigator.clipboard.writeText(url);
    alert('¡Enlace copiado!');
  }

}
