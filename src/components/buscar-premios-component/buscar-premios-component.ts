import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {PremioService} from '../../services/premio-service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-buscar-premios-component',
  imports: [
    FormsModule
  ],
  templateUrl: './buscar-premios-component.html',
  styleUrl: './buscar-premios-component.css'
})
export class BuscarPremiosComponent {

  inputUsuario: string="";
  inputCodigo: string="";
  premio :any;
  subscription : Subscription = new Subscription();
  constructor(private service: PremioService) {
  }

  onSubmit() {
    this.subscription.add(this.service.getPremio(
      this.inputUsuario, this.inputCodigo
    ).subscribe({
      next: (premio) => {
        this.premio = premio;
      },
      error: (err) => {
        console.error('Error:', err);
      }
    }));
  }
}
