import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { RodapeComponent } from './componentes/rodape/rodape.component';
import { CriarAlunoComponent } from './componentes/pensamentos/criar-aluno/criar-aluno.component';
import { ListarAlunoComponent } from './componentes/pensamentos/listar-aluno/listar-aluno.component';
import { AlunoComponent } from './componentes/pensamentos/aluno/aluno.component';
import { ExcluirAlunoComponent } from './componentes/pensamentos/excluir-aluno/excluir-aluno.component';
import { EditarAlunoComponent } from './componentes/pensamentos/editar-aluno/editar-aluno.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    RodapeComponent,
    CriarAlunoComponent,
    ListarAlunoComponent,
    AlunoComponent,
    ExcluirAlunoComponent,
    EditarAlunoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
