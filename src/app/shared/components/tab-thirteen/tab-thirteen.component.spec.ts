import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabThirteenComponent } from './tab-thirteen.component';

describe('TabThirteenComponent', () => {
  let component: TabThirteenComponent;
  let fixture: ComponentFixture<TabThirteenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabThirteenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabThirteenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
