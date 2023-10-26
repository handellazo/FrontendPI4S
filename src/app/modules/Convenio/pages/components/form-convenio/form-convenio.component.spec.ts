import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormConvenioComponent } from './form-convenio.component';

describe('FormConvenioComponent', () => {
  let component: FormConvenioComponent;
  let fixture: ComponentFixture<FormConvenioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormConvenioComponent]
    });
    fixture = TestBed.createComponent(FormConvenioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
