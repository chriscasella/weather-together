import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StationNavComponent } from './station-nav.component';

describe('StationNavComponent', () => {
  let component: StationNavComponent;
  let fixture: ComponentFixture<StationNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StationNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StationNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
