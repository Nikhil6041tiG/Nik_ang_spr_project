import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidComponentComponent } from './valid-component.component';

describe('ValidComponentComponent', () => {
  let component: ValidComponentComponent;
  let fixture: ComponentFixture<ValidComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValidComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValidComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
