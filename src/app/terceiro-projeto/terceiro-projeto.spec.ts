import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerceiroProjeto } from './terceiro-projeto';

describe('TerceiroProjeto', () => {
  let component: TerceiroProjeto;
  let fixture: ComponentFixture<TerceiroProjeto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TerceiroProjeto]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TerceiroProjeto);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
