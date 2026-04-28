import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabEightComponent } from './tab-eight.component';

describe('TabEightComponent', () => {
  let component: TabEightComponent;
  let fixture: ComponentFixture<TabEightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabEightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabEightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
