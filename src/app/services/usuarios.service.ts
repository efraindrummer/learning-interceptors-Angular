import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }

  obtenerUsuarios(){
    let params = new HttpParams().append('page', '2');
    params = params.append('nombre','Efrain May');

    return this.http.get(`https://reqres.in/api/users`, {
      params,
    }).pipe(
      map(resp => resp['data']),
    );
  }
}
