import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagemHomeComponentComponent } from './ImagemHomeComponent.component';

describe('ImagemHomeComponentComponent', () => {
  let component: ImagemHomeComponentComponent;
  let fixture: ComponentFixture<ImagemHomeComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImagemHomeComponentComponent]
    });
    fixture = TestBed.createComponent(ImagemHomeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
