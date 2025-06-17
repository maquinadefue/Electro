import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  standalone: false,
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  sending = false;

  onSubmit() {
    this.sending = true;
    // Simular envío (reemplazar con llamada HTTP real)
    setTimeout(() => {
      this.sending = false;
      alert('Mensaje enviado con éxito. Nos pondremos en contacto pronto.');
    }, 1500);
  }

  pulseIcon(event: MouseEvent) {
    const target = event.target as HTMLElement;
    target.classList.add('pulse');
    setTimeout(() => {
      target.classList.remove('pulse');
    }, 1500);
  }
}
