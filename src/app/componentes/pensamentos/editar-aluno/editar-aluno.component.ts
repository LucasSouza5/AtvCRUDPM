import { Router, ActivatedRoute } from '@angular/router';
import { AlunoService } from './../aluno.service';
import { Aluno } from './../aluno';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar-aluno',
  templateUrl: './editar-aluno.component.html',
  styleUrls: ['./editar-aluno.component.css']
})
export class EditarAlunoComponent implements OnInit {

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

  editarAluno() {
    this.service.editar(this.aluno).subscribe(() => {
      this.router.navigate(['/listarAluno']);
    });
  }

  cancelar() {
    this.router.navigate(['/listarAluno']);
  }

}
