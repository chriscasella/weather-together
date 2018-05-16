import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NwsComponent } from './nws.component';

describe('NwsComponent', () => {
  let component: NwsComponent;
  let fixture: ComponentFixture<NwsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NwsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NwsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
