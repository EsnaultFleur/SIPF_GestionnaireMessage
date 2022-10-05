import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HISTORIQUE_ACTIONS, MESSAGES } from 'src/assets/ts/restConstants';
import { HistoriqueAction, Message } from 'src/assets/ts/restData';

@Injectable({ providedIn: 'root' })
export class MessageService {
  constructor(private http: HttpClient) {}

  getMessages(): Observable<Message[]> {
    return this.http.get<Message[]>(MESSAGES);
  }

  getMessage(idMessage: number): Observable<Message> {
    return this.http.get<Message>(MESSAGES + idMessage + '/');
  }

  addMessage(message: Message): Observable<Message> {
    return this.http.post<Message>(MESSAGES, message);
  }

  updateMessage(message: Message): Observable<Message> {
    return this.http.put<Message>(MESSAGES + message.id + '/', message);
  }

  deleteMessage(idMessage: number): Observable<any> {
    return this.http.delete<any>(MESSAGES + idMessage + '/');
  }

  getHistoriqueActions(idMessage: number): Observable<HistoriqueAction[]> {
    return this.http.get<HistoriqueAction[]>(
      MESSAGES + idMessage + '/' + HISTORIQUE_ACTIONS
    );
  }
}
