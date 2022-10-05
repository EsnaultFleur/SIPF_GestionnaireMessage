import { MatSnackBar } from '@angular/material/snack-bar';
import { TypeSnackbar } from 'src/app/utils/enums/enum.type-snackbar';
import { DonneesSnackbar } from 'src/assets/ts/restData';

import { NotificationComponent } from '../features/notification/notification.component';

export function snackBarSuccess(snackBar: MatSnackBar, message: string): void {
  const donneesSnackbar = new DonneesSnackbar();
  donneesSnackbar.type = TypeSnackbar.Success;
  donneesSnackbar.message = message;

  snackBar.openFromComponent(NotificationComponent, {
    data: donneesSnackbar,
    panelClass: 'snackbar-success',
    duration: 5000,
    horizontalPosition: 'center',
    verticalPosition: 'bottom',
  });
}

export function snackBarWarning(snackBar: MatSnackBar, message: string): void {
  const donneesSnackbar = new DonneesSnackbar();
  donneesSnackbar.type = TypeSnackbar.Warning;
  donneesSnackbar.message = message;

  snackBar.openFromComponent(NotificationComponent, {
    data: donneesSnackbar,
    panelClass: 'snackbar-warning',
    duration: 5000,
    horizontalPosition: 'center',
    verticalPosition: 'bottom',
  });
}

export function snackBarError(snackBar: MatSnackBar, message: string): void {
  const donneesSnackbar = new DonneesSnackbar();
  donneesSnackbar.type = TypeSnackbar.Error;
  donneesSnackbar.message = message;

  snackBar.openFromComponent(NotificationComponent, {
    data: donneesSnackbar,
    panelClass: 'snackbar-error',
    duration: 5000,
    horizontalPosition: 'center',
    verticalPosition: 'bottom',
  });
}
