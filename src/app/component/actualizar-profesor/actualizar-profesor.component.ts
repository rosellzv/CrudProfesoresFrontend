import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Profesor } from 'src/app/profesor';
import { ProfesorService } from 'src/app/service/profesor.service';
import Swal from 'sweetalert2';

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
    const {id,nombre,apellido,asignatura,universidad,edad} = profesor;
    console.log(profesor);
    if(nombre ==null || apellido==null || asignatura == null || universidad == null || edad == null)
    {
      
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Faltan campos por llenar!'        
      })
      this.errorUpdateProfesor(id);
    } else{

      this.profesorService.modificarProfesor(this.profesor.id,this.profesor).subscribe(dato =>{        
        this.irListaProfesores();
        Swal.fire({
        icon: 'success',
        title: 'Correcto',
        text: 'Se modificaron los datos correctamente!'        
      })
      })
    }
  }
  irListaProfesores(){
    this.router.navigate(['/profesor']);
  }
  errorUpdateProfesor(id:number){
    this.router.navigate(['modificar_profesor',id])
  }

}
