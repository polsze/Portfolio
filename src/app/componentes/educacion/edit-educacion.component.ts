import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion';
import { ActivatedRoute, Router } from '@angular/router';
import { SEducacionService } from 'src/app/servicios/s-educacion.service';

@Component({
  selector: 'app-edit-educacion',
  templateUrl: './edit-educacion.component.html',
  styleUrls: ['./edit-educacion.component.css']
})
export class EditEducacionComponent implements OnInit {
  educA : Educacion = null;
  constructor(private sEducacion: SEducacionService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sEducacion.detail(id).subscribe(data => {
      this.educA = data;
    }, err => {
       alert("Error al modificar educación");
      this.router.navigate(['']);
    })
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.sEducacion.update(id, this.educA).subscribe(data => {
      this.router.navigate(['']);
    }, err => {
      alert("Error al modificar educación");
      this.router.navigate(['']);
    })
  }
}
