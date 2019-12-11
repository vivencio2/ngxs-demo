import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadAssetsComponent } from './read-assets.component';

describe('ReadAssetsComponent', () => {
  let component: ReadAssetsComponent;
  let fixture: ComponentFixture<ReadAssetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadAssetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadAssetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
