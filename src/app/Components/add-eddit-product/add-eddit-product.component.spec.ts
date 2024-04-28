import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEdditProductComponent } from './add-eddit-product.component';

describe('AddEdditProductComponent', () => {
  let component: AddEdditProductComponent;
  let fixture: ComponentFixture<AddEdditProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddEdditProductComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddEdditProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
