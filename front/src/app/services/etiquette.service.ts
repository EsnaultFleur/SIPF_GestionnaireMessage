import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ETIQUETTES } from 'src/assets/ts/restConstants';
import { Etiquette } from 'src/assets/ts/restData';

@Injectable({ providedIn: 'root' })
export class EtiquetteService {
  constructor(private http: HttpClient) {}

  getEtiquettes(): Observable<Etiquette[]> {
    return this.http.get<Etiquette[]>(ETIQUETTES);
  }

  addEtiquette(etiquette: Etiquette): Observable<Etiquette> {
    return this.http.post<Etiquette>(ETIQUETTES, etiquette);
  }
}
