import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ROOT } from 'src/assets/ts/restConstants';
import { Utilisateur } from 'src/assets/ts/restData';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpClient) { }

  getUtilisateurConnecte(): Observable<Utilisateur> {
    return this.http.get<Utilisateur>(ROOT + 'utilisateur-connecte/');
  }
}
