import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCartComponent } from './view-cart.component';

describe('ViewCartComponent', () => {
  let component: ViewCartComponent;
  let fixture: ComponentFixture<ViewCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewCartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
