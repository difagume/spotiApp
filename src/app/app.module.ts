import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Se indica que exiten esas rutas para ser usadas
import { app_routing } from './app.routes';

//Para usar los servicios del HttpClient
import { HttpClientModule } from '@angular/common/http';

//Para usar ngModel en los html
import { FormsModule } from '@angular/forms';

//Servicios
import { SpotifyService } from './services/spotify.service';

// Pipes
import { SinfotoPipe } from './pipies/sinfoto.pipe';
import { DomseguroPipe } from './pipies/domseguro.pipe';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { ArtistComponent } from './components/artist/artist.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    NavbarComponent,
    SinfotoPipe,
    DomseguroPipe,
    ArtistComponent
  ],
  imports: [
    BrowserModule,
    app_routing,
    HttpClientModule,
    FormsModule
  ],
  providers: [SpotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
