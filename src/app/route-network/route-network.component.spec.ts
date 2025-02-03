import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteNetworkComponent } from './route-network.component';

describe('RouteNetworkComponent', () => {
  let component: RouteNetworkComponent;
  let fixture: ComponentFixture<RouteNetworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouteNetworkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RouteNetworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
