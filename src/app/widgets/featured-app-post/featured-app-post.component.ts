import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'widget-featured-app-post',
  templateUrl: 'featured-app-post.component.html'
})
export class FeaturedAppPostComponent implements OnInit {

  @Input()
  aplicacion;

  widgetName: string;
  widgetDescription: string;  
  widgetUrl: string;

  constructor() { }

  ngOnInit() {
    this.widgetName = this.aplicacion.nombre;
    this.widgetDescription = this.aplicacion.descripcion;
    this.widgetUrl = this.aplicacion.url; 
  }

}
