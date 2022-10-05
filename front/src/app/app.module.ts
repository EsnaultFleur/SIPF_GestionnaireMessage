import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import localeFr from '@angular/common/locales/fr';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
  MatNativeDateModule,
  MatRippleModule,
} from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { NgxSummernoteModule } from 'ngx-summernote';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AucunElementComponent } from './features/aucun-element/aucun-element.component';
import { DialogHistoriqueActionsComponent } from './features/dialog-historique-actions/dialog-historique-actions.component';
import {
  DialogSuppressionMessageComponent,
} from './features/dialog-suppression-message/dialog-suppression-message.component';
import {
  DialogVisualisationMessageComponent,
} from './features/dialog-visualisation-message/dialog-visualisation-message.component';
import { IndexComponent } from './features/index/index.component';
import { MessageEditComponent } from './features/message-edit/message-edit.component';
import { MessagesComponent } from './features/messages/messages.component';
import { TypeActionPipe } from './utils/pipe/type-action.pipe';

registerLocaleData(localeFr);

export const MY_DATE_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

const angularMaterial = [
  MatToolbarModule,
  MatMenuModule,
  MatButtonModule,
  MatRippleModule,
  MatCardModule,
  MatDialogModule,
  MatFormFieldModule,
  MatChipsModule,
  MatAutocompleteModule,
  MatNativeDateModule,
  MatDatepickerModule,
  MatExpansionModule,
  MatInputModule,
  MatSelectModule,
  MatTableModule,
  MatPaginatorModule,
  MatSnackBarModule,
  MatTooltipModule,
];

const pipes = [TypeActionPipe];

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    pipes,
    MessagesComponent,
    MessageEditComponent,
    DialogHistoriqueActionsComponent,
    DialogSuppressionMessageComponent,
    DialogVisualisationMessageComponent,
    AucunElementComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSkeletonLoaderModule,
    NgxSkeletonLoaderModule.forRoot({
      animation: 'progress',
      loadingText: 'Cet élément est actuellement en cours de chargement...',
    }),
    NgxSummernoteModule,
    angularMaterial,
  ],
  providers: [
    MatDatepickerModule,
    { provide: LOCALE_ID, useValue: 'fr-FR' },
    { provide: MAT_DATE_LOCALE, useValue: 'fr-FR' },
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
