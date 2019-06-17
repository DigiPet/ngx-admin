import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WRConfirmComponent } from './wr-confirm.component';

describe('WRConfirmComponent', () => {
  let component: WRConfirmComponent;
  let fixture: ComponentFixture<WRConfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WRConfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WRConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
