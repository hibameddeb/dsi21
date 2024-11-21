import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { PanierComponent } from './panier/panier.component';

export const routes: Routes = [
   {path:'',component:AccueilComponent},
   {path:'connexion',component:ConnexionComponent},
   {path:'inscription',component:InscriptionComponent},
   {path:'panier',component:PanierComponent},
];
@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ]
})
export class RoutingCommponent{}
