import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/model/proyecto';
import { Router } from '@angular/router';
import { SProyectoService } from 'src/app/servicios/s-proyecto.service';

@Component({
  selector: 'app-new-proyecto',
  templateUrl: './new-proyecto.component.html',
  styleUrls: ['./new-proyecto.component.css']
})
export class NewProyectoComponent implements OnInit {

  nombrePro: string = '';
  descripcionPro: string = '';
  linkPro: string = '';

  constructor(private sProyecto: SProyectoService, private router: Router ) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const proye = new Proyecto(this.nombrePro, this.descripcionPro, this.linkPro);
    this.sProyecto.save(proye).subscribe(data =>{
      alert("Proyecto añadido");
      this.router.navigate(['']);
    }, err =>{
      alert("Falló");
      this.router.navigate(['']);
    })
  }

}
