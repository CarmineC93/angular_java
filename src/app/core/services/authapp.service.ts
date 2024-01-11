import { Injectable } from '@angular/core';
import { SessionState } from 'http2';

@Injectable({
  providedIn: 'root'
})
export class AuthappService {

  constructor() { }

  autentica = (userId: string, password: string) : boolean => {
    var retVar = (userId === 'Carmine' && password === '123') ? true : false;
    //per salvare il dato dell'utente nel session storage
    if(retVar){
      sessionStorage.setItem("Utente", userId);
    }
    return retVar;
  }

  loggedUser = () : string | null => (sessionStorage.getItem("Utente")) ? sessionStorage.getItem("Utente") : "";

  isLogged = () : boolean => (sessionStorage.getItem("Utente")) ? true : false;

  clearUser = () : void => sessionStorage.removeItem("Utente");

  cleraAll  = () : void => sessionStorage.clear();

}
