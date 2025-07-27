import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PremioService {
  private API_URL = 'http://localhost:8080/api/UlionBd/';

  constructor(private http: HttpClient) {}
  getPremio(inputUsuario: string, inputCodigo: string) {
    return this.http.get<any>(this.API_URL+"canjearPremio?codigo="+inputCodigo+"&nombreUsuario="+inputUsuario);
  }
}
