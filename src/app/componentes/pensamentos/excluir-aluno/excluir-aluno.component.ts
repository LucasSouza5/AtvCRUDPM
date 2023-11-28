import { ActivatedRoute, Router } from '@angular/router';
import { AlunoService } from './../aluno.service';
import { Component, OnInit } from '@angular/core';
import { Aluno } from '../aluno';

@Component({
  selector: 'app-excluir-aluno',
  templateUrl: './excluir-aluno.component.html',
  styleUrls: ['./excluir-aluno.component.css']
})
export class ExcluirAlunoComponent implements OnInit {

  aluno: Aluno = {
    id: 0,
    email: '',
    nome: '',
    modelo: ''
  };

  constructor(
    private service: AlunoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.buscarPorId(parseInt(id!)).subscribe((aluno) => {
      this.aluno = aluno;
    });
  }

  excluirAluno() {
    if (this.aluno.id) {
      this.service.excluir(this.aluno.id).subscribe(() => {
        this.router.navigate(['/listarAluno']);
      });
    }
  }

  cancelar() {
    this.router.navigate(['/listarAluno']);
  }
}
