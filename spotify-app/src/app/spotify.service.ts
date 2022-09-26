import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//Dichiaro che il servizio è iniettabile agli altri componenti a partire dal componente root
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
      Authorization:
        'Bearer BQCgM7sdyPm-8RKMeqF2ibQycYamPcbtXR8OZgj2t1SznMbUdcPBw1kYVzCLsk36oH-ZtzDSwvY7F0y0L0NpK20y4OVT8FZqkhsdn5q4YKxdwPgEG6yLGaG3NFo1yvG9f7hxJtRe7oaH5TSO5Ytp3DPDMDHUpwJCNPbH8psTiRLc347gAO3AU2ocXf72oCXdCmM'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }
}