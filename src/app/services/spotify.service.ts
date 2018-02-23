import { Injectable } from '@angular/core';

// Para trabajar con peticiones
import { HttpClient, HttpHeaders } from '@angular/common/http';

import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artistas: any[] = [];

  //tracks: any[] = [];

  urlSpotify: string = 'https://api.spotify.com/v1/';

  token: string = 'BQCPVKxKFf-YvClE_iEYRyE39LYlIGpA5jKhdnyazH4ULXN7LxmsVomHbORQxUg_eAfXo4p7R6DF4H5rNkA';

  constructor(public http: HttpClient) {
    console.log('Servicio de spotify listo');
  }

  private getHeaders(): HttpHeaders {
    let headers = new HttpHeaders({
      'authorization': `Bearer ${this.token}`
    });
    return headers;
  }

  getTopTracks(id:string){
    let url = `${this.urlSpotify}artists/${id}/top-tracks?country=EC`;

    let headers = this.getHeaders();
    // Observador
    return this.http.get(url, { headers });
      // .map((respuesta: any) => {
      //   this.tracks = respuesta.tracks;
      //   return this.tracks;
      // });
  }

  getArtista(id: string) {
    let url = `${this.urlSpotify}artists/${id}`;

    let headers = this.getHeaders();
    // Observador
    return this.http.get(url, { headers });
      // .map((respuesta: any) => {
      //   this.artistas = respuesta.artists.items;
      //   return this.artistas;
      // });
  }

  getArtistas(termino: string) {
    let url = `${this.urlSpotify}search?query=${termino}&type=artist&limit=20`;

    let headers = this.getHeaders();
    // Observador
    return this.http.get(url, { headers })
      .map((respuesta: any) => {
        this.artistas = respuesta.artists.items;
        return this.artistas;
      });
  }
}
