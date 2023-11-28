import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarAlunoComponent } from './listar-aluno.component';

describe('ListarAlunoComponent', () => {
  let component: ListarAlunoComponent;
  let fixture: ComponentFixture<ListarAlunoComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListarAlunoComponent],
    })
      .compileComponents();

    fixture = TestBed.createComponent(ListarAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
