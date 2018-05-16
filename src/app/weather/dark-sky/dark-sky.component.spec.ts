import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DarkSkyComponent } from './dark-sky.component';

describe('DarkSkyComponent', () => {
  let component: DarkSkyComponent;
  let fixture: ComponentFixture<DarkSkyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DarkSkyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DarkSkyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
