import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Aluno } from './aluno';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  private readonly API = 'http://localhost:3000/pensamentos'

  constructor(private http: HttpClient) { }

  listar(): Observable<Aluno[]> {
    return this.http.get<Aluno[]>(this.API)
  }

  criar(aluno: Aluno): Observable<Aluno> {
    return this.http.post<Aluno>(this.API, aluno)
  }

  editar(aluno: Aluno): Observable<Aluno> {
    const url = `${this.API}/${aluno.id}`
    return this.http.put<Aluno>(url, aluno )

  }

  excluir(id: number): Observable<Aluno> {
    const url = `${this.API}/${id}`
    return this.http.delete<Aluno>(url)
  }

  buscarPorId(id: number): Observable<Aluno> {
    const url = `${this.API}/${id}`
    return this.http.get<Aluno>(url)
  }

}
