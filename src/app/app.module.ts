import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/* FORMULARIOS */
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './components/componente-principal/app-routing.module';


/* FIREBASE */
import { environment } from "../environments/environment";
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFirestoreModule } from "@angular/fire/compat/firestore";

/* COMPONENTES */
import { AppComponent } from './components/componente-principal/app.component';
import { CabeceraComponent } from './components/cabecera/cabecera.component';
import { RgpdComponent } from './components/rgpd/rgpd.component';
import { CuerpoComponent } from './components/cuerpo/cuerpo.component';
import { BicicletasComponent } from './components/bicicletas/bicicletas.component';
import { PatinetesComponent } from './components/patinetes/patinetes.component';
import { ContactoReactivoComponent } from './components/contacto-reactivo/contacto-reactivo.component';
import { PieComponent } from './components/pie/pie.component';



@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    RgpdComponent,
    CuerpoComponent,
    BicicletasComponent,
    PatinetesComponent,
    ContactoReactivoComponent,
    PieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
