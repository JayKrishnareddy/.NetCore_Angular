import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowBookComponent } from './show-book.component';

describe('ShowBookComponent', () => {
  let component: ShowBookComponent;
  let fixture: ComponentFixture<ShowBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
