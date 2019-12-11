import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAssetsComponent } from './create-assets.component';

describe('CreateAssetsComponent', () => {
  let component: CreateAssetsComponent;
  let fixture: ComponentFixture<CreateAssetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAssetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAssetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
