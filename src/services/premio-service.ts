import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PremioService {
  private API_URL = 'http://uliondominio2.zapto.org:5153/api/UlionBd/';

  constructor(private http: HttpClient) {}

  canjearPremio(body: any) {
    return this.http.put<any>(this.API_URL + "canjearPremio", body);

  }
}
