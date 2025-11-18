import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CubosMarcasComponent } from './cubos-marcas.component';

describe('CubosMarcasComponent', () => {
  let component: CubosMarcasComponent;
  let fixture: ComponentFixture<CubosMarcasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CubosMarcasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CubosMarcasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
