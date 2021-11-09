import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { AdmiService } from 'src/app/services/admi.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  widgetTitle: string = 'Escuela de Iniciacion Deportiva Politecnico Colombiano Jaime Isaza Cadavid';
  widgetSubTitle: string = 'Bienvenido';
  noticias;
  aplicaciones;

  constructor(private loginService:LoginService, private adminService:AdmiService, private route:Router) { }

  ngOnInit() {
    this.adminService.getNoticias().subscribe((data) => 
    {
      if(data)
      {
        this.noticias = data;
      }
    });

    this.adminService.getAplicaciones().subscribe((data) => 
    {
      if(data)
      {
        this.aplicaciones = data;
      }
    });
  }
  
  verDetalle(id)
  {
    this.route.navigate([`detalleprograma/${id}`]);
  }

}
