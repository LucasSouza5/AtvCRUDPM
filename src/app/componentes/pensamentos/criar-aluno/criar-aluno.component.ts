import { Router } from '@angular/router';
import { AlunoService } from './../aluno.service';
import { Aluno } from './../aluno';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-aluno',
  templateUrl: './criar-aluno.component.html',
  styleUrls: ['./criar-aluno.component.css']
})
export class CriarAlunoComponent implements OnInit {

  aluno: Aluno = {
    email: '',
    nome: '',
    modelo: 'modelo1'
  }

  constructor(
    private service: AlunoService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  criarAluno() {
    this.service.criar(this.aluno).subscribe(() => {
      this.router.navigate(['/listarAluno'])
    })
  }

  cancelar() {
    this.router.navigate(['/listarAluno'])
  }

}
