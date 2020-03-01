import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { Filme } from './filme.model';
import { api } from '../app.api';
import { HttpClient, HttpResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class FilmeService {

  url = 'http://localhost:4200/filme'

  constructor(private http: HttpClient) { }

  getFilmes(): Observable<HttpResponse<Filme[]>> {
    return this.http.get<Filme[]>(`${api}/filme`, {observe: 'response'});
  }
  
  postFilmes(filme: Filme): Observable<any>{
    return this.http.post(`${api}/filme`,filme);
  }

  getFilmesById(id): Observable<Filme> {
    return this.http.get<Filme>(`${api}/filme/${id}`)
  }

  putFilme(id, filme):Observable<any> {
    return this.http.put<Filme>(`${api}/filme/${id}`, filme)
  }

  deleteFilme(id):Observable<Filme>{
    return this.http.delete<Filme>(`${api}/filme/${id}`)
  }
}
