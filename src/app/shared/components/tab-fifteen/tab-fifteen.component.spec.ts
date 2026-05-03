import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabFifteenComponent } from './tab-fifteen.component';

describe('TabFifteenComponent', () => {
  let component: TabFifteenComponent;
  let fixture: ComponentFixture<TabFifteenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabFifteenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabFifteenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
