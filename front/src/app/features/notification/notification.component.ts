import { Component, Inject, OnInit } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { TypeSnackbar } from 'src/app/utils/enums/enum.type-snackbar';
import { DonneesSnackbar } from 'src/assets/ts/restData';

@Component({
  selector: 'bl-app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent implements OnInit {
  typeSnackbar = TypeSnackbar;

  constructor(
    @Inject(MAT_SNACK_BAR_DATA) public donneesSnackbar: DonneesSnackbar
  ) {}

  ngOnInit(): void {}
}
