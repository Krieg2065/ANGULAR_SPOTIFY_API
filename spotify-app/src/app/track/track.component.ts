import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { SpotifyService } from '../spotify.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent implements OnInit {
  //Osserva gli eventi sulla route tracks, restituisce la ParamMap che contiene tutti i   
  //parametri passati all’url
  routeObs: Observable<ParamMap> | undefined; 
  obsTrack: Observable<Object> | undefined;
  results: any;
  track : any; //Qui salverò la traccia selezionata
  
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
    let trackId = params.get('id'); //Ottengo l'id dalla ParamMap
    console.log (trackId); //Stampo su console
    this.obsTrack = this.service.getTrack(trackId!);
    this.obsTrack.subscribe((data) => { this.track = data; console.log(this.track) });
  }

  back(){
    //DA FINIRE }
     }
  }