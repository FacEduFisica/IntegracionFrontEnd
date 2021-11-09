import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdmiService } from 'src/app/services/admi.service';

@Component({
  selector: 'app-aplicaciones',
  templateUrl: './aplicaciones.component.html',
  styleUrls: ['./aplicaciones.component.scss']
})
export class AplicacionesComponent implements OnInit {
  aplicaciones;
  aplicacion:any;
  foto:any;
  fileData:any;
  aplicacionForm: FormGroup;
  mensaje="";
  update = false;
  nuevo = false;
  
  constructor(private adminService:AdmiService, private formBuilder: FormBuilder,private router:Router) { }

  ngOnInit() {
    this.aplicacionForm = this.formBuilder.group({
      nombre: ['',Validators.required],
      descripcion: ['',Validators.required],
      url: ['',Validators.required]
    });
    this.mensaje="";
    this.getApps();

  }

  getApps() {
    this.adminService.getAplicaciones().subscribe(
      res => {
        this.aplicaciones = res
      }     
    )
  }

  cancelar() {
    this.nuevo = false;
    this.aplicacionForm.reset();
  }

  nuevaApp() {
    this.nuevo = true;
  }

  setApp(){
    if(this.aplicacionForm.valid){
      this.adminService.setAplicaciones(this.aplicacionForm.value).subscribe(
        data => {
          if(data.status == 200) {
            this.aplicacionForm.reset();
            this.getApps();
            this.mensaje=data.data
          }
        }
      )
    }else{
      this.mensaje="Debe llenar todos los campos"
    }
  }

  sendUpdateApp(id){
    this.adminService.setupdateAplicaciones(id,this.aplicacionForm.value).subscribe(
      data =>{
        if(data.status == 200) {
          this.mensaje = data.data;
          this.aplicacionForm.reset();
          this.getApps();
          this.router.navigate([`/home`]);
        }else {
          this.mensaje= 'Error'
        }
      }
    )
  }

  delete(id) {
    this.adminService.deleteAplicaciones(id).subscribe(
      data => {
        if (data) {
          this.getApps()
        }
      }
    )
  }

  editar(id) {
    this.aplicacion = this.aplicaciones.find(
      element => element.id === id
    );
    this.aplicacionForm.patchValue({
      nombre: this.aplicacion.nombre,
      descripcion: this.aplicacion.descripcion,
      url: this.aplicacion.url,
    });
    this.nuevo = true;
    this.update = true;
  }

}
