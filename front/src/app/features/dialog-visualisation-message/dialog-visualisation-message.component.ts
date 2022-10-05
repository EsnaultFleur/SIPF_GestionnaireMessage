import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Message } from 'src/assets/ts/restData';

@Component({
  selector: 'app-dialog-visualisation-message',
  templateUrl: './dialog-visualisation-message.component.html',
  styleUrls: ['./dialog-visualisation-message.component.scss']
})
export class DialogVisualisationMessageComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public message: Message) { }

  ngOnInit(): void {
  }

}
