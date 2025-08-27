import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetimoProjeto } from './setimo-projeto';

describe('SetimoProjeto', () => {
  let component: SetimoProjeto;
  let fixture: ComponentFixture<SetimoProjeto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetimoProjeto]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetimoProjeto);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
