import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { RespuestaBackend, Usuario } from '../interfaces/interface';
 
@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private httpclient : HttpClient) { }

  getUsers():Observable<Usuario>
  {
    return this.httpclient.get<Usuario>('http://localhost:3001/user');
  }

  getforEmail(email : String)
  {
    return this.httpclient.get<Usuario>('http://localhost:3001/user/' + email);    
  }

  postUser(Usuario : any){
    return this.httpclient.post('http://localhost:3001/user',{usuario : Usuario})
  }


}
