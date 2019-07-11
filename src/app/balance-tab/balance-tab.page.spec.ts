import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BalanceTabPage } from './balance-tab.page';

describe('BalanceTabPage', () => {
  let component: BalanceTabPage;
  let fixture: ComponentFixture<BalanceTabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BalanceTabPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BalanceTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
