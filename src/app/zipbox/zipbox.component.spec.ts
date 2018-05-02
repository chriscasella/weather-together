import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZipboxComponent } from './zipbox.component';

describe('ZipboxComponent', () => {
  let component: ZipboxComponent;
  let fixture: ComponentFixture<ZipboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZipboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZipboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
