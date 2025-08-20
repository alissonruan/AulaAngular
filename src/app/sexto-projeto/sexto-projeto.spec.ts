import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SextoProjeto } from './sexto-projeto';

describe('SextoProjeto', () => {
  let component: SextoProjeto;
  let fixture: ComponentFixture<SextoProjeto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SextoProjeto]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SextoProjeto);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
