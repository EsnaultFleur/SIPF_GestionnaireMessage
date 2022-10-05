import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MessageService } from 'src/app/services/message.service';
import { snackBarError, snackBarSuccess } from 'src/app/utils/snackbar-helper';
import { Message } from 'src/assets/ts/restData';

@Component({
  selector: 'app-dialog-suppression-message',
  templateUrl: './dialog-suppression-message.component.html',
  styleUrls: ['./dialog-suppression-message.component.scss'],
})
export class DialogSuppressionMessageComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DialogSuppressionMessageComponent>,
    @Inject(MAT_DIALOG_DATA) public message: Message = new Message(),
    private snackbar: MatSnackBar,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {}

  deleteMessage(): void {
    this.messageService.deleteMessage(this.message.id).subscribe(
      (res) => {
        snackBarSuccess(this.snackbar, 'Le message a bien été supprimé.');
        this.dialogRef.close();
      },
      (err) => {
        snackBarError(this.snackbar, "Le message n'a pas pu être supprimé.");
      }
    );
  }
}
