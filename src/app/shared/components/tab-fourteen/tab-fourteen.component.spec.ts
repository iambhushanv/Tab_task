import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabFourteenComponent } from './tab-fourteen.component';

describe('TabFourteenComponent', () => {
  let component: TabFourteenComponent;
  let fixture: ComponentFixture<TabFourteenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabFourteenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabFourteenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
