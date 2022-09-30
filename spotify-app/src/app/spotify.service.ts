import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//Dichiaro che il servizio è iniettabile agli altri componenti a partire dal componente root
const oauth = 'Bearer BQCRj4inoLkWyUw7-GjX3X6GCemmYJLnEg0QtDg_VSm2dizfrUstKLXuRH3AL7GvdxxvUjKhodwfGL8d1K7Y9vVoPPY3K_Ox4LcwAf7L0EQqqgW8TJtVi51Zcu3o_l-6CxUrbKyET82WCK19F-ki0ycl4qFKaV80DdwraJl5QMdNvypyd-mSCncYE53_25mM470'
@Injectable({
  providedIn: 'root'  
})

export class SpotifyService {
   //url per oauth: https://developer.spotify.com/console/get-search-item/
  //Ottengo il modulo HttpClient
  constructor(private http: HttpClient) { }

  searchTrack(query: string) {
    const url = `https://api.spotify.com/v1/search?q=${query}&type=track`;
    const headers = new HttpHeaders({
      Authorization: oauth
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }
  getTrack(trackId:string) 
  {
    const url = `https://api.spotify.com/v1/tracks/${trackId}`;
    const headers = new HttpHeaders({
      Authorization: oauth 
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;

  }

  getArt(ArtId:string) 
  {
    const url = `https://api.spotify.com/v1/artists/${ArtId}`;
    const headers = new HttpHeaders({
      Authorization: oauth
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;

  }
}