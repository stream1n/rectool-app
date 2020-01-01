import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaserouterComponent } from './baserouter.component';

describe('BaserouterComponent', () => {
  let component: BaserouterComponent;
  let fixture: ComponentFixture<BaserouterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaserouterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaserouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
