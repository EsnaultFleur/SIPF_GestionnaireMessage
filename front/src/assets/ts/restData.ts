import { TypeAction } from 'src/app/utils/enums/enum.type-action';
import { TypeSnackbar } from 'src/app/utils/enums/enum.type-snackbar';

export class Utilisateur {
  id!: number;
  nom!: string;
  prenom!: string;
  token!: string;
}

export class Message {
  id!: number;
  dateDebut!: string;
  dateFin!: string;
  contenuHtml!: string;
  icone!: string;
  urlLien!: string;
  etiquettes!: Etiquette[];
}

export class Etiquette {
  id!: number;
  libelle!: string;
}

export class HistoriqueAction {
  id!: string;
  typeAction!: TypeAction;
  date!: string;
  utilisateur!: Utilisateur;
}

export class DonneesSnackbar {
  type!: TypeSnackbar;
  message!: string;
}
