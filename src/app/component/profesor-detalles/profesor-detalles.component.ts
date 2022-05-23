import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Profesor } from 'src/app/profesor';
import { ProfesorService } from 'src/app/service/profesor.service';

@Component({
  selector: 'app-profesor-detalles',
  templateUrl: './profesor-detalles.component.html',
  styleUrls: ['./profesor-detalles.component.css']
})
export class ProfesorDetallesComponent implements OnInit {

  id:Number;
  profesor: Profesor;
  constructor(private route:ActivatedRoute, private profesorService: ProfesorService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.profesor = new Profesor;
    this.profesorService.buscarProfesor(this.id).subscribe(dato =>{
      this.profesor = dato;
      console.log(dato);
    })
  }

}
