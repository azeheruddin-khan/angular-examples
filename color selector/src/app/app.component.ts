import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RGBComponent } from './rgb/rgb.component';
import { RGBAComponent } from './rgba/rgba.component';
import { HSLComponent } from "./hsl/hsl.component";
import { HSLAComponent } from './hsla/hsla.component';
import { HEXComponent } from './hex/hex.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RGBComponent, RGBAComponent, HSLComponent,HSLAComponent,HEXComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_18_app';
}
