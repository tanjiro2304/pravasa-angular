import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadwaysComponent } from './roadways.component';

describe('RoadwaysComponent', () => {
  let component: RoadwaysComponent;
  let fixture: ComponentFixture<RoadwaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoadwaysComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoadwaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
