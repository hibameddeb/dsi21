
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [MatCardModule,HeaderComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.scss'
})
export class AccueilComponent {
}

