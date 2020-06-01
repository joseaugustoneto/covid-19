import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotoesFixoComponent } from './botoes-fixo.component';

describe('BotoesFixoComponent', () => {
  let component: BotoesFixoComponent;
  let fixture: ComponentFixture<BotoesFixoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotoesFixoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotoesFixoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
