import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAssetsComponent } from './edit-assets.component';

describe('EditAssetsComponent', () => {
  let component: EditAssetsComponent;
  let fixture: ComponentFixture<EditAssetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAssetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAssetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
