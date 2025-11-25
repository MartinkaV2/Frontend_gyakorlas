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
  uploadedImagePageUrl: string | null = null;

  sharing = false;
  sharePanelVisible = false;
  copyButtonText = 'Másolás';
  copyPageButtonText = 'Link másolása';
  toastMessage: string | null = null;

  private IMGBB_API_KEY = 'ca9b5247c0f4808db809fe19c291e9cc';

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (!input.files?.length) return;

    this.selectedFile = input.files[0];

    const reader = new FileReader();
    reader.onload = e => this.selectedPreview = e.target?.result as string;
    reader.readAsDataURL(this.selectedFile);
    
    // Reset previous upload state
    this.uploadedImageUrl = null;
    this.uploadedImagePageUrl = null;
    this.sharePanelVisible = false;
    this.sharing = false;
  }

  async uploadImage() {
    if (!this.selectedFile) {
      this.showToast('Válassz ki egy fájlt először!');
      return;
    }

    this.uploading = true;
    this.uploadedImageUrl = null;
    this.uploadedImagePageUrl = null;
    this.sharePanelVisible = false;

    const formData = new FormData();
    formData.append('image', this.selectedFile);

    try {
      console.log('Kép feltöltése elkezdve...');
      
      const response = await fetch(
        `https://api.imgbb.com/1/upload?key=${this.IMGBB_API_KEY}`,
        { 
          method: 'POST', 
          body: formData 
        }
      );

      console.log('Válasz érkezett:', response.status);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Teljes API válasz:', data);

      if (data.success) {
        // Debug: logoljuk az egész data objektumot
        console.log('Data object:', data.data);
        
        // Különböző lehetséges URL formátumok
        let imageUrl = data.data.url || 
                      data.data.display_url || 
                      data.data.image?.url ||
                      data.data.medium?.url ||
                      data.data.thumb?.url;

        let pageUrl = data.data.url_viewer || 
                     data.data.image?.url_viewer ||
                     data.data.display_url || // Fallback
                     imageUrl; // Végső fallback

        // Ha még mindig nincs URL, próbáljuk meg megtalálni bármilyen URL-t
        if (!imageUrl && data.data) {
          // Keressünk URL-t a data objektumban
          const findUrl = (obj: any): string | null => {
            for (const key in obj) {
              if (typeof obj[key] === 'string' && obj[key].startsWith('http')) {
                return obj[key];
              }
              if (typeof obj[key] === 'object' && obj[key] !== null) {
                const found = findUrl(obj[key]);
                if (found) return found;
              }
            }
            return null;
          };
          
          imageUrl = findUrl(data.data) || imageUrl;
        }

        if (imageUrl) {
          this.uploadedImageUrl = imageUrl;
          this.uploadedImagePageUrl = pageUrl;
          
          this.showToast('Kép sikeresen feltöltve!');
          console.log('Feltöltött kép URL:', this.uploadedImageUrl);
          console.log('Kép oldal URL:', this.uploadedImagePageUrl);
        } else {
          console.error('Nem található URL az API válaszban:', data);
          throw new Error('Nem található URL az API válaszban');
        }
      } else {
        throw new Error(data.error?.message || 'Ismeretlen hiba az API-tól');
      }

    } catch (error) {
      console.error('Feltöltési hiba:', error);
      this.showToast('Hiba a feltöltésben: ' + (error instanceof Error ? error.message : 'Ismeretlen hiba'));
    }

    this.uploading = false;
  }

  onShare() {
    if (!this.uploadedImageUrl) {
      this.showToast('Először tölts fel egy képet!');
      return;
    }
    
    this.sharing = true;
    
    setTimeout(() => {
      this.sharing = false;
      this.sharePanelVisible = true;
    }, 300);
  }

  async copyLink(link: string) {
    try {
      await navigator.clipboard.writeText(link);
      this.copyButtonText = 'Másolva!';
      this.showToast('Kép linkje kimásolva!');

      setTimeout(() => {
        this.copyButtonText = 'Másolás';
      }, 2000);
    } catch (e) {
      // Fallback másolási módszer
      this.fallbackCopyText(link);
      this.copyButtonText = 'Másolva!';
      this.showToast('Kép linkje kimásolva!');
      
      setTimeout(() => {
        this.copyButtonText = 'Másolás';
      }, 2000);
    }
  }

  async copyPageLink(link: string) {
    try {
      await navigator.clipboard.writeText(link);
      this.copyPageButtonText = 'Link másolva!';
      this.showToast('Oldal linkje kimásolva!');

      setTimeout(() => {
        this.copyPageButtonText = 'Link másolása';
      }, 2000);
    } catch (e) {
      // Fallback másolási módszer
      this.fallbackCopyText(link);
      this.copyPageButtonText = 'Link másolva!';
      this.showToast('Oldal linkje kimásolva!');
      
      setTimeout(() => {
        this.copyPageButtonText = 'Link másolása';
      }, 2000);
    }
  }

  private fallbackCopyText(text: string) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand('copy');
    } catch (err) {
      console.error('Fallback másolás hiba:', err);
    }
    document.body.removeChild(textArea);
  }

  openImagePage() {
    if (this.uploadedImagePageUrl) {
      window.open(this.uploadedImagePageUrl, '_blank');
    }
  }

  showToast(msg: string) {
    this.toastMessage = msg;
    setTimeout(() => (this.toastMessage = null), 3000);
  }
}