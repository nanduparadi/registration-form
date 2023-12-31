import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourComponentComponent } from './your-component.component';

describe('YourComponentComponent', () => {
  let component: YourComponentComponent;
  let fixture: ComponentFixture<YourComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YourComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YourComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
