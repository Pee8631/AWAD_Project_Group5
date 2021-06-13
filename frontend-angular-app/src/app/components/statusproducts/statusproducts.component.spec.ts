import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusproductsComponent } from './statusproducts.component';

describe('StatusproductsComponent', () => {
  let component: StatusproductsComponent;
  let fixture: ComponentFixture<StatusproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusproductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
