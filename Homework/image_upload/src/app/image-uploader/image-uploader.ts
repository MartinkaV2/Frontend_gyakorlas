import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-image-uploader',
  templateUrl: './image-uploader.html',
  styleUrls: ['./image-uploader.css'],
  standalone: true,
  imports: [CommonModule]
})
export class ImageUploader {
  uploadedImages: string[] = [];
  isDragOver = false;
  maxImages = 10;

  constructor(private cdr: ChangeDetectorRef) {}

  onFileSelected(event: any): void {
    const files = event.target.files;
    this.handleFiles(files);
    // Reset the file input to allow selecting the same file again
    event.target.value = '';
  }

  onDragOver(event: DragEvent): void {
    event.preventDefault();
    this.isDragOver = true;
  }

  onDragLeave(event: DragEvent): void {
    event.preventDefault();
    this.isDragOver = false;
  }

  onDrop(event: DragEvent): void {
    event.preventDefault();
    this.isDragOver = false;
    
    if (event.dataTransfer?.files) {
      this.handleFiles(event.dataTransfer.files);
    }
  }

  private handleFiles(files: FileList): void {
    const availableSlots = this.maxImages - this.uploadedImages.length;
    
    if (availableSlots <= 0) {
      alert(`Maximum ${this.maxImages} képet tölthetsz fel!`);
      return;
    }

    const filesArray = Array.from(files);
    const filesToProcess = filesArray.slice(0, availableSlots);

    if (filesArray.length > availableSlots) {
      alert(`${filesArray.length - availableSlots} kép nem lett feltöltve, mert elérte a maximum ${this.maxImages} képet.`);
    }

    let processedCount = 0;

    for (let i = 0; i < filesToProcess.length; i++) {
      const file = filesToProcess[i];
      
      if (!file.type.match('image.*')) continue;
      
      const reader = new FileReader();
      
      reader.onload = (e: any) => {
        this.uploadedImages.push(e.target.result);
        processedCount++;
        
        // Force change detection after each image is loaded
        this.cdr.detectChanges();
        
        // If all files are processed, do a final detection
        if (processedCount === filesToProcess.length) {
          this.cdr.detectChanges();
        }
      };
      
      reader.onerror = () => {
        processedCount++;
        console.error('Hiba történt a kép feltöltése során');
        
        if (processedCount === filesToProcess.length) {
          this.cdr.detectChanges();
        }
      };
      
      reader.readAsDataURL(file);
    }
  }

  removeImage(index: number): void {
    this.uploadedImages.splice(index, 1);
    this.cdr.detectChanges();
  }

  removeAllImages(): void {
    this.uploadedImages = [];
    this.cdr.detectChanges();
  }

  triggerFileInput(): void {
    const fileInput = document.getElementById('fileInput') as HTMLInputElement;
    fileInput?.click();
  }

  get uploadedCount(): number {
    return this.uploadedImages.length;
  }

  get remainingSlots(): number {
    return this.maxImages - this.uploadedImages.length;
  }
}