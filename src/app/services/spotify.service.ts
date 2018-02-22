import { Injectable } from '@angular/core';

//Para trabajar con peticiones
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SpotifyService {

  constructor(public http: HttpClient) {
    console.log("Servicio de spotify listo");
  }

  getArtistas() {
    let url = "https://api.spotify.com/v1/search?query=william+luna&type=artist&limit=20";

    this.http.get(url)
      .subscribe(respuesta => {
        console.log(respuesta);

      })
  }

}
