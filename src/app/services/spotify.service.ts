import { Injectable } from '@angular/core';

//Para trabajar con peticiones
import { HttpClient, HttpHeaders } from '@angular/common/http';

import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artistas: any[] = [];

  constructor(public http: HttpClient) {
    console.log("Servicio de spotify listo");
  }

  getArtistas(termino: string) {
    let url = `https://api.spotify.com/v1/search?query=${ termino }&type=artist&limit=20`;
    let headers = new HttpHeaders({
      'authorization': 'Bearer BQA9zWgvmYNCqqJOxjdxf7bm5U0adPcHLeOXdGVvmMF-VR30APT4RYPsRDwAKgHNDS_cNnD0oqK3OJFfxwg'
    });
    //Observador
    return this.http.get(url, { headers })
      .map((respuesta: any) => {
        this.artistas = respuesta.artists.items;
        return this.artistas;
      });
  }
}
