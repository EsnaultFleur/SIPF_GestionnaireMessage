import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MessageService } from 'src/app/services/message.service';
import { HistoriqueAction } from 'src/assets/ts/restData';

@Component({
  selector: 'app-dialog-historique-actions',
  templateUrl: './dialog-historique-actions.component.html',
  styleUrls: ['./dialog-historique-actions.component.scss'],
})
export class DialogHistoriqueActionsComponent implements OnInit {
  displayedColumns: string[] = ['typeAction', 'date', 'utilisateur'];
  datasource!: MatTableDataSource<HistoriqueAction>;
  historiqueActions: HistoriqueAction[] = [];
  isLoading = true;

  constructor(
    @Inject(MAT_DIALOG_DATA) public idMessage: number,
    private messageService: MessageService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.messageService.getHistoriqueActions(this.idMessage).subscribe(
      (res) => {
        this.historiqueActions = res;
        this.datasource = new MatTableDataSource<HistoriqueAction>(
          this.historiqueActions
        );
        this.isLoading = false;
        this.cdr.detectChanges();
      },
      (error) => {
        this.isLoading = false;
        this.cdr.detectChanges();
      }
    );
  }
}
