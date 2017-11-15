import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActressComponent } from './actress.component';

describe('ActressComponent', () => {
  let component: ActressComponent;
  let fixture: ComponentFixture<ActressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
