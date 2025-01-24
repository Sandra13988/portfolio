import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

  descargarCV() {
    const link = document.createElement('a');
    link.href = 'assets/CV.pdf';
    link.download = 'CV_Sandra.pdf'; 
  }
  
}
