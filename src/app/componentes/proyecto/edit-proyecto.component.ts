import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SProyectoService } from 'src/app/servicios/s-proyecto.service';
import { Proyecto } from 'src/app/model/proyecto';



@Component({
  selector: 'app-edit-proyecto',
  templateUrl: './edit-proyecto.component.html',
  styleUrls: ['./edit-proyecto.component.css']
})
export class EditProyectoComponent implements OnInit {
 
 proyecto : Proyecto = null;
  constructor(private sProyecto: SProyectoService, private activatedRouter: ActivatedRoute, private router: Router) { }

   ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sProyecto.detail(id).subscribe(data => {
      this.proyecto = data;
    }, err => {
       alert("Error al modificar el proyecto");
      this.router.navigate(['']);
    })
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.sProyecto.update(id, this.proyecto).subscribe(data => {
      this.router.navigate(['']);
    }, err => {
      alert("Error al modificar el proyecto");
      this.router.navigate(['']);
    })
  }
}
