import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/servicios/persona.service'


import { persona } from 'src/app/model/persona.model'






@Component({
  selector: 'app-acercade',
  templateUrl: './acercade.component.html',
  styleUrls: ['./acercade.component.css']
})
export class AcercadeComponent implements OnInit {
  persona: persona = new persona("","","","");
  constructor(public personaService: PersonaService) { }

  ngOnInit(): void {
     this.personaService.getPersona().subscribe(data => {
       this.persona=data;
     })
    }
  }
