import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AplistComponent } from './aplist.component';

describe('AplistComponent', () => {
  let component: AplistComponent;
  let fixture: ComponentFixture<AplistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AplistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AplistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
