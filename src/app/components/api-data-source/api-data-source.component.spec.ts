import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiDataSourceComponent } from './api-data-source.component';

describe('ApiDataSourceComponent', () => {
  let component: ApiDataSourceComponent;
  let fixture: ComponentFixture<ApiDataSourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiDataSourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiDataSourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
