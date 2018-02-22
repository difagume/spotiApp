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

  getArtistas() {
    let url = "https://api.spotify.com/v1/search?query=metallica&type=artist&limit=20";
    let headers = new HttpHeaders({
      'authorization': 'Bearer BQA8dyK-Fxl7Xfz-S7NkZSwHlUJRw0v_W1x3lZ19au4udu3gj-Kea_dsqwyg9bVpZXZdCcXQ7TlAW8VxzuQ'
    });
    //Observador
    return this.http.get(url, { headers })
      .map((respuesta: any) => {
        this.artistas = respuesta.artists.items;
        return this.artistas;
      });
  }
}
