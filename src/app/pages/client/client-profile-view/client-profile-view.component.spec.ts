import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientProfileViewComponent } from './client-profile-view.component';

describe('ClientProfileViewComponent', () => {
  let component: ClientProfileViewComponent;
  let fixture: ComponentFixture<ClientProfileViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientProfileViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientProfileViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
