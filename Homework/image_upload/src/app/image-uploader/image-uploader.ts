import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-image-uploader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-uploader.html',
  styleUrls: ['./image-uploader.css']
})
export class ImageUploaderComponent {

  selectedFile: File | null = null;
  selectedPreview: string | null = null;

  uploading = false;
  uploadedImageUrl: string | null = null;

  sharing = false;
  sharePanelVisible = false;
  copyButtonText = 'Másolás';
  toastMessage: string | null = null;

  private IMGBB_API_KEY = 'ca9b5247c0f4808db809fe19c291e9cc';

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (!input.files?.length) return;

    this.selectedFile = input.files[0];

    const reader = new FileReader();
    reader.onload = e => this.selectedPreview = e.target?.result as string;
    reader.readAsDataURL(this.selectedFile);
  }

  async uploadImage() {
    if (!this.selectedFile) return;

    this.uploading = true;

    const formData = new FormData();
    formData.append('image', this.selectedFile);

    try {
      const response = await fetch(
        `https://api.imgbb.com/1/upload?key=${this.IMGBB_API_KEY}`,
        { method: 'POST', body: formData }
      );

      const data = await response.json();
      this.uploadedImageUrl = data.data?.url || null;

    } catch (e) {
      console.error(e);
      this.showToast('Hiba a feltöltésben');
    }

    this.uploading = false;
  }

  onShare() {
    if (!this.uploadedImageUrl) return;

    this.sharing = true;
    this.sharePanelVisible = false;

    setTimeout(() => {
      this.sharing = false;
      this.sharePanelVisible = true;
    }, 1500);
  }

  async copyLink(link: string) {
    await navigator.clipboard.writeText(link);
    this.copyButtonText = 'Másolva!';
    this.showToast('Link kimásolva!');

    setTimeout(() => {
      this.copyButtonText = 'Másolás';
    }, 2000);
  }

  showToast(msg: string) {
    this.toastMessage = msg;
    setTimeout(() => (this.toastMessage = null), 2500);
  }
}
