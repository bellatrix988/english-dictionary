import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestEngDictionaryComponent } from './test-eng-dictionary.component';

describe('TestEngDictionaryComponent', () => {
  let component: TestEngDictionaryComponent;
  let fixture: ComponentFixture<TestEngDictionaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestEngDictionaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestEngDictionaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
