import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {PremioService} from '../../services/premio-service';
import {Subscription} from 'rxjs';
import {JsonPipe} from '@angular/common';

@Component({
  selector: 'app-buscar-premios-component',
  imports: [
    FormsModule,
    JsonPipe
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
    const body={
      codigo:this.codigo,
      nombreUsuario:this.nombreUsuario
    }


    console.log(body);
    this.subscription.add(this.service.canjearPremio(body).subscribe({

      next: (premio) => {
          alert(premio);

      },
      error: (err) => {
        alert(err.error);
      }
    }));
  }
}
