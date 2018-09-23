import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrevencaoComponent } from './prevencao.component';

describe('PrevencaoComponent', () => {
  let component: PrevencaoComponent;
  let fixture: ComponentFixture<PrevencaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrevencaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrevencaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
