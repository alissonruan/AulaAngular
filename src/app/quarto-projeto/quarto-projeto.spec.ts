import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuartoProjeto } from './quarto-projeto';

describe('QuartoProjeto', () => {
  let component: QuartoProjeto;
  let fixture: ComponentFixture<QuartoProjeto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuartoProjeto]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuartoProjeto);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
