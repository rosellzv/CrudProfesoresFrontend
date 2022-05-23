import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Profesor } from 'src/app/profesor';
import { ProfesorService } from 'src/app/service/profesor.service';

@Component({
  selector: 'app-actualizar-profesor',
  templateUrl: './actualizar-profesor.component.html',
  styleUrls: ['./actualizar-profesor.component.css']
})
export class ActualizarProfesorComponent implements OnInit {

  id: number;
  profesor:Profesor;
  
  constructor(private profesorService: ProfesorService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.profesor = new Profesor;
    this.profesorService.buscarProfesor(this.id).subscribe(dato =>{
      this.profesor = dato;
      console.log(dato);
    })
  }

  datosModificados(profesor: Profesor){    
    this.profesorService.modificarProfesor(this.profesor.id,this.profesor).subscribe(dato =>{
      console.log(dato);
      this.irListaProfesores();
    })
  }
  irListaProfesores(){
    this.router.navigate(['/profesor']);
  }

}
