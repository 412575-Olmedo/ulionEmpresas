import { Component } from '@angular/core';
import {UsuarioService} from '../../services/usuario-service';
import {Router} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {JsonPipe, NgClass} from '@angular/common';
import {AuthService} from '../../services/auth-service';

@Component({
  selector: 'app-login-component',
  imports: [
    FormsModule,
    JsonPipe,
    NgClass
  ],
  templateUrl: './login-component.html',
  styleUrl: './login-component.css'
})
export class LoginComponent {

  usuario: string="";
  contrasena: string="";
  verPassword: boolean = false;

  constructor(private service: UsuarioService, private router: Router, private authService: AuthService) {
  }


  onSubmit() {
    //hacer peticion get para obtener el id de la empresa
    //con un router.navigate, navegar hasta el componente de premios
    // pasandole el id de la empresa

    //this.http.get<number>('.../IniciarSesionEmpresa?usuario=xxx&pass=yyy') usar el servicio
    //  .subscribe((id) => {
        this.authService.login(1);
       this.router.navigate(['/buscarPremios']);
    //  });

  }
}
