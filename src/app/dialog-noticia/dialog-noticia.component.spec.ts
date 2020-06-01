import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogNoticiasComponent } from './dialog-noticia.component';

describe('DialogCompraComponent', () => {
  let component: DialogNoticiasComponent;
  let fixture: ComponentFixture<DialogNoticiasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogNoticiasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogNoticiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
