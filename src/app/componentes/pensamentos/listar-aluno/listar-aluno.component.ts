import { AlunoService } from '../aluno.service';
import { Component, OnInit } from '@angular/core';
import { Aluno } from '../aluno';

@Component({
  selector: 'app-listar-aluno',
  templateUrl: './listar-aluno.component.html',
  styleUrls: ['./listar-aluno.component.css'],
})
export class ListarAlunoComponent implements OnInit {
  listaAlunos: Aluno[] = [];
  constructor(private service: AlunoService) {}

  ngOnInit(): void {
    this.service.listar().subscribe((listaAlunos) => {
      this.listaAlunos = listaAlunos;
    });
  }
}
