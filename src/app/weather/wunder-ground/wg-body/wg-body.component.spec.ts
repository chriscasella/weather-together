import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WgBodyComponent } from './wg-body.component';

describe('WgBodyComponent', () => {
  let component: WgBodyComponent;
  let fixture: ComponentFixture<WgBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WgBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WgBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
