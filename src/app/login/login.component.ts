import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userId: string = "Carmine";
  password:string = "";

  autenticato :boolean = true;
  errorMsg : string = "spiacente, password e/o userid sono errati"

  constructor(private route: Router) { }

  ngOnInit(): void {

  }

  gestAut = () : void => {
    console.log(this.userId);

    if(this.userId === "Carmine" && this.password === "123_Stella"){
      this.route.navigate(['welcome', this.userId]);

      this.autenticato = true;

    } else {
      this.autenticato = false;
    }
  }

}
