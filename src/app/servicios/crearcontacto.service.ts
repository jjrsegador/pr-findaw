
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Contacto } from '../interfaces/contacto.';


@Injectable({
  providedIn: 'root'
})


export class CrearcontactoService {


  constructor(private angularFirestore : AngularFirestore) {

   }

  /* Genera identificador único */
  creaId():string {

    return this.angularFirestore.createId();

  }


  creaContacto(icontacto:Contacto) {

    icontacto.fechaCreacion = new Date();


    this.angularFirestore
        .collection("contactos")
        .doc(icontacto.id)
        .set(icontacto);

  }

}
