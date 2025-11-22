import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ImageUploaderComponent } from './image-uploader';

describe('ImageUploader', () => {
  let component: ImageUploaderComponent;
  let fixture: ComponentFixture<ImageUploaderComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageUploaderComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ImageUploaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should start with empty images array', () => {
    expect(component.uploadedImages.length).toBe(0);
  });

  it('should remove image correctly', () => {
    component.uploadedImages = ['test-image-1', 'test-image-2'];
    component.removeImage(0);
    expect(component.uploadedImages.length).toBe(1);
    expect(component.uploadedImages[0]).toBe('test-image-2');
  });
});