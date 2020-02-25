import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VictoriesComponent } from './victories.component';

describe('VictoriesComponent', () => {
  let component: VictoriesComponent;
  let fixture: ComponentFixture<VictoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VictoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VictoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
