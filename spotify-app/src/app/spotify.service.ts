import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//Dichiaro che il servizio è iniettabile agli altri componenti a partire dal componente root
const oauth = 'Bearer BQAKXcMZmd_iXDrCCyUxPcMkBYGAlkfjj3sjZtKxf9NmMdyzjMVAXm39Mk0sWRiu37Xb9o4qmA6mCBA4l0WFah7C10y-AOd6w3uYeI2oDzsW96LM1aJyrzNez5pdZwYHSc8kkRr1TnqsRl0pOzv4i6Rc23zIArZQ5WEQRbm4zjNDiXR4iNmnmYMoDE4o-QB1zDY'
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
  getAlb(AlbId:string) 
  {
    const url = `https://api.spotify.com/v1/albums/${AlbId}`;
    const headers = new HttpHeaders({
      Authorization: oauth
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;

  }

  getAlbums(AlbId:string) 
  {
    const url = 'https://api.spotify.com/v1/artists/' + AlbId + '/albums?market=US&album_type=single';
    const headers = new HttpHeaders({
      Authorization: oauth
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;

  }
}