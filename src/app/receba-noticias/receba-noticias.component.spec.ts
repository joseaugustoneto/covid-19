import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecebaNoticiasComponent } from './receba-noticias.component';

describe('RecebaNoticiasComponent', () => {
  let component: RecebaNoticiasComponent;
  let fixture: ComponentFixture<RecebaNoticiasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecebaNoticiasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecebaNoticiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
