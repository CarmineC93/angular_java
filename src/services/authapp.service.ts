import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthappService {

  constructor() { }

  autentica = (userId: string, password: string) : boolean => {
    return (userId === 'Carmine' && password === '123') ? true : false;
  }
}
