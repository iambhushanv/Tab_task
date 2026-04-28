import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabSevenComponent } from './tab-seven.component';

describe('TabSevenComponent', () => {
  let component: TabSevenComponent;
  let fixture: ComponentFixture<TabSevenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabSevenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabSevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
