import { Component } from '@angular/core';
import { RouterOutlet, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { SobremiComponent } from './sobremi/sobremi.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { ContactoComponent } from './contacto/contacto.component';
import { LandingComponent } from "./landing/landing.component";

const appRoutes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'sobre-mi', component: SobremiComponent },
  { path: 'proyectos', component: ProyectosComponent },
  { path: 'experiencia', component: ExperienciaComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' }, // Ruta por defecto
];


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,  LandingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  title = 'portfolio';
}
