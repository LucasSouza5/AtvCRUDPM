import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarAlunoComponent } from './criar-aluno.component';

describe('CriarAlunoComponent', () => {
  let component: CriarAlunoComponent;
  let fixture: ComponentFixture<CriarAlunoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarAlunoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriarAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
