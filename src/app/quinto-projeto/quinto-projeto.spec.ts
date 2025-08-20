import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuintoProjeto } from './quinto-projeto';

describe('QuintoProjeto', () => {
  let component: QuintoProjeto;
  let fixture: ComponentFixture<QuintoProjeto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuintoProjeto]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuintoProjeto);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
