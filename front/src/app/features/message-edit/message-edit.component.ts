import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { MatAutocomplete, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { map, Observable, startWith } from 'rxjs';
import { EtiquetteService } from 'src/app/services/etiquette.service';
import { MessageService } from 'src/app/services/message.service';
import { formatHeureMinute, formatIsoHttp, formatJourMoisAnnee } from 'src/app/utils/datetime-helper';
import { PATH_MESSAGES } from 'src/app/utils/router-constants';
import { snackBarError, snackBarSuccess, snackBarWarning } from 'src/app/utils/snackbar-helper';
import { Etiquette, Message } from 'src/assets/ts/restData';

import {
  DialogVisualisationMessageComponent,
} from './../dialog-visualisation-message/dialog-visualisation-message.component';

@Component({
  selector: 'app-message-edit',
  templateUrl: './message-edit.component.html',
  styleUrls: ['./message-edit.component.scss'],
})
export class MessageEditComponent implements OnInit {
  @ViewChild('messageEditForm', { static: false })
  messageEditForm!: NgForm;
  @ViewChild('etiquetteInput', { static: false })
  etiquetteInput!: ElementRef<HTMLInputElement>;
  @ViewChild('etiquetteAutocomplete', { static: false })
  etiquetteAutocomplete!: MatAutocomplete;
  message = new Message();
  etiquettes: Etiquette[] = [];
  etiquetteControl = new FormControl();
  etiquettesFiltrees!: Observable<Etiquette[]>;
  configSummernote = {
    toolbar: [
      ['style', ['bold', 'underline', 'clear']],
      ['insert', ['link']],
    ],
  };
  dateDebutControl = new FormControl('', [Validators.required]);
  dateFinControl = new FormControl('', [Validators.required]);
  dateDebutMin = new Date();
  dateDebutMax!: Date;
  dateFinMin = new Date();
  heureDebut!: string;
  heureFin!: string;
  isAfficheContenuErreur = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef,
    private snackbar: MatSnackBar,
    private dialog: MatDialog,
    private messageService: MessageService,
    private etiquetteService: EtiquetteService
  ) {
    this.etiquettesFiltrees = this.etiquetteControl.valueChanges.pipe(
      startWith(null),
      map((libelle: string | Etiquette | null) =>
        (libelle
          ? this.filterEtiquettes(libelle)
          : this.etiquettes.slice()
        ).filter((etiquette) => !this.message.etiquettes.includes(etiquette))
      )
    );
  }

  ngOnInit(): void {
    this.message.etiquettes = [];
    const idMessage = this.route.snapshot.params['idMessage'];
    this.etiquetteService.getEtiquettes().subscribe((res) => {
      this.etiquettes = res;
      this.message.etiquettes = [];
      this.refreshEtiquettes();
      if (idMessage) {
        this.messageService.getMessage(idMessage).subscribe((res2) => {
          this.message = res2;
          this.dateDebutControl.setValue(this.message.dateDebut);
          this.dateFinControl.setValue(this.message.dateFin);
          this.changeDates();
          this.heureDebut = formatHeureMinute(this.message.dateDebut);
          this.heureFin = formatHeureMinute(this.message.dateFin);
          this.refreshEtiquettes();
        });
      } else {
        this.cdr.detectChanges();
      }
    });
  }

  getDateErrorMessage(
    control: FormControl,
    minDate: Date,
    maxDate?: Date
  ): string {
    if (control.hasError('matDatepickerMin')) {
      return 'Doit être supérieure à ' + formatJourMoisAnnee(minDate);
    }
    if (control.hasError('matDatepickerMax') && maxDate) {
      return 'Doit être inférieure à ' + formatJourMoisAnnee(maxDate);
    }
    return control.hasError('required') ? 'La date est requise' : '';
  }

  changeDates(): void {
    this.dateDebutMax = moment(this.dateFinControl.value).toDate();
    this.dateFinMin = moment(this.dateDebutControl.value).toDate();
  }

  isContenuErreur(): boolean {
    return (
      !this.message.contenuHtml ||
      this.message.contenuHtml === '<br>' ||
      this.message.contenuHtml === '<p><br></p>'
    );
  }

  setAfficheContenuErreur(): void {
    this.isAfficheContenuErreur = this.isContenuErreur();
    this.cdr.detectChanges();
  }

  refreshContenuErreur(): void {
    if (this.isAfficheContenuErreur) {
      this.setAfficheContenuErreur();
    }
  }

  selectEtiquette(event: MatAutocompleteSelectedEvent): void {
    const etiquetteSelect = this.etiquettes.find(
      (etiquette) => etiquette.libelle === event.option.viewValue
    );
    if (etiquetteSelect) {
      this.message.etiquettes.push(etiquetteSelect);
      this.refreshEtiquettes();
    }
  }

  addEtiquette(event: MatChipInputEvent): void {
    const libelle = (event.value || '').trim();
    if (libelle && !this.etiquetteAutocomplete.isOpen) {
      const newEtiquette = new Etiquette();
      newEtiquette.libelle = libelle;
      this.etiquetteService.addEtiquette(newEtiquette).subscribe((res) => {
        this.etiquettes.push(res);
        this.message.etiquettes.push(res);
        this.refreshEtiquettes();
      });
    }
  }

  deleteEtiquette(etiquette: Etiquette): void {
    const index = this.message.etiquettes.indexOf(etiquette);
    if (index !== -1) {
      this.message.etiquettes.splice(index, 1);
      this.refreshEtiquettes();
    }
  }

  openChoixIcone(): void {}

  openVisualisationMessage(): void {
    if (this.isContenuErreur()) {
      snackBarWarning(
        this.snackbar,
        'Veuillez compléter le contenu du message.'
      );
    } else {
      this.dialog.open(DialogVisualisationMessageComponent, {
        data: this.message,
      });
    }
  }

  saveMessage(): void {
    if (
      this.messageEditForm.invalid ||
      this.dateDebutControl.invalid ||
      this.dateFinControl.invalid ||
      this.isContenuErreur()
    ) {
      snackBarWarning(
        this.snackbar,
        'Veuillez compléter les champs obligatoires.'
      );
      this.messageEditForm.form.markAllAsTouched();
      this.dateDebutControl.markAsTouched();
      this.dateFinControl.markAsTouched();
      this.setAfficheContenuErreur();
      this.cdr.detectChanges();
    } else {
      this.message.dateDebut = this.dateDebutControl.value
        ? formatIsoHttp(this.dateDebutControl.value, this.heureDebut)
        : '';
      this.message.dateFin = this.dateFinControl.value
        ? formatIsoHttp(this.dateFinControl.value, this.heureFin)
        : '';
      console.log('saveMessage', this.message);
      this.messageService.addMessage(this.message).subscribe(
        (res) => {
          snackBarSuccess(this.snackbar, 'Le message a bien été enregistré.');
          this.router.navigate([PATH_MESSAGES]);
        },
        (error) => {
          snackBarError(
            this.snackbar,
            "Le message n'a pas pu être enregistré."
          );
          console.log('error', error);
        }
      );
    }
  }

  private refreshEtiquettes(): void {
    this.etiquetteInput.nativeElement.value = '';
    this.etiquetteControl.setValue(null);
    this.cdr.detectChanges();
  }

  private filterEtiquettes(value: string | Etiquette): Etiquette[] {
    const libelle =
      typeof value === 'string'
        ? value.toLowerCase()
        : value.libelle.toLowerCase();
    return this.etiquettes.filter((etiquette) =>
      etiquette.libelle.toLowerCase().includes(libelle)
    );
  }
}
