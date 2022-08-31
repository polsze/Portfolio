import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SEducacionService } from 'src/app/servicios/s-educacion.service';
import { Educacion } from 'src/app/model/educacion';

@Component({
  selector: 'app-new-educacion',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.css']
})
export class NewEducacionComponent implements OnInit {
 nombreEdu: string = '';
  descripcionEdu: string = '';
  fechaEdu: string = '';
  linkEdu: string = '';
  


  constructor(private sEducacion: SEducacionService, private router: Router) { }

  ngOnInit(): void {

  }
  onCreate(): void{
    const edu = new Educacion(this.nombreEdu, this.descripcionEdu, this.fechaEdu, this.linkEdu);
    this.sEducacion.save(edu).subscribe(data => {
      alert("Educación añadida");
      this.router.navigate(['']);
    }, err => {
      alert("Falló");
      this.router.navigate(['']);
    })
  }
}