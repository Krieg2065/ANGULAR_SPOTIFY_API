import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { SpotifyService } from '../spotify.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  //Osserva gli eventi sulla route tracks, restituisce la ParamMap che contiene tutti i   
  //parametri passati all’url
  routeObs: Observable<ParamMap> | undefined; 
  obsArt: Observable<Object> | undefined;
  results: any;
  artist : any; //Qui salverò la traccia selezionata
  obsAlbum: Observable<Object> | undefined;
  albums : any; //Qui salverò la traccia selezionata
  
  //Usiamo la dependency injection per farci mandare i moduli del routing e dello    
  //SpotifyService
  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private service: SpotifyService ) { }


  ngOnInit(): void {
    //Ottengo l'observable che notifica le informazioni sulla route attiva
    this.routeObs = this.route.paramMap;
    this.routeObs.subscribe(this.getRouterParam);
    console.log (this.routeObs)
  }

  //Ogni volta che viene invocata la route tracks/:id, l'observable richiama questo metodo
  getRouterParam = (params: ParamMap) =>
  {
    let artistId = params.get('id'); //Ottengo l'id dalla ParamMap
    console.log (artistId); //Stampo su console
    this.obsArt = this.service.getArt(artistId!);
    this.obsArt.subscribe((data) => { this.artist = data; console.log(this.artist) });
    this.obsAlbum = this.service.getAlbums(artistId!);
    this.obsAlbum.subscribe((data) => { this.albums = data; console.log(this.albums) });
  }

  back(){
    //DA FINIRE }
     }
  }