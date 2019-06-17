import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WRInfoComponent } from './wr-info.component';

describe('InfoComponent', () => {
  let component: WRInfoComponent;
  let fixture: ComponentFixture<WRInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WRInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WRInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
