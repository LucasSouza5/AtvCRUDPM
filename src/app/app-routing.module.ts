import { CriarAlunoComponent } from './componentes/pensamentos/criar-aluno/criar-aluno.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarAlunoComponent } from './componentes/pensamentos/listar-aluno/listar-aluno.component';
import { ExcluirAlunoComponent } from './componentes/pensamentos/excluir-aluno/excluir-aluno.component';
import { EditarAlunoComponent } from './componentes/pensamentos/editar-aluno/editar-aluno.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listarAluno',
    pathMatch: 'full'
  },
  {
    path: 'criarAluno',
    component: CriarAlunoComponent
  },
  {
    path: 'listarAluno',
    component: ListarAlunoComponent
  },
  {
    path: 'pensamentos/excluirAluno/:id',
    component: ExcluirAlunoComponent
  },
  {
    path: 'pensamentos/editarAluno/:id',
    component: EditarAlunoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
