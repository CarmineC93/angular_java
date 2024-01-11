import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SalutiDataService } from 'src/app/core/services/saluti-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  utente : string = "";
  titolo : string = "Benvenuto in AlphaShop";
  sottotitolo : string = "Visualizza articoli"

  constructor(private route: ActivatedRoute, private salutiSrv : SalutiDataService) { }

  ngOnInit(): void {
    //passo il parametro userId alla pagina welcome
    this.utente = this.route.snapshot.params['userId'];
  }

  saluti : string = "";

  handleResponse(response: Object){
    this.saluti = response.toString();
  }

  getSaluti = () : void => {
    this.salutiSrv.getSaluti().subscribe(response => this.handleResponse(response));
  }

}
