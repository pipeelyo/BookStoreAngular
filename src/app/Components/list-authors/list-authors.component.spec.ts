import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAuthorsComponent } from './list-authors.component';

describe('ListAuthorsComponent', () => {
  let component: ListAuthorsComponent;
  let fixture: ComponentFixture<ListAuthorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListAuthorsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListAuthorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
