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
    document.body.appendChild(link); // Añade el enlace al DOM
    link.click(); // Simula el clic en el enlace
    document.body.removeChild(link); // Elimina el enlace del DOM después de la descarga
  }
  
}
