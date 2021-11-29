import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BicicletasComponent } from '../bicicletas/bicicletas.component';
import { PatinetesComponent } from '../patinetes/patinetes.component';
import { ContactoReactivoComponent } from '../contacto-reactivo/contacto-reactivo.component';
import { CuerpoComponent } from '../cuerpo/cuerpo.component';


const routes: Routes = [

   { path : "home", component: CuerpoComponent },
   { path : "bicicletas", component: BicicletasComponent },
   { path : "patinetes", component: PatinetesComponent },
   { path : "contacto", component: ContactoReactivoComponent },
   { path: "",   redirectTo: '/home', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
