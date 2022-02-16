import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiphyDisplayComponent } from './giphy-display.component';

describe('GiphyDisplayComponent', () => {
  let component: GiphyDisplayComponent;
  let fixture: ComponentFixture<GiphyDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiphyDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiphyDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
