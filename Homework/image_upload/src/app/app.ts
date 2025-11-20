import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ImageUploader } from './image-uploader/image-uploader';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ImageUploader],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'Martin képfeltöltő alkalmazás';
}
