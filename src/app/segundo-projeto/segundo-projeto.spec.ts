import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegundoProjeto } from './segundo-projeto';

describe('SegundoProjeto', () => {
  let component: SegundoProjeto;
  let fixture: ComponentFixture<SegundoProjeto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SegundoProjeto]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SegundoProjeto);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
