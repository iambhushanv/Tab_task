import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabElevenComponent } from './tab-eleven.component';

describe('TabElevenComponent', () => {
  let component: TabElevenComponent;
  let fixture: ComponentFixture<TabElevenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabElevenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabElevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
