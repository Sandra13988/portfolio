import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
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
