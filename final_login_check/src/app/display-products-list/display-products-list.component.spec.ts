import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayProductsListComponent } from './display-products-list.component';

describe('DisplayProductsListComponent', () => {
  let component: DisplayProductsListComponent;
  let fixture: ComponentFixture<DisplayProductsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayProductsListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayProductsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
