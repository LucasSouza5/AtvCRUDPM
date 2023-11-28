import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcluirAlunoComponent } from './excluir-aluno.component';

describe('ExcluirAlunoComponent', () => {
  let component: ExcluirAlunoComponent;
  let fixture: ComponentFixture<ExcluirAlunoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExcluirAlunoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExcluirAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
