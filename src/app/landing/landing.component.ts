import { Component } from '@angular/core';
import { InicioComponent } from '../inicio/inicio.component';
import { SobremiComponent } from '../sobremi/sobremi.component';
import { ProyectosComponent } from '../proyectos/proyectos.component';
import { ExperienciaComponent } from '../experiencia/experiencia.component';
import { ContactoComponent } from '../contacto/contacto.component';
import { HabilidadesComponent } from "../habilidades/habilidades.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [InicioComponent, SobremiComponent, ProyectosComponent, ExperienciaComponent,  HabilidadesComponent, CommonModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {
  showPopup: boolean = false;
  email: string = 'sandra13988@gmail.com';
  copySuccess: string = '';

  togglePopup() {
    this.showPopup = !this.showPopup;
  }

  copyToClipboard() {
    navigator.clipboard.writeText(this.email).then(
      () => {
        this.copySuccess = '¡Correo copiado al portapapeles!';
        setTimeout(() => (this.copySuccess = ''), 3000); // Limpiar mensaje después de 3 segundos
      },
      () => {
        this.copySuccess = 'Error al copiar';
      }
    );
  }
}
