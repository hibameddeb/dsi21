import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ConnexionComponent } from '../connexion/connexion.component';
import { PanierComponent } from '../panier/panier.component';
import { InscriptionComponent } from '../inscription/inscription.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule,RouterLink,RouterLinkActive,ConnexionComponent,PanierComponent,InscriptionComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
