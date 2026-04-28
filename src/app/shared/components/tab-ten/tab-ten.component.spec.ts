import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabTenComponent } from './tab-ten.component';

describe('TabTenComponent', () => {
  let component: TabTenComponent;
  let fixture: ComponentFixture<TabTenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabTenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabTenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
