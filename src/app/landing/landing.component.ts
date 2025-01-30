import { Component } from '@angular/core';
import { InicioComponent } from '../inicio/inicio.component';
import { SobremiComponent } from '../sobremi/sobremi.component';
import { ProyectosComponent } from '../proyectos/proyectos.component';
import { ExperienciaComponent } from '../experiencia/experiencia.component';
import { ContactoComponent } from '../contacto/contacto.component';
import { HabilidadesComponent } from "../habilidades/habilidades.component";

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [InicioComponent, SobremiComponent, ProyectosComponent, ExperienciaComponent, ContactoComponent, HabilidadesComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {
  
}
