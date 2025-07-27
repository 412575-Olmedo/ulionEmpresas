import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarPremiosComponent } from './buscar-premios-component';

describe('ListaPremiosComponent', () => {
  let component: BuscarPremiosComponent;
  let fixture: ComponentFixture<BuscarPremiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuscarPremiosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarPremiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
