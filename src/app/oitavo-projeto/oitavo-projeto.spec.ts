import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OitavoProjeto } from './oitavo-projeto';

describe('OitavoProjeto', () => {
  let component: OitavoProjeto;
  let fixture: ComponentFixture<OitavoProjeto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OitavoProjeto]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OitavoProjeto);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
