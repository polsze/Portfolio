import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SSkillsService } from 'src/app/servicios/s-skills.service';
import { Skills } from 'src/app/model/skills';


@Component({
  selector: 'app-new-skills',
  templateUrl: './new-skills.component.html',
  styleUrls: ['./new-skills.component.css']
})
export class NewSkillsComponent implements OnInit {
  nombreSki: string = '';
  valorSki: string = '';
  constructor(private sSkills: SSkillsService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate():void {
    const sk = new Skills(this.nombreSki, this.valorSki);
    this.sSkills.save(sk).subscribe(data => {
      alert("Habilidad añadida");
      this.router.navigate(['']);
    }, err => {
      alert("Falló");
      this.router.navigate(['']);
    })
  }
  }


