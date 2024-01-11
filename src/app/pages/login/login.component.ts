import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthappService } from 'src/app/core/services/authapp.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userId: string = "";
  password:string = "";

  autenticato :boolean = true;
  errorMsg : string = "Spiacente, la password e/o lo userId sono errati";

  titolo : string = "Accesso e autenticazione";
  sottotitolo : string = "Inserisci credenziali di accesso"

  constructor(private route: Router, private BasicAuth  :AuthappService) { }

  ngOnInit(): void {

  }

  gestAuth = () : void => {
    //usiamo il service
    if(this.BasicAuth.autentica(this.userId, this.password)){
      this.route.navigate(['welcome', this.userId]);
      this.autenticato = true;
    } else {
      this.autenticato = false;
    }
  }

}
