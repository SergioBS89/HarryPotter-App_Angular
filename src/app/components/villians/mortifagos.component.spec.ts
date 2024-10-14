import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MortifagosComponent } from './mortifagos.component';

describe('MortifagosComponent', () => {
  let component: MortifagosComponent;
  let fixture: ComponentFixture<MortifagosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MortifagosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MortifagosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
