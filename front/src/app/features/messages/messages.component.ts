import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { EtiquetteService } from 'src/app/services/etiquette.service';
import { MessageService } from 'src/app/services/message.service';
import { isHoursOnDate } from 'src/app/utils/datetime-helper';
import { PATH_EDITION, PATH_MESSAGES } from 'src/app/utils/router-constants';
import { Etiquette, Message } from 'src/assets/ts/restData';

import { DialogHistoriqueActionsComponent } from '../dialog-historique-actions/dialog-historique-actions.component';
import { DialogSuppressionMessageComponent } from '../dialog-suppression-message/dialog-suppression-message.component';
import { DialogVisualisationMessageComponent } from '../dialog-visualisation-message/dialog-visualisation-message.component';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
})
export class MessagesComponent implements OnInit {
  displayedColumns: string[] = [
    'dateDebut',
    'dateFin',
    'contenu',
    'etiquettes',
    'actions',
  ];
  datasource!: MatTableDataSource<Message>;
  messages: Message[] = [];
  etiquettesControl = new FormControl();
  etiquettes: Etiquette[] = [];
  isLoading = false;

  constructor(
    private router: Router,
    private dialog: MatDialog,
    private etiquetteService: EtiquetteService,
    private messageService: MessageService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.etiquetteService.getEtiquettes().subscribe((res) => {
      this.etiquettes = res;
      this.messageService.getMessages().subscribe((res2) => {
        this.messages = res2;
        this.datasource = new MatTableDataSource<Message>(this.messages);
        this.isLoading = true;
        this.cdr.detectChanges();
      });
      this.cdr.detectChanges();
    });
  }

  isHoursOnDate(date: Date): boolean {
    return isHoursOnDate(date);
  }

  openVisualisationMessage(message: Message): void {
    this.dialog.open(DialogVisualisationMessageComponent, {
      data: message,
    });
  }

  editMessage(idMessage?: string): void {
    this.router.navigate([
      PATH_MESSAGES,
      idMessage ? idMessage : 'new',
      PATH_EDITION,
    ]);
  }

  deleteMessage(message: Message): void {
    const dialogRef = this.dialog.open(DialogSuppressionMessageComponent, {
      data: message,
    });
  }

  openHistoriqueActions(idMessage: string): void {
    this.dialog.open(DialogHistoriqueActionsComponent, { data: idMessage });
  }

  deleteEtiquette(etiquette: Etiquette) {
    const etiquettes = this.etiquettesControl.value as Etiquette[];
    const index = etiquettes.indexOf(etiquette);
    if (index !== -1) {
      etiquettes.splice(index, 1);
      this.etiquettesControl.setValue(etiquettes);
    }
  }
}
