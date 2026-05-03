import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabSixteenComponent } from './tab-sixteen.component';

describe('TabSixteenComponent', () => {
  let component: TabSixteenComponent;
  let fixture: ComponentFixture<TabSixteenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabSixteenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabSixteenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
