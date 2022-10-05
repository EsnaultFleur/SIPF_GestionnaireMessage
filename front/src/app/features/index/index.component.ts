import { AuthService } from './../../services/auth.service';
import { Utilisateur } from './../../../assets/ts/restData';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { PATH_MESSAGES } from 'src/app/utils/router-constants';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  utilisateur = new Utilisateur();
  pathMessageConfigures = '/' + PATH_MESSAGES;

  constructor(private cdr: ChangeDetectorRef, private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.getUtilisateurConnecte().subscribe(res => {
      this.utilisateur = res;
      this.cdr.detectChanges();
    })
  }

}
