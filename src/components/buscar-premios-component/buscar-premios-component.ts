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

  nombreUsuario: string="";
  codigo: string="";
  premio :any;
  subscription : Subscription = new Subscription();
  constructor(private service: PremioService) {
  }

  onSubmit() {
    const body=[
      this.codigo,
      this.nombreUsuario
    ]
    this.subscription.add(this.service.canjearPremio(body).subscribe({
      next: (premio) => {
        if (premio) {
          alert("el premio ya ha sido canjeado el dia: "+premio);

        }
        else
        {
          alert("Premio canjeado exitosamente");
        }
      },
      error: (err) => {
        console.error('Ha ocurrido un error:');
      }
    }));
  }
}
