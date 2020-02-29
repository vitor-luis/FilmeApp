import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Filme } from './filme.model';
import { api } from '../app.api';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class FilmeService {

  url = 'http://localhost:4200/filme'

  constructor(private http: HttpClient) { }

  getFilmes(): Observable<Filme[]> {
    return this.http.get<Filme[]>(`${api}/filme`);
  }
  
  postFilmes(filme: Filme): Observable<any>{
    return this.http.post(`${api}/filme`,filme);
  }
}
