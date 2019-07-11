import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionTabPage } from './position-tab.page';

describe('PositionTabPage', () => {
  let component: PositionTabPage;
  let fixture: ComponentFixture<PositionTabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PositionTabPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PositionTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
