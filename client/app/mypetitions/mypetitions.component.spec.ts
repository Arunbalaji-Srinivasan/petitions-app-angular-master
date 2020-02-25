import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MypetitionsComponent } from './mypetitions.component';

describe('MypetitionsComponent', () => {
  let component: MypetitionsComponent;
  let fixture: ComponentFixture<MypetitionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MypetitionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MypetitionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
