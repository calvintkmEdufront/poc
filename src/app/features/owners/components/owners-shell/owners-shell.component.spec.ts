import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnersShellComponent } from './owners-shell.component';

describe('OwnersShellComponent', () => {
  let component: OwnersShellComponent;
  let fixture: ComponentFixture<OwnersShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnersShellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnersShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
