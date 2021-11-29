import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CrearcontactoService } from '../../servicios/crearcontacto.service';


@Component({
  selector: 'contacto-reactivo',
  templateUrl: './contacto-reactivo.component.html',
  styleUrls: ['./contacto-reactivo.component.css']
})
export class ContactoReactivoComponent implements OnInit {

  public form_contacto : FormGroup;

  idc:string;

  constructor (private crearontactoService : CrearcontactoService,
               private formBuilder : FormBuilder )
  {
      this.form_contacto = this.formBuilder.group ({

        id :  new FormControl(""),
        nombre : new FormControl("", [Validators.required, Validators.minLength(3)]),
        apellidos : new FormControl("", [Validators.required, Validators.minLength(4)]),
        organizacion : new FormControl(""),
        mail : new FormControl("", [Validators.required, Validators.email]),
        telefono : new FormControl("", [Validators.required, Validators.minLength(9) ,Validators.pattern(/[0-9]/)]),
        infoadic : new FormControl(""),

      })

  }


  ngOnInit(): void {  }


  evEnviar(){

    if (this.form_contacto.valid){
         console.log(this.form_contacto.value);

        /* Creamos el identificador único del documento */
        this.idc = this.crearontactoService.creaId();
        /* Modificamos el valor del identificador del formulario con la información obtenida a través del método creaId*/
        this.form_contacto.patchValue({id : this.idc});

        /* Damos de alta la información del formulario en firestore */
        this.crearontactoService.creaContacto(this.form_contacto.value);

        /* Incializamos el formulario */
        this.form_contacto.reset();

    }

 }



}
