import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//Dichiaro che il servizio è iniettabile agli altri componenti a partire dal componente root
const oauth = 'Bearer BQAFhuPhvxR1HhhlBUn4fYxZJ5AFCQfC41sDvtiXfARQx81BTUwmXvwMhamN-h7ZQKgcVr6tYS0LxRLWJxPB_iUSzw3HEWrIG4WaY2El2QSUDUBjz0njooSO1RRLg9aTSMImg6kc5aWxL80Liie1ygwz3yS17gPr30x21kg5xmuNIinLwmMfAEzY4pqgjxrrq58'
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