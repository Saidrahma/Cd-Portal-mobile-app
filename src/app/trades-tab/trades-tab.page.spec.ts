import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TradesTabPage } from './trades-tab.page';

describe('TradesTabPage', () => {
  let component: TradesTabPage;
  let fixture: ComponentFixture<TradesTabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TradesTabPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TradesTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
