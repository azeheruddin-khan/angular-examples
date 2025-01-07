import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rgb',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './rgb.component.html',
  styleUrl: './rgb.component.css'
})
export class RGBComponent {

  minValue:number=0;
  maxValue:number= 255;

  redValue:number=0;
  greenValue:number=0;
  blueValue:number=0;
  rgbColor:string = `rgb(${this.redValue},${this.greenValue},${this.blueValue})`;

  update()
  {
    this.rgbColor = `rgb(${this.redValue},${this.greenValue},${this.blueValue})`;
  }

}
