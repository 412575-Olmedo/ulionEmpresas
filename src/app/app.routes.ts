import { Routes } from '@angular/router';
import {LoginComponent} from '../components/login-component/login-component';
import {BuscarPremiosComponent} from '../components/buscar-premios-component/buscar-premios-component';
import {AuthGuard} from '../services/auth-guard';

export const routes: Routes = [
  { path: '', component: BuscarPremiosComponent }

];
