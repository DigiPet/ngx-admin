import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WrCreateComponent } from './wr-create.component';

describe('WrCreateComponent', () => {
  let component: WrCreateComponent;
  let fixture: ComponentFixture<WrCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WrCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
