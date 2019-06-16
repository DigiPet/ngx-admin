import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WalkRequestComponent } from './walk-request.component';

describe('WalkRequestComponent', () => {
  let component: WalkRequestComponent;
  let fixture: ComponentFixture<WalkRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalkRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalkRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
