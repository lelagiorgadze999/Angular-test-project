import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestViewComponent } from './test-view.component';

describe('TestViewComponent', () => {
  let component: TestViewComponent;
  let fixture: ComponentFixture<TestViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
