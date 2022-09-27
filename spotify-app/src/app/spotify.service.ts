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
        'Bearer BQDbwdV7LUK0rIzIN8loeMlTJDj503SvyRDfoUHMeyUAhPlfJI5Ax3xtSVBuqZ5ihHXIea6xRm1cD6EfvtjStDeCYwCV4DSBZoxpm9ALZpFgMsxNotOh5tvGe6SPoN5iETm70l0dSrQxQovQB9OLfHEDsbpr__Pbith0ajHJgKPV6xyqCGQ7RTnr4zgu7dbEk54'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }

  getTrack(trackId:string) 
  {
    const url = `https://api.spotify.com/v1/tracks/${trackId}`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQDbwdV7LUK0rIzIN8loeMlTJDj503SvyRDfoUHMeyUAhPlfJI5Ax3xtSVBuqZ5ihHXIea6xRm1cD6EfvtjStDeCYwCV4DSBZoxpm9ALZpFgMsxNotOh5tvGe6SPoN5iETm70l0dSrQxQovQB9OLfHEDsbpr__Pbith0ajHJgKPV6xyqCGQ7RTnr4zgu7dbEk54'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;

  }
}