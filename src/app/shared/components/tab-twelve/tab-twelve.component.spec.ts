import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabTwelveComponent } from './tab-twelve.component';

describe('TabTwelveComponent', () => {
  let component: TabTwelveComponent;
  let fixture: ComponentFixture<TabTwelveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabTwelveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabTwelveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
