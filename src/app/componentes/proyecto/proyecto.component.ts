import { Component, OnInit } from '@angular/core';
import { SProyectoService } from 'src/app/servicios/s-proyecto.service';
import { Proyecto } from 'src/app/model/proyecto';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {
   proy: Proyecto[] = [];
  constructor(private sProyecto: SProyectoService, private tokenService: TokenService) { }
  
  isLogged = false;

  ngOnInit(): void {
     this.cargarProyecto();
     if(this.tokenService.getToken()){
       this.isLogged = true;
     } else {
       this.isLogged = false;
     }
  }

  cargarProyecto(): void{
    this.sProyecto.lista().subscribe(data => {this.proy = data});
  }

  delete(id?: number){
    if(id != undefined){
      this.sProyecto.delete(id).subscribe(data => {this.cargarProyecto();}, err =>{alert ("No se pudo borrar el proyecto");})
    }
  }
}
