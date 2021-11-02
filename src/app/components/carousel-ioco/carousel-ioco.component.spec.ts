import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselIocoComponent } from './carousel-ioco.component';

describe('CarouselIocoComponent', () => {
  let component: CarouselIocoComponent;
  let fixture: ComponentFixture<CarouselIocoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselIocoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselIocoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
